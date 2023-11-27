import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './main.module.css';
import axios from 'axios';
import { check, checkSuccessError } from './checkdata';
import { clearClassName } from './clear';

function FormAdd() {
    const navigate = useNavigate();
    const form_group = clsx('mb-3', [styles.form_group]);
    const [inputclass, setInputclass] = useState({
        MSSV: '',
        Name: '',
        Date: '',
        Faculty: '',
        QT: 0,
        GK: 0,
        CK: 0,
        Class: '',
    });
    const [formdata, setFormdata] = useState({
        MSSV: '',
        Name: '',
        Date: '',
        Faculty: '',
        QT: 0,
        GK: 0,
        CK: 0,
        Class: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormdata({ ...formdata, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const test = check(formdata);
        const bool = checkSuccessError(test, styles, setInputclass);
        if (bool) {
            axios
                .post('http://localhost:4000/api/add', formdata)
                .then((response) => {
                    setFormdata({
                        MSSV: '',
                        Name: '',
                        Date: '',
                        Faculty: '',
                        QT: 0,
                        GK: 0,
                        CK: 0,
                        Class: '',
                    });
                    navigate('/student');
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };
    const handleFocus = (event) => {
        clearClassName(event.target.name, inputclass, setInputclass);
    };
    return (
        <div className={styles.container}>
            <Form
                action="/student"
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <Form.Group className={form_group}>
                    <Form.Label>MSSV</Form.Label>
                    <Form.Control
                        type="text"
                        name="MSSV"
                        className={inputclass.MSSV[0]}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.MSSV}
                    />
                    {inputclass.MSSV[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Họ và tên sinh viên</Form.Label>
                    <Form.Control
                        type="text"
                        name="Name"
                        className={inputclass.Name}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.Name}
                    />
                    {inputclass.Name[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                        type="date"
                        name="Date"
                        className={inputclass.Date}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.Date}
                    />
                    {inputclass.Date[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Khoa</Form.Label>
                    <Form.Control
                        type="text"
                        name="Faculty"
                        className={inputclass.Faculty}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.Faculty}
                    />
                    {inputclass.Faculty[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Điểm quá trình</Form.Label>
                    <Form.Control
                        type="text"
                        name="QT"
                        className={inputclass.QT}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.QT}
                        maxLength={3}
                    />
                    {inputclass.QT[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Điểm giữa kì</Form.Label>
                    <Form.Control
                        type="text"
                        name="GK"
                        className={inputclass.GK}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.GK}
                        maxLength={3}
                    />
                    {inputclass.GK[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Điểm cuối kì</Form.Label>
                    <Form.Control
                        type="text"
                        name="CK"
                        className={inputclass.CK}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.CK}
                        maxLength={3}
                    />
                    {inputclass.CK[1]}
                </Form.Group>
                <Form.Group className={form_group}>
                    <Form.Label>Lớp</Form.Label>
                    <Form.Control
                        type="text"
                        name="Class"
                        className={inputclass.Class}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        value={formdata.Class}
                    />
                    {inputclass.Class[1]}
                </Form.Group>
                <div className={styles.costumebutton}>
                    <Button
                        variant="primary"
                        className={styles.customs_button}
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
export default FormAdd;
