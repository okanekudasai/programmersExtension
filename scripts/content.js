// alert("'ctrl + space'로 실행버튼을 누를 수 있어요");
window.addEventListener("keydown", async function(e) {
    if (e.ctrlKey) {
        // console.log("누름")
        // console.log(e.code == "Space");
        if (e.code == "Space") {
            var status = await chrome.storage.sync.get(["isOn"]);
            // console.log("status:", status);
            if (status.isOn) {
            var 실행버튼 = document.querySelector("#run-code");
            실행버튼.click();
            }
        }
    }
})