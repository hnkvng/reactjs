import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import styles from './main.module.css';
import { classroomApi } from '../../../../Api';
import axios from 'axios';
function Class({ setClass }) {
    const [data, setData] = useState([]);
    const handleClick = (event) => {
        setClass(event.target.value);
    };
    useEffect(() => {
        async function axiosData() {
            await axios
                .get(classroomApi)
                .then((response) => {
                    if (response.data.Class !== undefined) {
                        setData(response.data.Class);
                    }
                })
                .catch((err) => {
                    console.log('ERROR', err);
                });
        }
        axiosData();
    }, []);
    return (
        <Form.Select className={styles.select_class} onClick={handleClick}>
            <option value="Tổng hợp">Tổng hợp | số lớp : {data.length} </option>
            {data.map((element, index) => (
                <>
                    <option key={index} value={element.Name}>
                        Lớp/{element.Name}
                    </option>
                </>
            ))}
        </Form.Select>
    );
}

export default Class;
