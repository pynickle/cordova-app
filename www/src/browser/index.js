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

document.getElementById("openBrowser").addEventListener("click", openBrowser);

function openBrowser() {
    var url = document.getElementById("webPlace").value;
    if (!url) {
        url = "https://www.baidu.com";
    }
    var ref = window.open(url, "_blank");
    ref.addEventListener("exit", browserExit);
    ref.addEventListener("loaderror", browserError);

    function browserExit() {
        ref.close();
    }

    function browserError() {
        alert("加载错误");
        ref.close();
    }
}