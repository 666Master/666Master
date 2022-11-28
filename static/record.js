const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'rm-bp1s7so5i1r6a6qq2zo.mysql.rds.aliyuncs.com',
    user: 'love',
    password: 'Love1411',
    database: 'love'
});
connection.connect();
connection.query('SELECT * from record', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});