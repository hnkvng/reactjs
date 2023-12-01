class InitFormData {
    #initFormData = {
        MSSV: '',
        Name: '',
        Date: '',
        Faculty: '',
        QT: '',
        GK: '',
        CK: '',
        Class: '',
    };
    getInfo() {
        return this.#initFormData;
    }
    changeFormData(data) {
        this.#initFormData = {
            ...this.#initFormData,
            ...data,
        };
        return this.#initFormData;
    }
    getForm(data) {
        if (data.status) {
            return this.#initFormData;
        }
    }
    clearData() {
        this.#initFormData = {
            MSSV: '',
            Name: '',
            Date: '',
            Faculty: '',
            QT: '',
            GK: '',
            CK: '',
            Class: '',
        };
    }
}

export { InitFormData };
