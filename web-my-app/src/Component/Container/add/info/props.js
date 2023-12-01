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
        des: 'Thêm sinh viên không thành công',
        icon: <i className="fa-solid fa-circle-xmark"></i>,
        iconClose: <i className="fa-solid fa-xmark"></i>,
        theme: styles.toast_error,
    },
    info: {
        info: 'info',
        des: 'Dọn dẹp thành công',
        icon: <i class="fa-solid fa-circle-info"></i>,
        iconClose: <i className="fa-solid fa-xmark"></i>,
        theme: styles.toast_info,
    },
};
export default props;
