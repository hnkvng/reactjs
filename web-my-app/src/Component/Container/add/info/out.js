import React from 'react';
import styles from './main.module.css';
import clsx from 'clsx';
function OutputInfo({ info, des, icon, iconClose, theme }) {
    const containerClass = clsx(styles.toast, theme);
    return (
        <div className={containerClass}>
            <div className={styles.toast_icon}>{icon}</div>
            <div className={styles.toast_body}>
                <h5 className={styles.toast_title}>{info}</h5>
                <p className={styles.toast_msg}>{des}</p>
            </div>
            <div className={styles.toast_close}>{iconClose}</div>
        </div>
    );
}

export default OutputInfo;
