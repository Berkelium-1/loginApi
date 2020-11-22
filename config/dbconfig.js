const mysql = require('mysql');
module.exports = {
    // 数据库配置
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root', // mysql 用户名
        password: '123456', // mysql 密码
        database: 'api' // 数据库名
    },
    // 连接数据库, 使用mysql连接池连接方法
    // 连接池对象
    sqlConnect(sql, sqlArr, callBack) {
        let pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            if (err) {
                console.log('连接失败：', err);
                return;
            }
            // 事件驱动回调
            conn.query(sql, sqlArr, callBack);
            // 释放连接
            conn.release();
            // conn.release() 释放连接 不成功时使用以下方法
            // pool.releaseConnection(conn);
        });
    }
}