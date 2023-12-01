class InitFormData {
    #initFormData = {
        STT: '',
        _id: '',
        MSSV: '',
        Name: '',
        Birth: '',
        Faculty: '',
        QT: '',
        GK: '',
        CK: '',
        Class: '',
        createdAt: '',
        updatedAt: '',
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
            Birth: '',
            Faculty: '',
            QT: '',
            GK: '',
            CK: '',
            Class: '',
        };
    }
}

export { InitFormData };
