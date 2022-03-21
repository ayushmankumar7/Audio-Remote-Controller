var express = require('express')
app = express()

var port = process.env.PORT || 8000;
var io = require('socket.io').listen(app.listen(port))

app.use(express.static(__dirname + '/public'));

// Yes I am a big MSD Fan <3 
var secretKey = 'msd7'

var controller = io.on('connection', function (socket) {
    
    socket.io('load', function(data){
        socket.emit('access', {
            access: (data.key === secretKey ? "granted" : "denied")
        })
    })

    socket.on('audio-change', function(data) {
        if(data.key === secret) {
            controller.emit('play', {
                hash: data.hash
            })
        }
    })

})

console.log("Your server is running on http://localhost:"+port);
