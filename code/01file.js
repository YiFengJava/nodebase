//加载操作文件的莫模块包
//fs是node平台提供的一个核心模块，专门用来操作文件
var fs = require('fs');

//写入文件
//fs.writeFile(文件路径，要写入的数据，回调函数)
//如果文件不存在，则直接新建
//如果文件已存在，直接覆盖
//fs.writeFile('./date/a1.text','kdfjkadjgkdy喻冬',function(err){
	//回调函数中的err表示一个错误对象
	//档文件写入完成是，回调函数自动被调用
	//如果有错误。err就是一个错误对象
	//如果没有，err就是null
//	if(err){
//		return console.log("写入文件失败")
//	}
//		console.log("写入文件成功")
//})

fs.readFile('./date/a1.text',function(err,date){
	if(err){
	throw err;
	}
	console.log(date.toString())
})
