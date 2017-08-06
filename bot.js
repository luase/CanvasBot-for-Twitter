console.log('Initiating CanvasBot');

var Twit = require('twit');
var exec = require('child_process').exec;
var config = require('./config');
var fs = require('fs');
var T = new Twit(config);
var pxlcmd = 'processing-java --sketch=`pwd`/Canvas --run';

var stream = T.stream('user');

stream.on('tweet', AddPixel);

function AddPixel(info){

    var PixelData = info.text.split(" ");
    if (PixelData[0] == '@LienzoBot' && PixelData.length == 4){
        var pycmd = 'python canvas/cc.py ' + PixelData[1] + ' ' + PixelData[2] + ' ' + PixelData[3];
        exec(pycmd, processing);
        function processing(){
            exec(pxlcmd, imgcre);
            function imgcre (){
                console.log('Image Created!');

        var FileName = 'Canvas/image.png'
        var b64 = fs.readFileSync(FileName, { encoding: 'base64' });

        T.post('media/upload', {media_data: b64}, uploaded);

        function uploaded(err, data, response){
            var id = data.media_id_string;
            var tweet = {
                status: 'Pixel (' + PixelData[1] + ', ' + PixelData[2] + ') edited by @' + info.user.screen_name,
                media_ids: [id]
            }
            T.post('statuses/update', tweet, tweeted);
        }

        function tweeted(err, data, response){
            if (err){
                console.log("Something went wrong!");
            } else {
                console.log("It worked!");
            }
        }
            }
        }
    }
}