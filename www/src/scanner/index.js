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

document.getElementById("scanPlace").addEventListener("click", scanPlace);

function scanPlace() {
    QRScanner.prepare(onDone);

    function onDone(err, status) {
        if (err) {
            alert("错误：" + err);
        }
        if (status.authorized) {
            QRScanner.scan(displayContents);

            function displayContents(err, text) {
                if (err) {
                    alert("错误：" + err)
                } else {
                    document.getElementById("scanInfo").value = text;
                }
            }
            QRScanner.show();
        } else if (status.denied) {
            alert("获取权限失败！")
        } else {
            alert("未知情况")
        }
    }
}