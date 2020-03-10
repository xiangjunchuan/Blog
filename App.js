const disposeouter = require("./src/router/blog");
function dispose(req, res) {
    //获取请求方式
    const mothod = req.mothod;
    //拆分URL地址
    req.path = req.url.split("?")[0];
    //设置响应头
    res.setHeader("Content-type", "application/json");
    //接收响应数据
    const data = disposeouter(req,res);
    //将json对象转换为json字符串并发送响应结果
    res.end(JSON.stringify(data));
}

module.exports = dispose;