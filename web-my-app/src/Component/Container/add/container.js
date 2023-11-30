import FormAdd from './form';
import React, { useState, useRef, useEffect } from 'react';
import styles from './main.module.css';
import clsx from 'clsx';
import axios from 'axios';

function Container() {
    const parent = useRef();
    const [elements, setElements] = useState([]);
    const [dataStudent, setDataStudent] = useState(null);
    const [info, setInfo] = useState(null);
    const formGroup = clsx('mb-3', [styles.form_group]);
    const props = {
        elements: elements,
        info: info,
        parent: parent,
        formGroup: formGroup,
        dataStudent: dataStudent,
        setElements: setElements,
        setInfo: setInfo,
    };
    useEffect(() => {
        axios
            .get('http://localhost:4000/api/student')
            .then((response) => {
                setDataStudent(response.data.student);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }, []);
    return (
        <div className={styles.container}>
            <FormAdd {...props}></FormAdd>
        </div>
    );
}
export default Container;
