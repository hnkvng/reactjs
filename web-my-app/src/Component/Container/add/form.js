import React, { useEffect, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './main.module.css';
import { Handle } from './handle';
import { InitFormData, InitClassInput } from './init';
import { addApi, studentApi } from '../../../Api';
import axios from 'axios';

function test(data) {
    for (let i in data) {
        if (data[i] == '') {
            return true;
        }
    }
    return false;
}

function FormAdd({ formGroup }) {
    const [formData, dispatch] = useReducer(
        new Handle().setState,
        new InitFormData().getInfo(),
    );
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    // const [inputClass, setInputclass] = useState(new InitClassInput().getClass());
    const formPayload = new Handle().setPayload;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(formPayload(name, 'change', { [name]: value }));
    };
    const handleKeydown = (event) => {
        if (event.keyCode === 190) {
            //dấu .
            const { name, value } = event.target;
            dispatch(formPayload(name, 'change', { [name]: value + '.0' }));
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(formPayload('', 'add', ''));
        try {
            const response = await axios.post(addApi, formData);
            console.log(response.data);
        } catch (error) {
            console.error('Lỗi khi đăng dữ liệu:', error);
        }
    };
    const handleOnclick = () => {
        dispatch(formPayload('', 'clear', ''));
    };
    useEffect(() => {
        setButtonDisabled(test(formData));
    }, [formData]);
    return (
        <Form action="/student" className={styles.form} onSubmit={handleSubmit}>
            <Form.Group className={formGroup}>
                <Form.Label>Mã số sinh viên</Form.Label>
                <Form.Control
                    type="text"
                    name="MSSV"
                    // className={inputClass.MSSV}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.MSSV}
                />
                {/* {inputClass.MSSV[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Họ và tên sinh viên</Form.Label>
                <Form.Control
                    type="text"
                    name="Name"
                    // className={inputClass.Name}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.Name}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                    type="date"
                    name="Date"
                    // className={inputClass.Date}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.Date}
                />
                {/* {inputClass.Date[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Khoa</Form.Label>
                <Form.Control
                    type="text"
                    name="Faculty"
                    // className={inputClass.Name}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.Faculty}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm quá trình</Form.Label>
                <Form.Control
                    type="text"
                    name="QT"
                    onKeyDown={handleKeydown}
                    // className={inputClass.Name}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.QT}
                    maxLength={3}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm giữa kì</Form.Label>
                <Form.Control
                    type="text"
                    name="GK"
                    // className={inputClass.Name}
                    onKeyDown={handleKeydown}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.GK}
                    maxLength={3}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm cuối kì</Form.Label>
                <Form.Control
                    type="text"
                    name="CK"
                    // className={inputClass.Name}
                    onKeyDown={handleKeydown}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.CK}
                    maxLength={3}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Mã lớp</Form.Label>
                <Form.Control
                    type="text"
                    name="Class"
                    // className={inputClass.Name}
                    onChange={handleInputChange}
                    // onFocus={handleFocus}
                    value={formData.Class}
                />
                {/* {inputClass.Name[1]} */}
            </Form.Group>
            <div className={styles.costumebutton}>
                <Button
                    variant="primary"
                    className={styles.customs_button}
                    type="submit"
                    disabled={isButtonDisabled}
                >
                    Thêm
                </Button>
                <Button
                    variant="primary"
                    className={styles.customs_button}
                    onClick={handleOnclick}
                >
                    Dọn
                </Button>
            </div>
        </Form>
    );
}
export default FormAdd;
