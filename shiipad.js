function saveFile() {
  const link = document.createElement.("a");
  const content = document.querySelector("textarea").value;
  const file = new Blob(content, { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "untitled.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};
