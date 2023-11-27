import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import clsx from 'clsx';
import axios from 'axios';

function Body() {
    const [data, setData] = useState([]);
    const classnameIcon1 = clsx('fa-solid fa-pen', styles.icon_1);
    const classnameIcon2 = clsx('fa-solid fa-trash', styles.icon_2);
    useEffect(() => {
        async function axiosData() {
            await axios
                .get('http://localhost:4000/api/student')
                .then((response) => {
                    if (response.data.student !== undefined) {
                        setData(response.data.student);
                    }
                })
                .catch((err) => {
                    console.log('ERROR', err);
                });
        }
        axiosData();
    }, []);
    return data.map((element, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.MSSV}</td>
            <td>{element.Name}</td>
            <td>{element.Date}</td>
            <td>{element.Faculty}</td>
            <td>{element.QT}</td>
            <td>{element.GK}</td>
            <td>{element.CK}</td>
            <td>{element.TB}</td>
            <td>
                {element.Class}
                <i className={classnameIcon1}></i>
                <i className={classnameIcon2}></i>
            </td>
        </tr>
    ));
}

export default Body;
