const Student = require('../models/student');

// Điều khiển
class addControllers {
    //[PORT] => http://localhost:3000/student/add
    add(rep, res, next) {
        const sum =
            parseInt(rep.body.QT) +
            parseInt(rep.body.GK) +
            parseInt(rep.body.CK);
        const TB = Math.round(sum / 3);
        const formdata = { ...rep.body, TB: TB };
        const uploadStudent = new Student(formdata);
        uploadStudent
            .save()
            .then(() => {
                res.send({ message: 'add successfully' });
            })
            .catch(next);
    }
}

module.exports = new addControllers();
