const home = require('./home');
const student = require('./student');
const add = require('./add');

function route(app) {
    // app.use('/', home);
    app.use('/api/student', student);
    app.use('/api/add', add);
}

module.exports = route;
