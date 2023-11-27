function check(formdata) {
    const value_error = {
        Empty: [],
        CharSpecial: [],
        TestName: [],
        TestNum: [],
        LevelOut: [],
    };
    const value_success = {
        Empty: [],
        CharSpecial: [],
        TestName: [],
        TestNum: [],
        LevelOut: [],
    };
    checkEmpty(formdata, value_error, value_success);
    checkCharSpecial(formdata, value_error, value_success);
    checkNumInString(formdata.Name, value_error, value_success);
    checkCharInNum(formdata, value_error, value_success);
    checkMaxMinNumber(formdata, value_error, value_success);
    console.log([value_error, value_success]);
    return [value_error, value_success];
}
function checkNumInString(data, value_error, value_success) {
    const number = /\d+/g; //đoạn mã kiểm tra số trong chuỗi
    if (number.test(data)) {
        value_error.TestName.push('Name');
    } else {
        value_success.TestName.push('Name');
    }
}
function checkCharInNum(datas, value_error, value_success) {
    const char = /[A-Z|a-z]/g; //đoạn mã kiểm tra số trong chuỗi
    const list = ['QT', 'GK', 'CK'];
    for (let i of list) {
        if (char.test(datas[i])) {
            value_error.TestNum.push(i);
        } else {
            value_success.TestNum.push(i);
        }
    }
}
function checkEmpty(data, value_error, value_success) {
    for (let i in data) {
        if (data[i] === '') {
            value_error.Empty.push(i);
        } else {
            value_success.Empty.push(i);
        }
    }
}
function checkCharSpecial(datas, value_error, value_success) {
    for (let data in datas) {
        const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; //đoạn mã tìm kí tự đặc biệt trong chuỗi
        const regexfornum = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/;
        if (data == 'QT' || data == 'GK' || data == 'CK') {
            if (regexfornum.test(datas[data])) {
                value_error.CharSpecial.push(data);
            }
        } else if (regex.test(datas[data]) && data != 'Date') {
            value_error.CharSpecial.push(data);
        } else {
            value_success.CharSpecial.push(data);
        }
    }
}
function checkMaxMinNumber(datas, value_error, value_success) {
    const list = ['QT', 'GK', 'CK'];
    for (let i of list) {
        if (parseInt(datas[i]) < 0 || parseInt(datas[i]) > 10) {
            value_error.LevelOut.push(i);
        } else {
            value_success.LevelOut.push(i);
        }
    }
}
function addInfoError(len, target, classname, themeerror, themeinfo, info) {
    if (len != 0) {
        for (let name of target) {
            classname = {
                ...classname,
                [name]: [
                    themeerror,
                    <small className={themeinfo}>{info}</small>,
                ],
            };
        }
    }
    return classname;
}

function checkSuccessError(test, styles, setI) {
    let classname = {
        MSSV: [],
        Name: [],
        Date: [],
        Faculty: [],
        QT: [],
        GK: [],
        CK: [],
        Class: [],
    };
    classname = addInfoError(
        test[0].Empty.length,
        test[0].Empty,
        classname,
        styles.error,
        styles.info,
        'Không được để trống',
    );
    classname = addInfoError(
        test[0].CharSpecial.length,
        test[0].CharSpecial,
        classname,
        styles.error,
        styles.info,
        'Không được dùng kí tự đặc biệt',
    );
    classname = addInfoError(
        test[0].TestName.length,
        test[0].TestName,
        classname,
        styles.error,
        styles.info,
        'Không được tồn tại số',
    );
    classname = addInfoError(
        test[0].TestNum.length,
        test[0].TestNum,
        classname,
        styles.error,
        styles.info,
        'Không được tồn tại chữ',
    );
    classname = addInfoError(
        test[0].LevelOut.length,
        test[0].LevelOut,
        classname,
        styles.error,
        styles.info,
        'Vượt quá phạm vi số cho phép (0 - 10)',
    );
    for (let name in classname) {
        if (typeof classname[name] == 'string') {
            classname = {
                ...classname,
                [name]: [styles.success, null],
            };
        }
    }
    let bool = true;
    for (let i in classname) {
        if (classname[i][1] != null) {
            bool = false;
        }
    }
    if (bool) {
        return bool;
    }
    setI(classname);
}

export { check, checkEmpty, checkSuccessError };
