import styles from './main.module.css';

const props = {
    success: {
        info: 'Success',
        des: 'Thêm sinh viên thành công',
        icon: <i className="fa-solid fa-circle-check"></i>,
        iconClose: <i className="fa-solid fa-xmark"></i>,
        theme: styles.toast_success,
    },
    error: {
        info: 'Error',
        des: 'Thêm sinh viên không thành công, liên hệ quản trị viên',
        icon: <i className="fa-solid fa-circle-xmark"></i>,
        iconClose: <i className="fa-solid fa-xmark"></i>,
        theme: styles.toast_error,
    },
    warning: {
        info: 'Warning',
        des: 'Thông tin sinh viên sai hoặc thiếu',
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        iconClose: <i className="fa-solid fa-xmark"></i>,
        theme: styles.toast_warning,
    },
};
export default props;
