import FormAdd from './form';
import React, { useState, useEffect } from 'react';
import styles from './main.module.css';
import clsx from 'clsx';
import axios from 'axios';
import Info from './info';
import props from './info/props';
import { studentApi } from '../../../Api';

function Container() {
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
                setInfo(props.success);
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
    return (
        <div className={styles.container}>
            <Info {...dataInfo}></Info>
            <FormAdd
                event={handleOclickchild}
                formGroup={formGroup}
                student={dataStudent}
            ></FormAdd>
        </div>
    );
}
export default Container;
