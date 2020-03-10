function dispose_outer(req,res){
    //获取请求方式
    const method = req.method;
    if(method == "GET" && req.path == "/api/blog/list"){
        return {
            desc:"这是博客列表接口的响应结果"
        }
    }
    if(method == "GET" && req.path == "/api/blog/datail"){
        return {
            desc:"这是获取博客内容的接口响应结果"
        }
    }

}
module.exports = dispose_outer;