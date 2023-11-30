import React from 'react';
import OutputInfo from './info/out';

function Info({ data }) {
    setElements([
        ...elements,
        {
            id: elements.length + 1,
            isVisible: true,
            timeId: setTime(),
        },
    ]);
    setInfo(<Info data={props.success}></Info>);
    setElements([
        ...elements,
        {
            id: elements.length + 1,
            isVisible: true,
        },
    ]);
    setInfo(<Info data={props.error}></Info>);
    setTime();
    setElements([
        ...elements,
        {
            id: elements.length + 1,
            isVisible: true,
            timeId: setTime(),
        },
    ]);
    setInfo(<Info data={props.warning}></Info>);
    const setTime = () => {
        const id = setTimeout(() => {
            setElements((prevElements) =>
                prevElements.map((el) =>
                    el.id === elements.length + 1
                        ? { ...el, isVisible: false, timeId: null }
                        : el,
                ),
            );
        }, 4000);
        return id;
    };
    const handleClose = (event) => {
        const close = event.target.closest(`.${styleF.toast_close}`);
        const card = event.target.closest(`.${styleF.toast}`);
        if (close && card) {
            for (let index in elements) {
                if (parent.current.childNodes[index] === card) {
                    clearTimeout(elements[index].timeId);
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
    <div id={styleF.toast} onClick={handleClose} ref={parent}>
        {elements.map((el) => el.isVisible && info)}
    </div>;
    return <OutputInfo {...data}></OutputInfo>;
}
export default Info;
