import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './main.module.css';
import Body from './upload-data';
import Delete from './delete';
import axios from 'axios';
import { deleteApi, deleteAllApi, deleteClassApi } from '../../../../Api';
import Class from '../selectionClass/class';

function Table() {
    const tableIcon1 = clsx('fa-solid fa-trash-can', [styles.table_icon1]);
    const [memberStudent, setMemberStudent] = useState(null);
    const [classroom, setClassrooom] = useState('Tổng hợp');
    const [hiddenIcon, setHiddenIcon] = useState(false);
    const [show, setShow] = useState(false);
    const [deletes, setDeletes] = useState(false);
    const [deletesCl, setDeletesCl] = useState(false);
    const [title, setTitle] = useState(null);
    const [des, setDes] = useState(null);
    const [studentId, setStudentId] = useState({});
    const handleClose = () => setShow(false);
    const handleCloseAll = () => setDeletes(false);
    const handleCloseAllCl = () => setDeletesCl(false);
    const handleDelete = async () => {
        try {
            const response = await axios.delete(deleteApi, {
                data: { studentId, classroom },
            });
            setShow(false);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleDeleteAll = async () => {
        try {
            const response = await axios.delete(deleteAllApi, {
                data: { classroom },
            });
            setShow(false);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleShow = (ID) => {
        setStudentId({ _id: ID });
        setTitle('Xóa sinh viên');
        setDes('Bạn có chắc muốn xóa sinh viên này không?');
        setShow(true);
    };
    const handleShowAll = () => {
        setTitle(`Xóa tất cả sinh viên của ${classroom}`);
        setDes(
            `Bạn có chắc muốn xóa tất cả sinh viên của ${classroom} này không?`,
        );
        setDeletes(true);
    };
    const handleShowDeClass = (event) => {
        const contentX = event.target.closest(`.${styles.block}`);
        const select = event.target.closest('select');
        if (contentX && !select) {
            setTitle('Xóa lớp học');
            setDes('Bạn có chắc muốn xóa lớp này không?');
            setDeletesCl(true);
        }
        if (classroom === 'Tổng hợp' && contentX && !select) {
            setTitle('Xóa tất cả lớp học');
            setDes('Bạn có chắc muốn xóa tất lớp học này không?');
            setDeletesCl(true);
        }
    };
    const handleDeleteClass = async () => {
        try {
            const response = await axios.delete(deleteClassApi, {
                data: { classroom },
            });
            setShow(false);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        setHiddenIcon(!(memberStudent === 0));
    }, [classroom, memberStudent]);
    if (classroom === 'Tổng hợp') {
        return (
            <div className={styles.container}>
                <div className={styles.block} onClick={handleShowDeClass}>
                    <Class setClass={setClassrooom}></Class>
                </div>
                <div className={styles.table_responsive}>
                    <div className={styles.title}>
                        <h2>{classroom}</h2>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>MSSV</th>
                                <th>Tên sinh viên</th>
                                <th>Ngày sinh</th>
                                <th>Khoa</th>
                                <th>QT</th>
                                <th>GK</th>
                                <th>CK</th>
                                <th>TB</th>
                                <th>
                                    Lớp
                                    {hiddenIcon && (
                                        <i
                                            className={tableIcon1}
                                            onClick={handleShowAll}
                                        >
                                            {' '}
                                        </i>
                                    )}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Body
                                handleShow={handleShow}
                                classroom={classroom}
                                hidden={hiddenIcon}
                                setMember={setMemberStudent}
                            ></Body>
                            <Delete
                                {...{
                                    des,
                                    show: show || deletes || deletesCl,
                                    title,
                                    handleClose:
                                        (show && handleClose) ||
                                        (deletes && handleCloseAll) ||
                                        (deletesCl && handleCloseAllCl),
                                    handleDelete:
                                        (show && handleDelete) ||
                                        (deletes && handleDeleteAll) ||
                                        (deletesCl && handleDeleteClass),
                                }}
                            />
                        </tbody>
                    </table>
                </div>
                <ul>
                    <span>
                        <strong>*Chú giải:</strong>
                    </span>
                    <li>STT: Số thứ tự</li>
                    <li>MSSV: Mã số sinh viên</li>
                    <li>QT: điểm quá trình</li>
                    <li>GK: điểm giữa kì</li>
                    <li>CK: điểm cuối kì</li>
                    <li>TB: điểm trung bình</li>
                </ul>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.block} onClick={handleShowDeClass}>
                <Class setClass={setClassrooom}></Class>
            </div>
            <div className={styles.table_responsive}>
                <div className={styles.title}>
                    <h2>{classroom}</h2>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Khoa</th>
                            <th>QT</th>
                            <th>GK</th>
                            <th>CK</th>
                            <th>
                                TB
                                {hiddenIcon && (
                                    <i
                                        className={tableIcon1}
                                        onClick={handleShowAll}
                                    >
                                        {' '}
                                    </i>
                                )}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Body
                            handleShow={handleShow}
                            classroom={classroom}
                            hidden={hiddenIcon}
                            setMember={setMemberStudent}
                        ></Body>
                        <Delete
                            {...{
                                des,
                                show: show || deletes || deletesCl,
                                title,
                                handleClose:
                                    (show && handleClose) ||
                                    (deletes && handleCloseAll) ||
                                    (deletesCl && handleCloseAllCl),
                                handleDelete:
                                    (show && handleDelete) ||
                                    (deletes && handleDeleteAll) ||
                                    (deletesCl && handleDeleteClass),
                            }}
                        />
                    </tbody>
                </table>
            </div>
            <ul>
                <span>
                    <strong>*Chú giải:</strong>
                </span>
                <li>STT: Số thứ tự</li>
                <li>MSSV: Mã số sinh viên</li>
                <li>QT: điểm quá trình</li>
                <li>GK: điểm giữa kì</li>
                <li>CK: điểm cuối kì</li>
                <li>TB: điểm trung bình</li>
            </ul>
        </div>
    );
}
export default Table;
