

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
    alert(localStorage.getItem("Name"));
    alert(localStorage.getItem("Job"));
    alert(localStorage.getItem("Project"));
}

function removeProjectFromLocalStorage() {
    localStorage.removeItem("Project");
}

function getLocalStorageByKey() {
    alert(localStorage.key(0));
}