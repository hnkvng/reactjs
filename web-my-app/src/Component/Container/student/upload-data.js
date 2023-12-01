import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './main.module.css';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Body() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    return (
        <>
            {data.map((element, index) => (
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
                            <i className={classnameIcon1}></i>
                        </Link>
                        <i className={classnameIcon2} onClick={handleShow}></i>
                    </td>
                </tr>
            ))}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sinh viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc muốn xóa sinh viên này không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Xóa
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Body;
