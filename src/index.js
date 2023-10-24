import css from './index.css';

export default class AnyButton {

    /**
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(){
        return {
            title:"Button",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path d="m207 207 335.746 129.046-93.871 50.932L548 485.875 485.875 548l-98.896-99.125-50.934 93.871L207 207Zm-39.327 92.208a14.631 14.631 0 0 1 13.917 9.142 14.662 14.662 0 0 1-3.63 16.263l-43.892 43.945a14.62 14.62 0 0 1-14.265 3.947 14.641 14.641 0 0 1-10.408-10.537 14.661 14.661 0 0 1 4.1-14.238l43.891-43.945a14.626 14.626 0 0 1 8.458-4.348c.604-.114 1.215-.19 1.829-.227Zm-14.63-72.782c8.08 0 14.63 6.558 14.63 14.649 0 8.09-6.55 14.648-14.63 14.648H50.63c-8.08 0-14.63-6.558-14.63-14.648s6.55-14.649 14.63-14.649ZM359.01 108.783a14.631 14.631 0 0 1 13.917 9.141 14.662 14.662 0 0 1-3.63 16.264l-43.891 43.945a14.62 14.62 0 0 1-14.263 3.942 14.641 14.641 0 0 1-10.405-10.534 14.661 14.661 0 0 1 4.094-14.236l43.891-43.945a14.626 14.626 0 0 1 8.458-4.348c.604-.115 1.215-.191 1.829-.229Zm-244.144-7.095a14.622 14.622 0 0 1 11.887 4.349l43.891 43.944a14.661 14.661 0 0 1 4.105 14.241 14.641 14.641 0 0 1-10.41 10.54 14.62 14.62 0 0 1-14.268-3.953l-43.89-43.944a14.662 14.662 0 0 1-3.727-15.38 14.635 14.635 0 0 1 12.412-9.797ZM240.824 36c8.08 0 14.63 6.558 14.63 14.648v102.537c0 8.09-6.55 14.649-14.63 14.649-8.08 0-14.63-6.56-14.63-14.649V50.648c0-8.09 6.55-14.648 14.63-14.648Z" fill="#5C6B7A" fill-rule="evenodd"/></svg>'
        }
    }

    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @return {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }
    /**
     *
     * @returns {boolean}
     */
    static get enableLineBreaks() {
        return false;
    }


    /**
     *
     * @returns {{EDIT: number, VIEW: number}}
     * @constructor
     */
    static get STATE() {
        return {
            EDIT:0,
            VIEW:1
        };
    }

      /**
   * Default Alert align type
   *
   * @public
   * @returns {string}
   */
    static get DEFAULT_ALIGN_TYPE() {
        return 'center';
    }

    /**
     *
     * @param data
     */
    set data(data) {
        this._data = Object.assign({}, {
            link: this.api.sanitizer.clean(data.link || "", AnyButton.sanitize),
            text: this.api.sanitizer.clean(data.text || "", AnyButton.sanitize),
            align: this.api.sanitizer.clean(data.align || AnyButton.DEFAULT_ALIGN_TYPE, AnyButton.sanitize)
        });
    }
    /**
     *
     * @returns {{text: string, link: string, align: string}}
     */
    get data() {
        return this._data;
    }

    /**
     * セーブ時のバリデーション
     * @param savedData
     * @returns {boolean}
     */
    validate(savedData){
        if(this._data.link === "" || this._data.text === ""){
            return false;
        }

        return true;
    }
    /**
     *
     * @param block
     * @returns {{caption: string, text: string }}
     */
    save(block){
        return this._data;
    }

    /**
     * タグを全部削除する
     * @returns {{link: boolean, text: boolean}}
     */
    static get sanitize(){
        return {
            text: false,
            link: false
        }
    }

