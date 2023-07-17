function saveFile() {
         var content = document.querySelector("textarea").value;
         var fileName = document.querySelector("input").value;
         if (fileName === "") {
                  var fileName = "Untitled.txt";
         }

         var blob = new Blob([content], {
            type: "text/plain;charset=utf-8",
         });
         saveAs(blob, fileName);
}
