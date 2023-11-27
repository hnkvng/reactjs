const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 4000;
const route = require('./resource/routes/index.js');
// Xóa toàn bộ dữ liệu từ collection

//Connect Mongodb
const db = require('./resource/config/db');
db.connect();
// db.test()
//HTTP logger

app.use(morgan('dev'));

// Sử dụng bodyParser để đọc dữ liệu từ form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//cho phép client kết nối với server

app.use(cors());
//Router
route(app);

// //Sử dụng các route
// const route = require('./resource/routes');
// route.route(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
