import axios from 'axios';

const handleInputChange = (event, formdata, set) => {
    const { name, value } = event.target;
    set({ ...formdata, [name]: value });
};
const handleSubmit = (event, set) => {
    axios
        .post('http://localhost:4000/api/add', formdata)
        .then((response) => {
            set({
                MSSV: '',
                Name: '',
                Date: '',
                Faculty: '',
                QT: '',
                GK: '',
                CK: '',
                Class: '',
            });
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    console.log('Form data submitted:', formdata);
};

export { handleInputChange, handleSubmit };
