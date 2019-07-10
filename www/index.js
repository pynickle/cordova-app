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

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
document.getElementById("removeProjectFromLocalStorage").addEventListener("click", removeProjectFromLocalStorage);
document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);

var localStorage = window.localStorage;

function setLocalStorage() {
    localStorage.setItem("Name", "John");
    localStorage.setItem("Job", "Developer");
    localStorage.setItem("Project", "Cordova Project");
}

function showLocalStorage() {
    console.log(localStorage.getItem("Name"));
    console.log(localStorage.getItem("Job"));
    console.log(localStorage.getItem("Project"));
}

function removeProjectFromLocalStorage() {
    localStorage.removeItem("Project");
}

function getLocalStorageByKey() {
    console.log(localStorage.key(0));
}

document.addEventListener("volumeupbutton", callbackFunction, false);

function callbackFunction() {
    alert('Volume Up Button is pressed!')
}

document.getElementById("createFile").addEventListener("click", createFile);
document.getElementById("writeFile").addEventListener("click", writeFile);
document.getElementById("readFile").addEventListener("click", readFile);
document.getElementById("removeFile").addEventListener("click", removeFile);

function createFile() {
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile('log.txt', {
            create: true,
            exclusive: true
        }, function (fileEntry) {
            alert('File creation successfull!')
        }, errorCallback);
    }

    function errorCallback(error) {
        alert("ERROR: " + error.code)
    }

}

function writeFile() {
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile('log.txt', {
            create: true
        }, function (fileEntry) {

            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {
                    alert('Write completed.');
                };

                fileWriter.onerror = function (e) {
                    alert('Write failed: ' + e.toString());
                };

                var blob = new Blob(['Lorem Ipsum'], {
                    type: 'text/plain'
                });
                fileWriter.write(blob);
            }, errorCallback);

        }, errorCallback);

    }

    function errorCallback(error) {
        alert("ERROR: " + error.code)
    }

}

function readFile() {
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile('log.txt', {}, function (fileEntry) {

            fileEntry.file(function (file) {
                var reader = new FileReader();

                reader.onloadend = function (e) {
                    var txtArea = document.getElementById('textarea');
                    txtArea.value = this.result;
                };

                reader.readAsText(file);

            }, errorCallback);

        }, errorCallback);
    }

    function errorCallback(error) {
        alert("ERROR: " + error.code)
    }

}

function removeFile() {
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile('log.txt', {
            create: false
        }, function (fileEntry) {

            fileEntry.remove(function () {
                alert('File removed.');
            }, errorCallback);

        }, errorCallback);
    }

    function errorCallback(error) {
        alert("ERROR: " + error.code)
    }

}


document.getElementById("downloadFile").addEventListener("click", downloadFile);

function downloadFile() {

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
    var fileURL = "///storage/emulated/0/DCIM/myFile";

    fileTransfer.download(
        uri, fileURL,
        function (entry) {
            console.log("download complete: " + entry.toURL());
        },

        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        },

        false, {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );
}