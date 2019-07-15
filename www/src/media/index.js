import { file } from "../../../plugins/cordova-plugin-file/www/fileSystemPaths"

document.getElementById("playMedia").addEventListener("click", playMedia);
document.getElementById("recordMedia").addEventListener("click", recordMedia)

function playMedia() {
    var url="https://www.runoob.com/try/demo_source/horse.mp3";
    var media = new Media(url,
        function () {
            alert("成功播放");
        },
        function (err) {
            alert("错误：" + err);
        }
    );
    media.play();
}

function recordMedia() {
    var filename = document.getElementById("fileName").value
    if(!filename) {
        filename = "record.mp3"
    }
    var media = new Media(filename,
        function () {
            alert("开始录制");
        },

        function (err) {
            alert("错误：" + err.code);
        });

    media.startRecord();
    setTimeout(function() {
        media.stopRecord();
        alert("录制完成")
    }, 10000);
    media.play()
}