const http = require('http');  //istekte bulunduk



const server = http.createServer((req, res) => {  //istekten req ve res dönüyor
    
    const url = req.url;
    console.log(url);
    
    console.log('Bir istek gönderildi'); 
    //res.write('merhabalar') //cevabi bu sekilde tainmladik

    if(url==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>merhabalar</h1>')
    } else if(url==='/about'){
        res.write('about sayfasidir')
    } else if(url==='/contact'){
        res.write('contact sayfasidir')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('404 sayfa bulunamadi ')
    }

    res.end() //res'i bitirdik yoksa istek göndermeye devam ediyor
});

const port = 3000;

server.listen(port, () => {
    console.log(`Sunucu port ${port}'de baslatildi`);
})