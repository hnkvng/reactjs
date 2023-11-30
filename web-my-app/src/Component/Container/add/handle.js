import { InitFormData, InitClassInput } from './init';
import styles from './main.module.css';

//Action
const ADD_ACTITON = 'add';
const ADD_ERROR = 'error';
const CHANGE_ACTION = 'change';
const INITIALIZE = 'default';
const CLEAR_DATA = 'clear';
//DATA
const DATA = new InitFormData();
const ClASS = new InitClassInput();
//Data except

class DataExcept {
    #checkData = /[!@#^$%^&*()_+={}[\]:;<>,.?~"'`\\/-]/;
    #checkEmpty = /^$/;
    #checkSpace = /[\s]+$/;
    #checkNum = /[0-9]/;
    #checkChar = /[a-z A-Z]/;
    #checkForNum = /[^.\w]/;
    #checkForClass = /[^-_]+/;
    getCheck() {
        return [
            this.#checkData,
            this.#checkSpace,
            this.#checkNum,
            this.#checkChar,
            this.#checkForNum,
            this.#checkForClass,
        ];
    }
    getCheckEmpty() {
        return this.#checkEmpty;
    }
}

class Handle {
    setPayload(name, type, payload, set) {
        return {
            name,
            type,
            payload,
            set,
        };
    }
    setInfo(name, title) {
        return {
            name,
            title,
        };
    }
    checkData(name, data) {
        const checkData = dataCheck.getCheck();
        return testCase(name, checkData, data);
    }
    setState(state, action) {
        switch (action.type) {
            case INITIALIZE:
                return DATA.getInfo();
            case CHANGE_ACTION:
                const info = check.checkData(action.name, action.payload);
                if (info.title === 'success') {
                    state = DATA.changeFormData(action.payload);
                    return state;
                }
                return state;
            case ADD_ACTITON:
                state = new InitFormData().getInfo();
                DATA.clearData();
                return state;
            case CLEAR_DATA:
                state = new InitFormData().getInfo();
                DATA.clearData();
                return state;
            default:
                throw new Error('Action invalid');
        }
    }
}
//check
const check = new Handle();
const dataCheck = new DataExcept();

function testCase(name, checkData, data) {
    const nameExcept = ['Class', 'QT', 'GK', 'CK', 'Date'];
    const setInfo = check.setInfo;
    let checked = {};
    if (checkData[0].test(data[name])) {
        if (!nameExcept.find((names) => name === names)) {
            return setInfo(name, 'error');
        }
    }
    switch (name) {
        case 'MSSV':
            checked = {
                test: checkData[1].test(data[name]),
            };
            break;
        case 'Name':
            checked = {
                test: checkData[2].test(data[name]),
            };
            break;
        case 'Date':
            checked = {
                test:
                    new Date(data[name]).getFullYear() >
                    new Date().getFullYear(),
            };
            console.log();
            break;
        case 'Faculty':
            checked = {
                test: checkData[2].test(data[name]),
            };
            break;
        case 'QT':
        case 'GK':
        case 'CK':
            checked = {
                test:
                    data[name] < 0 ||
                    data[name] > 10 ||
                    data[name][2] === '.' ||
                    data[name][3] === '.' ||
                    data[name][0] === '.' ||
                    checkData[1].test(data[name]) ||
                    checkData[3].test(data[name]) ||
                    checkData[4].test(data[name]),
            };
            break;
        case 'Class':
            checked = {
                test:
                    checkData[1].test(data[name]) ||
                    checkData[4].test(data[name]),
            };
            break;
        default:
            throw new Error('value invalid');
    }
    if (checked.test) {
        return setInfo(name, 'error');
    }
    return setInfo(name, 'success', '');
}

export { Handle };
