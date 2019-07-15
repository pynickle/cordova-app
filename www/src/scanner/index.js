

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