const home = require('./home');
const student = require('./student');
const add = require('./add');
const edit = require('./edit');
function route(app) {
    // app.use('/', home);
    app.use('/api/student', student);
    app.use('/api/add', add);
    app.use('/api/edit', edit);
}

module.exports = route;
