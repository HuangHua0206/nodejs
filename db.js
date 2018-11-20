const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
 
// 增 
export function insertData(collectionName, json, callback) {
	MongoClient.connect(url, (err, db) => {
	    if (err) throw err;
	    const dbo = db.db("myapp");
	    dbo.collection(collectionName).insertOne(json, (err, res) => {
	        if (err) throw err;
	        console.log("文档插入成功");
	        db.close();
	    });
	});
}

// 删
export function deleteData(collectionName, json, callback) {

}
// 改
// 查
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//      var whereStr = {"name":'小心晴'};  // 查询条件
//     dbo.collection("test").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log('ppp', result);
//         db.close();
//     });
// });