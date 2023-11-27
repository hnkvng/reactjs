const Student = require('../models/student');

// Điều khiển
class addControllers {
    //[PORT] => http://localhost:3000/student/add
    add(rep, res) {
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
            .catch((err) => {
                res.json({ error: err.message });
            });
    }
}

module.exports = new addControllers();
