

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