function saveFile() {
         var content = document.querySelector("textarea").value;
         var blob = new Blob([content], {
            type: "text/plain;charset=utf-8",
         });
         saveAs(blob, "download.txt");
}
