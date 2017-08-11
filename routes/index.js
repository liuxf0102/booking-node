

module.exports = function(app){
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    var users = require('../api/users');
    app.use('/users',users);

    // dates
    var dates = require('../api/dates');
    app.use('/dates',dates);
    
    
    // 文章编辑及查看路由模块
    var qrcodes = require('../api/qrcodes');
    app.use('/qrcodes',qrcodes);
};
