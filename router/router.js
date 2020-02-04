module.exports = (app) => {
    let controller = require('../controller/controller');

    app.route('/').get(controller.index);
    app.route('/users').get(controller.users);
    app.route('/users/:userId').get(controller.findUser);

    app.route('/users').post(controller.createUser);
    
    app.route('/users').put(controller.updateUser);

    app.route('/users').delete(controller.deleteUser);
};