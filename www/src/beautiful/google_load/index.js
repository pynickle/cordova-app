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

$(".animation-1").click(function () {
    $(".animation-1").toggle();
})

$(".animation-2").click(function () {
    $(".animation-2").toggle();
})
$(".animation-3").click(function () {
    $(".animation-3").toggle();
})
$(".animation-4").click(function () {
    $(".animation-4").toggle();
})
$(".animation-5").click(function () {
    $(".animation-5").toggle();
})
$(".animation-6").click(function () {
    $(".animation-6").toggle();
})