var http = require("http");

//1,通过http.createServer（）创建一个服务，得到一个server实例对象
//   对于服务端三件事
//		1，接受请求
//		2，处理请求
//		3，发送响应
var server = http.createServer()

//设置请求处理函数
//请求处理函数需要接受两个参数
//		Request是一个请求对象，可以拿到当前请求的一些信息，例如请求路径，请求方法，请求报文等
//		Response是一个响应对象，可以用来给请求发送响应
var handleRequest = function(request,response ){
//	console.log("收到请求了");
//	console.log("当前请求的请求路径是："+request.url)
//	response.write("hello");
//	response.write("   world");
	//在发送数据完毕后要主动结束响应
	//response.end("hello world!")


	//1,通过request拿到路径
	var url=request.url;
	//2,通过不同的请求路径，处理不同的响应
	if(url=="/"){
		//response.writeHead(响应状态码，响应对象)
		response.writeHead(200,{
			'Content-Type':'text/html'
			})
	response.end("<strong>index page</strong>")
	}else if (url=="/login"){
	response.end("<h1>login page</h1>")
	}else if( url=="/register"){
		response.end("<b>register page</b>")
	}else{
		response.end("<i>404 page</i>")
		}
}
//2，通过server实例对象添加request请求事件
//	这个事件是所有请求的入口
//	任何请求都会触发该事件对应的处理函数
server.on('request',handleRequest)

//3,绑定端口号，开启服务器
//   第一个参数是绑定的端口号
//   第二个参数是可选的
//   第三个参数是用来指定成功之后的回调函数
server.listen(8899,function(){
	console.log("server is running at 8899")
})