console.log('Initiating CanvasBot');

var Twit = require('twit');
var exec = require('child_process').exec;
var config = require('./config');
var T = new Twit(config);
var pxlcmd = 'processing-java --sketch=`pwd`/Canvas --run';

var stream = T.stream('user');

stream.on('tweet', AddPixel);

function AddPixel(info){
    var PixelData = info.text.split(" ", 4);
    var pycmd = 'python canvas/cc.py ' + PixelData[1] + ' ' + PixelData[2] + ' ' + PixelData[3];
    console.log(pycmd);
    exec(pycmd, processing);
    function processing(){
        exec(pxlcmd);
    }
    //console.log(info.text);
    //console.log(info.user.screen_name);
}