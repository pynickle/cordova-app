var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        window.addEventListener("batterystatus", batteryStatus, false);
        window.addEventListener("batterycritical", batteryCritical, false)
        window.addEventListener("batterylow", batteryLow, false)
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

function batteryStatus(status) {
    alert("当前电量：" + status.level + "，充电状态" + status.isPlugged);
}

function batteryCritical(status) {
    alert("阈值：" + status.level);
}

function batteryLow(status) {
    alert("电量低：" + status.level);
}