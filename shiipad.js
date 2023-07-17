function saveFile() {
  var link = document.createElement.("a");
  var content = document.querySelector("textarea").value;
  var file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "untitled.txt";
  link.click();
  
}
