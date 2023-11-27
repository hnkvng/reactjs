import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function axiosData() {
            await axios
                .get('http://localhost:4000/api/student')
                .then((response) => {
                    if (response.data.student !== undefined) {
                        setData(response.data.student);
                    }
                })
                .catch((err) => {
                    console.log('ERROR', err);
                });
        }
        axiosData();
    }, []);
    return data.map((element, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.MSSV}</td>
            <td>{element.Name}</td>
            <td>{element.Date}</td>
            <td>{element.Faculty}</td>
            <td>{element.QT}</td>
            <td>{element.GK}</td>
            <td>{element.CK}</td>
            <td>{element.TB}</td>
            <td>{element.Class}</td>
        </tr>
    ));
}

export default Body;
