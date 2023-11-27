import React from 'react';
import clsx from 'clsx';
import styles from './main.module.css';
import Body from './upload-data';

function Table() {
    const table = clsx('table table-striped', [styles.custom_table]);
    return (
        <div className={styles.container}>
            <div className={styles.table_responsive}>
                <table className={table}>
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">MSSV</th>
                            <th scope="col">Tên sinh viên</th>
                            <th scope="col">Ngày sinh</th>
                            <th scope="col">Khoa</th>
                            <th scope="col">QT</th>
                            <th scope="col">GK</th>
                            <th scope="col">CK</th>
                            <th scope="col">TB</th>
                            <th scope="col">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Body></Body>
                    </tbody>
                </table>
            </div>
            <ul>
                <span>*Chú thích:</span>
                <li>QT: điểm quá trình</li>
                <li>GK: điểm giữa kì</li>
                <li>CK: điểm cuối kì</li>
                <li>TB: điểm trung bình</li>
            </ul>
        </div>
    );
}
export default Table;