    /**
     *
     * @param data
     * @param config
     * @param api
     * @param readOnly
     */
    constructor({ data, config, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;

        this.nodes = {
            wrapper: null,
            container: null,
            inputHolder: null,
            anyButtonHolder: null,
            textInput: null,
            linkInput: null,
            registButton: null,
            anyButton: null,
            state: AnyButton.STATE.VIEW,
        }

        this.aligns = [
            {
                name: 'left',
                title: 'Align Left',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z"/></svg>`
            },
            {
                name: 'center',
                title: 'Align Center',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm-51 101c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.757 1.925 8.542 5.282 11.86 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86ZM525.721 336H114.366c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.358 3.32 7.207 5.223 11.997 5.223H525.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223Zm-52 102.021H165.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.862v33.68c0 4.757 1.432 8.542 4.79 11.86 3.357 3.341 7.677 5.223 11.996 5.223h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862-3.357-3.34-7.207-5.222-11.997-5.222Z"/></svg>`
            },
            {
                name: 'right',
                title: 'Align Right',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm0 101.549c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.757 1.925 8.542 5.282 11.861 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.104 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 102.035c-3.357-3.32-7.207-5.223-11.997-5.223H131.366c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861 3.358 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 101.57c-3.357-3.341-7.207-5.223-11.997-5.223H234.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.861v33.68c0 4.758 1.432 8.542 4.79 11.862 3.357 3.34 7.677 5.222 11.996 5.222h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862Z"/></svg>`
            }
        ];

        //css overwrite
        const _CSS = {
            baseClass: this.api.styles.block,
            hide: "hide",
            btn: "cdx-btn",
            container: "anyButtonContainer",
            input: "anyButtonContainer__input",

            inputHolder: "anyButtonContainer__inputHolder",
            inputText: "anyButtonContainer__input--text",
            inputLink: "anyButtonContainer__input--link",
            registButton: "anyButtonContainer__registerButton",
            anyButtonHolder: "anyButtonContainer__anyButtonHolder",
            btnColor: "cdx-btn--default",
        }

        this.CSS = Object.assign(_CSS, config.css)
          
        this.data = {
            link: data.link || "",
            text: data.text || "",
            align: data.align || AnyButton.DEFAULT_ALIGN_TYPE
        };
    }

    render(){
        this.nodes.wrapper = this.make('div', this.CSS.baseClass);
        this.nodes.container = this.make('div', this.CSS.container); //twitter-embed-tool

        //input
        this.nodes.inputHolder = this.makeInputHolder();
        //display button
        this.nodes.anyButtonHolder = this.makeAnyButtonHolder();

        this.nodes.container.appendChild(this.nodes.inputHolder);
        this.nodes.container.appendChild(this.nodes.anyButtonHolder);

        if (this._data.link !== "") {
            this.init()
            this.show(AnyButton.STATE.VIEW)
        } else {
            this.show(AnyButton.STATE.EDIT)
        }

        this.nodes.wrapper.appendChild(this.nodes.container);

        this.updateAlign(this.data.align);

        return this.nodes.wrapper;
    }

    /**
     * Create Block's settings block
     *
     * @returns {array}
     */
    renderSettings() {
        const edit = {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M510.084 344.96c1.024-8.192 1.792-16.512 1.792-24.96s-.768-16.768-1.792-24.96l54.127-42.368c4.863-3.84 6.27-10.752 3.071-16.384l-51.184-88.704c-3.199-5.504-9.853-7.808-15.61-5.504l-63.725 25.728c-13.18-10.112-27.639-18.688-43.25-25.216l-9.597-67.84C382.764 68.736 377.518 64 371.12 64H268.752c-6.398 0-11.644 4.736-12.668 10.752l-9.597 67.84c-15.611 6.528-30.07 14.976-43.25 25.216l-63.724-25.728c-5.758-2.176-12.412 0-15.611 5.504l-51.184 88.704c-3.2 5.504-1.792 12.416 3.07 16.384l54 42.368c-1.024 8.192-1.792 16.512-1.792 24.96s.768 16.768 1.792 24.96l-54 42.368c-4.862 3.84-6.27 10.752-3.07 16.384l51.184 88.704c3.199 5.504 9.853 7.808 15.61 5.504l63.725-25.728c13.18 10.112 27.639 18.688 43.25 25.216l9.597 67.84c1.024 6.016 6.27 10.752 12.668 10.752H371.12c6.398 0 11.644-4.736 12.668-10.752l9.597-67.84c15.611-6.528 30.07-14.976 43.25-25.216l63.724 25.728c5.758 2.176 12.412 0 15.611-5.504l51.184-88.704c3.2-5.504 1.792-12.416-3.07-16.384l-54-42.368ZM319.936 409.6c-49.52 0-89.572-40.064-89.572-89.6 0-49.536 40.052-89.6 89.572-89.6s89.572 40.064 89.572 89.6c0 49.536-40.052 89.6-89.572 89.6Z"/></svg>`,
            name: 'edit-button',
            label: 'Edit button',
            toggle: 'edit',
            isActive: this.nodes.state === AnyButton.STATE.EDIT,
            onActivate: () => {
                this.show(this.nodes.state === 0 ? 1 : 0);
            },
        };

        const alignTypes = this.aligns.map((align) => ({
            icon: align.icon,
            name: `align-${align.name}`,
            label: align.title,
            toggle: 'align',
            isActive: this.data.align === align.name,
            onActivate: () => {
                this.updateAlign(align.name);
            },
        }));

        return [edit, ...alignTypes];
    }

    updateAlign(currentAlign) {
        if (this.data.align === currentAlign && this.nodes.anyButton.classList.contains(`cdx-pr-button--${currentAlign}`)) return;

        this.data.align = currentAlign;

        this.aligns.forEach(align => {
            this.nodes.anyButton.classList.toggle(`cdx-pr-button--${align.name}`, this.data.align === align.name);
        });
    }

    makeInputHolder() {
        const inputHolder = this.make('div', [this.CSS.inputHolder]);
        this.nodes.textInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputText], {
            contentEditable: !this.readOnly,
        });
        this.nodes.textInput.dataset.placeholder = this.api.i18n.t('Type button copy');

