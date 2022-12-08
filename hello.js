document.querySelector("#OnButton").addEventListener("click", async function () {
    var status = await chrome.storage.sync.get(["isOn"]);
    // console.log(status.isOn)
    if (status.isOn == false) {
        document.querySelector("#OnButton").innerText = "끄기"
    } else {
        document.querySelector("#OnButton").innerText = "켜기"
    }
    await chrome.storage.sync.set({ "isOn": !status.isOn });
})

chrome.storage.sync.get(["isOn"]).then((result) => {
    // console.log(result.isOn);
    if (result.isOn == true) document.querySelector("#OnButton").innerText = "끄기";
    else document.querySelector("#OnButton").innerText = "켜기";
});

