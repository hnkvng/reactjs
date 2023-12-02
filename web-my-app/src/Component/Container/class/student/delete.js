import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Delete({ des, title, show, handleClose, handleDelete }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{des}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    Xóa
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Delete;
