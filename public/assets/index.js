console.log('opening socket.io connection');

        var ownClick = true;
        var s = io();
        s.on('connect_error', function (m) { console.log("error"); });
        s.on('connect', function (m) { console.log("socket.io connection open"); });

        s.on('color', function (d){
            var i = document.body.style;
            console.log("COLOR CLICKED " + d.id);
            var audio = new Audio(`./assets/sound/${d.id}.wav`);
            audio.pause();
            audio.currentTime = 0.0;
            
            let color = 'white';
            if (d.id === 'A'){
                color = 'red';
            }
            else if (d.id === 'B'){
                color = 'blue';

            }
            audio.play();

            document.body.style.backgroundColor = color;
        });
        

        $('.colorC').click(function (e) {
            s.emit('color', { id: e.target.id })   
        })