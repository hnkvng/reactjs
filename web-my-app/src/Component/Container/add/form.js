import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './main.module.css';
import { formPayload, test, sameId } from './handle';
import { addApi, editApi } from '../../../Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function FormAdd({
    changeSubmit,
    formData,
    nameButton,
    MSSV,
    formGroup,
    student,
    eventChild,
    dispatch,
}) {
    const target = useRef();
    const nav = useNavigate();
    const [info, setInfo] = useState(null);
    const [styleInput, setStyleInput] = useState({});
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(formPayload(name, 'change', { [name]: value }));
    };
    const handleKeydown = (event) => {
        if (event.keyCode === 190) {
            //190:"."
            const { name, value } = event.target;
            dispatch(formPayload(name, 'change', { [name]: value + '.0' }));
        }
    };
    const handleChange = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(editApi, formData);
            setTimeout(() => {
                nav('/student');
            }, 1000);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(formPayload('', 'add', ''));
        target.current.focus();
        try {
            const response = await axios.post(addApi, formData);
            setTimeout(() => {
                nav('/student');
            }, 1000);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleOnclick = () => {
        target.current.focus();
        dispatch(formPayload('', 'clear', ''));
    };
    useEffect(() => {
        if (MSSV !== null && MSSV === formData.MSSV) {
            setButtonDisabled(test(formData));
            return;
        }
        if (sameId(formData.MSSV, student)) {
            setStyleInput({ border: '1px solid red' });
            setInfo(
                <small className={styles.log_info}>
                    Mã số sinh viên đã tồn tại
                </small>,
            );
            setButtonDisabled(true);
        } else {
            setStyleInput({});
            setInfo(null);
            setButtonDisabled(test(formData));
        }
    }, [formData, student, MSSV]);
    useEffect(() => {
        dispatch(formPayload('', 'init', ''));
        target.current.focus();
    }, [target, dispatch]);
    return (
        <Form
            action="/student"
            className={styles.form}
            onSubmit={changeSubmit ? handleSubmit : handleChange}
        >
            <Form.Group className={formGroup}>
                <Form.Label>Mã số sinh viên</Form.Label>
                <Form.Control
                    type="text"
                    name="MSSV"
                    onChange={handleInputChange}
                    value={formData.MSSV}
                    ref={target}
                    style={styleInput}
                />
                {info}
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Họ và tên sinh viên</Form.Label>
                <Form.Control
                    type="text"
                    name="Name"
                    onChange={handleInputChange}
                    value={formData.Name}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                    type="date"
                    name="Birth"
                    onChange={handleInputChange}
                    value={formData.Birth}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Khoa</Form.Label>
                <Form.Control
                    type="text"
                    name="Faculty"
                    onChange={handleInputChange}
                    value={formData.Faculty}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm quá trình</Form.Label>
                <Form.Control
                    type="text"
                    name="QT"
                    onKeyDown={handleKeydown}
                    onChange={handleInputChange}
                    value={formData.QT}
                    maxLength={3}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm giữa kì</Form.Label>
                <Form.Control
                    type="text"
                    name="GK"
                    onKeyDown={handleKeydown}
                    onChange={handleInputChange}
                    value={formData.GK}
                    maxLength={3}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Điểm cuối kì</Form.Label>
                <Form.Control
                    type="text"
                    name="CK"
                    onKeyDown={handleKeydown}
                    onChange={handleInputChange}
                    value={formData.CK}
                    maxLength={3}
                />
            </Form.Group>
            <Form.Group className={formGroup}>
                <Form.Label>Mã lớp</Form.Label>
                <Form.Control
                    type="text"
                    name="Class"
                    onChange={handleInputChange}
                    value={formData.Class}
                />
            </Form.Group>
            <div className={styles.costumebutton} onClick={eventChild}>
                <Button
                    variant="primary"
                    className={styles.customs_button}
                    type="submit"
                    disabled={isButtonDisabled}
                >
                    {nameButton}
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
