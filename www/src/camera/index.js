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

document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture);

function cameraTakePicture() {
    var quality = document.getElementById("qualityPlace").value
    if(!quality) {
        quality = 75
    }
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: quality,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true,
        encodingType: Camera.EncodingType.PNG,
        correctOrientation: true
    });
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function cameraGetPicture() {
    var quality = document.getElementById("qualityPlace").value
    if(!quality) {
        quality = 75
    }
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: quality,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onSuccess(imageURL) {
        var image = document.getElementById('myImage');
        image.src = imageURL;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

}
