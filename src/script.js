document.addEventListener('DOMContentLoaded', () => {
  const dragArea = document.querySelector('.drag_area');
  const fileInput = document.getElementById('file_input');

  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      console.log('Conteúdo do arquivo:', event.target.result);
    };
    reader.readAsText(file);
  }

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragArea.classList.add('dragging');
  });

  dragArea.addEventListener('dragleave', () => {
    dragArea.classList.remove('dragging');
  });

  dragArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dragArea.classList.remove('dragging');

    const file = event.dataTransfer.files[0];
    if (file) {
      fileInput.files = event.dataTransfer.files;
      handleFile(file);
    }
  });
});

document.getElementById('minimize').addEventListener('click', () => {
  if (window.pywebview) window.pywebview.api.minimize();
});
document.getElementById('close').addEventListener('click', () => {
  if (window.pywebview) window.pywebview.api.close();
});
