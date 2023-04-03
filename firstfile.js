var khushi=require('http');
khushi.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello Khushii');
}
).listen(8081)