        this.nodes.linkInput = this.make('div', [this.api.styles.input, this.CSS.input,  this.CSS.inputLink], {
            contentEditable: !this.readOnly,
        })
        this.nodes.linkInput.dataset.placeholder = this.api.i18n.t('Paste or type URL');

        this.nodes.registButton = this.make('button',[this.api.styles.button, this.CSS.registButton]);
        this.nodes.registButton.type = 'button';
        this.nodes.registButton.textContent = this.api.i18n.t('Add button');


        this.nodes.registButton.addEventListener('click', (event) => {
            this.data = {
                "link": this.nodes.linkInput.textContent,
                "text": this.nodes.textInput.textContent,
                "align": this.data.align
            }
            this.show(AnyButton.STATE.VIEW);
        });

        inputHolder.appendChild(this.nodes.textInput);
        inputHolder.appendChild(this.nodes.linkInput);
        inputHolder.appendChild(this.nodes.registButton);

        return inputHolder;
    }

    init(){
        this.nodes.textInput.textContent = this._data.text;
        this.nodes.linkInput.textContent = this._data.link;
    }

    show(state){
        this.nodes.anyButton.textContent = this._data.text;
        this.nodes.anyButton.setAttribute("href", this._data.link);
        this.nodes.state = state;
        this.changeState(state);
    }

    makeAnyButtonHolder(){
        const anyButtonHolder = this.make('div', [this.CSS.hide, this.CSS.anyButtonHolder]);
        this.nodes.anyButton = this.make('a',[this.CSS.btn, this.CSS.btnColor],{
            target: '_blank',
            rel: 'nofollow noindex noreferrer',
        });
        this.nodes.anyButton.textContent = this.api.i18n.t("Default Button");
        anyButtonHolder.appendChild(this.nodes.anyButton);
        return anyButtonHolder;
    }

    changeState(state){

        switch (state) {
            case AnyButton.STATE.EDIT:
                this.nodes.inputHolder.classList.remove(this.CSS.hide);
                this.nodes.anyButtonHolder.classList.add(this.CSS.hide);

                break;
            case AnyButton.STATE.VIEW:
                this.nodes.inputHolder.classList.add(this.CSS.hide);
                this.nodes.anyButtonHolder.classList.remove(this.CSS.hide);
                break;
        }
    }

    /**
     * node 作成用
     * @param tagName
     * @param classNames
     * @param attributes
     * @returns {*}
     */
    make(tagName, classNames = null, attributes = {}) {
        const el = document.createElement(tagName);

        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        } else if (classNames) {
            el.classList.add(classNames);
        }

        for (const attrName in attributes) {
            el[attrName] = attributes[attrName];
        }

        return el;
    }
}
