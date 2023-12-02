import FormAdd from '../../add/form';
import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../add/main.module.css';
import clsx from 'clsx';
import axios from 'axios';
import Info from '../../add/info';
import props from '../../add/info/props';
import { studentApi } from '../../../../Api';
import { InitFormData } from '../../add/init';
import { Handle } from '../../add/handle';

function Edit() {
    const nameButton = 'Thay đổi';
    const changeSubmit = false;
    const { studentId } = useParams();
    const [MSSV, setMSSV] = useState(null);
    const [formData, dispatch] = useReducer(
        new Handle().setState,
        new InitFormData().getInfo(),
    );
    const formPayload = new Handle().setPayload;
    const [info, setInfo] = useState(null);
    const [dataStudent, setDataStudent] = useState([]);
    const [elements, setElements] = useState([]);
    const formGroup = clsx('mb-3', [styles.form_group]);
    const dataInfo = {
        elements: [] && elements,
        info: info,
        setElements: setElements,
    };

    const handleOclickchild = (event) => {
        const butt = event.target.closest('button');
        if (butt) {
            if (butt.type === 'button') {
                setInfo(props.info);
            }
            if (butt.type === 'submit') {
                setInfo(props.edit);
            }
            setElements([
                ...elements,
                {
                    id: elements.length + 1,
                    isVisible: true,
                },
            ]);
            setTime();
        }
    };
    const setTime = () => {
        const id = setTimeout(() => {
            setElements((prevElements) =>
                prevElements.map((el) =>
                    el.id === elements.length + 1
                        ? { ...el, isVisible: false, timeId: null }
                        : el,
                ),
            );
        }, 4000);
        return id;
    };
    useEffect(() => {
        const getApi = async () => {
            await axios
                .get(studentApi)
                .then((response) => {
                    setDataStudent(response.data.student);
                })
                .catch((error) => {
                    console.log('Error', error);
                });
        };
        getApi();
    }, []);
    useEffect(() => {
        const uploadInfo = (student, id) => {
            for (let param in student) {
                if (student[param]._id === id) {
                    const Birth = student[param].Birth;
                    const [day, month, year] = Birth.split('/');
                    const parsedDate = new Date(
                        `${year}-${month}-${parseInt(day) + 1}`,
                    );
                    //[parsedDate.toISOString().split('T')[0]] change type Date become type string and get string at index 0
                    const formattedDate = parsedDate
                        .toISOString()
                        .split('T')[0];
                    student[param].Birth = formattedDate;
                    dispatch(formPayload('', 'changeAll', student[param]));
                    setMSSV(student[param].MSSV);
                }
            }
        };
        uploadInfo(dataStudent, studentId);
    }, [dataStudent, studentId, formPayload]);
    const dataEdit = {
        formData: formData,
        formGroup: formGroup,
        student: dataStudent,
        MSSV: MSSV,
        nameButton: nameButton,
        changeSubmit: changeSubmit,
        eventChild: handleOclickchild,
        dispatch: dispatch,
    };
    return (
        <div className={styles.container}>
            <Info {...dataInfo}></Info>
            <FormAdd {...dataEdit}></FormAdd>
        </div>
    );
}
export default Edit;
