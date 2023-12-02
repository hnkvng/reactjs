const Student = require('../models/student');
const Classroom = require('../models/classroom');

// Điều khiển
class deleteControllers {
    //[DELETE] => http://localhost:3000/student/delete
    delete(rep, res, next) {
        const modelNameToCheck = rep.body.classroom;
        const modelIdToCheck = rep.body.studentId._id;
        Classroom.find({ Name: modelNameToCheck })
            .then((el) => {
                Student.deleteOne({ _id: modelIdToCheck }).then(() => {
                    const newStudent = el.filter(
                        (item) => item.Name === modelNameToCheck,
                    );
                    newStudent[0].Students.pop(modelIdToCheck);
                    return Classroom.updateOne(
                        { Name: modelNameToCheck },
                        newStudent[0],
                    );
                });
            })
            .then(() => {
                res.send('delete successfully');
            })
            .catch(next);
    }
    //[DELETE] => http://localhost:3000/student/deleteAll
    deleteAll(rep, res, next) {
        if (rep.body.classroom === 'Tổng hợp') {
            Student.deleteMany()
                .then(() => res.send({ message: 'delete successfully' }))
                .catch(next);
        } else {
            Student.deleteMany({ Class: rep.body.classroom })
                .then(() => res.send({ message: 'delete successfully' }))
                .catch(next);
        }
    }
    //[DELETE] => http://localhost:3000/student/deleteClass
    deleteClass(rep, res, next) {
        const modelNameToCheck = rep.body.classroom;
        if (modelNameToCheck === 'Tổng hợp') {
            Classroom.deleteMany()
                .then(() => {
                    Student.deleteMany()
                        .then(() =>
                            res.send({ message: 'delete successfully' }),
                        )
                        .catch(next);
                })
                .catch(next);
        } else {
            Classroom.deleteOne({ Name: modelNameToCheck })
                .then(() => {
                    Student.deleteMany({ Class: modelNameToCheck })
                        .then(() =>
                            res.send({ message: 'delete successfully' }),
                        )
                        .catch(next);
                })
                .catch(next);
        }
    }
}

module.exports = new deleteControllers();
