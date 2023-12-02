import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { studentApi } from '../../../../Api';

function Body({ handleShow, classroom, hidden, setMember }) {
    const [data, setData] = useState([]);
    const classnameIcon1 = clsx('fa-solid fa-pen', styles.icon_1);
    const classnameIcon2 = clsx('fa-solid fa-trash', styles.icon_2);
    useEffect(() => {
        setData([]);
        async function axiosData() {
            await axios
                .get(studentApi)
                .then((response) => {
                    if (response.data.student !== undefined) {
                        for (let i in response.data.student) {
                            if (response.data.student[i].Class === classroom) {
                                setData((d) => [
                                    ...d,
                                    response.data.student[i],
                                ]);
                            }
                        }
                        if (classroom === 'Tổng hợp') {
                            setData(response.data.student);
                        }
                    }
                })
                .catch((err) => {
                    console.log('ERROR', err);
                });
        }
        axiosData();
    }, [classroom]);
    useEffect(() => {
        setMember(data.length);
    }, [data, setMember]);
    if (classroom === 'Tổng hợp') {
        return data.map((element, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.MSSV}</td>
                <td>{element.Name}</td>
                <td>{element.Birth}</td>
                <td>{element.Faculty}</td>
                <td>{element.QT}</td>
                <td>{element.GK}</td>
                <td>{element.CK}</td>
                <td>{element.TB}</td>
                <td>
                    {element.Class}
                    <Link to={`/student/${element._id}/edit`}>
                        <i className={hidden ? classnameIcon1 : ''}></i>
                    </Link>
                    <i
                        className={hidden ? classnameIcon2 : ''}
                        onClick={() => handleShow(element._id)}
                    ></i>
                </td>
            </tr>
        ));
    }
    return data.map((element, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.MSSV}</td>
            <td>{element.Name}</td>
            <td>{element.Birth}</td>
            <td>{element.Faculty}</td>
            <td>{element.QT}</td>
            <td>{element.GK}</td>
            <td>{element.CK}</td>
            <td>
                {element.TB}
                <Link to={`/student/${element._id}/edit`}>
                    <i className={hidden ? classnameIcon1 : ''}></i>
                </Link>
                <i
                    className={hidden ? classnameIcon2 : ''}
                    onClick={() => handleShow(element._id)}
                ></i>
            </td>
        </tr>
    ));
}

export default Body;
