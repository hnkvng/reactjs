const Student = require('../models/student');

// Điều khiển
class editControllers {
    //[PUT] => http://localhost:3000/student/:studentId/edit
    edit(rep, res, next) {
        const sum =
            parseInt(rep.body.QT) +
            parseInt(rep.body.GK) +
            parseInt(rep.body.CK);
        const TB = Math.round(sum / 3);
        const formdata = { ...rep.body, TB: TB };
        Student.updateOne({ _id: rep.body._id }, formdata)
            .then(() => res.send({ message: 'edit successfully' }))
            .catch(next);
    }
}

module.exports = new editControllers();
