 const net = require('net')
 url = process.argv[2];
 let server = net.createServer(function(socket) {
     // socket handling logic
     var date = new Date();
     var year = date.getFullYear();
     var month = date.getMonth() + 1;
     var day = date.getDate();
     var hour = date.getHours();
     var min = date.getMinutes();
     socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + min);
     socket.end('\n');
 })
 server.listen(url);