

document.getElementById("deviceInfo").addEventListener("click", deviceInfo);

function deviceInfo() {
    var info = "cordova版本：" + device.cordova
               + "\n设备名称：" + device.model
               + "\n设备平台：" + device.platform
               + "\n设备唯一标识符：" + device.uuid
               + "\n设备版本：" + device.version
               + "\n设备制造商：" + device.manufacturer
               + "\n是否为模拟器：" + device.isVirtual
               + "\n设备硬件序列号：" + device.serial
    document.getElementById("deviceInfo").value = info
}
