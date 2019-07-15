

document.getElementById("createFile").addEventListener("click", createFile);
document.getElementById("writeFile").addEventListener("click", writeFile);
document.getElementById("readFile").addEventListener("click", readFile);
document.getElementById("removeFile").addEventListener("click", removeFile);
document.getElementById("downloadFile").addEventListener("click", downloadFile);

function createFile() {
    var filename = document.getElementById("fileName").value
    if(!filename) {
        filename = "log.txt"
    }
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile(filename, {
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
    var filename = document.getElementById("fileName").value
    if(!filename) {
        filename = "log.txt"
    }
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile(filename, {
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
    var filename = document.getElementById("fileName").value
    if(!filename) {
        filename = "log.txt"
    }
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile(filename, {}, function (fileEntry) {

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
    var filename = document.getElementById("fileName").value
    if(!filename) {
        filename = "log.txt"
    }
    var type = window.TEMPORARY;
    var size = 5 * 1024 * 1024;

    window.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile(filename, {
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

function downloadFile() {

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
    var fileURL = "///storage/emulated/0/DCIM";

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