function clearClassName(element_focus, input, setI) {
    if (Object.keys(input).length != 0 && input[element_focus][0] != '') {
        setI({ ...input, [element_focus]: '' });
    }
}
export { clearClassName };
