const dbConfig = require('../config/dbconfig');

// 随机验证码
function randomCode() {
    const code = Math.floor()

}

module.exports = {
    sendCode(req, res, next) {
        const { email } = req.body;
        const code = randomCode();

        let sql = 'show databases'; // sql语句
        let sqlArr = []; // 放进占位符的变量 
        let callBack = (err, data) => {
            if (err) {
                console.log('连接失败：', err);
            } else {
                res.send({ data });
            }
        }

        dbConfig.sqlConnect(sql, sqlArr, callBack);
    }
}