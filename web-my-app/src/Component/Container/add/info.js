import React, { useEffect, useRef } from 'react';
import OutputInfo from './info/out';
import styles from './info/main.module.css';

function Info({ elements, info, setElements }) {
    const parent = useRef();
    const handleClose = (event) => {
        const close = event.target.closest(`.${styles.toast_close}`);
        const card = event.target.closest(`.${styles.toast}`);
        if (close && card) {
            for (let index in elements) {
                if (parent.current.childNodes[index] === card) {
                    clearTimeout(elements[index].timeId);
                    console.log(elements);
                    setElements((prevElements) =>
                        prevElements.map((el) =>
                            el.id === parseInt(index) + 1
                                ? {
                                      ...el,
                                      isVisible: false,
                                      timeId: null,
                                  }
                                : el,
                        ),
                    );
                }
            }
        }
    };
    useEffect(() => {
        for (let e in elements) {
            if (!elements[e].isVisible) {
                elements.pop(elements[e]);
            }
        }
    });
    return (
        <div id={styles.toast} onClick={handleClose} ref={parent}>
            {elements.map(
                (el) =>
                    el.isVisible && (
                        <OutputInfo key={el.id} {...info}></OutputInfo>
                    ),
            )}
        </div>
    );
}
export default Info;
