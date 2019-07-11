var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("playMedia").addEventListener("click", playMedia);

function playMedia() {
    var url = "https://pynickle.github.io/card/a-little-story.mp3";
    var media = new Media(url,
        function () {
            console.log("playAudio():Audio Success");
        },
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    media.play();
}