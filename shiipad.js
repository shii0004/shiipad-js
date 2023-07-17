saveFile() {
  var link = document.createElement.("a");
  var content = document.getElementById(content).value;
  var file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "untitled.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}
