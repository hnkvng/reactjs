import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const nav = useNavigate;
const addApi = 'http://localhost:4000/api/add';
const studentApi = 'http://localhost:4000/api/student';

export { addApi, studentApi };
