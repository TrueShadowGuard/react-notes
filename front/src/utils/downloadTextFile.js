export default function downloadTextFile(name: string, value: string) {
    let val = value;
    if (value === undefined) {
        val = "";
    }
    let download = document.createElement("a");
    download.href = "data:application/json;filename=file," + val;
    download.download = name;
    download.style.display = "none";
    download.id = "download"; document.body.appendChild(download);
    document.getElementById("download")?.click();
    document.body.removeChild(download);
}

