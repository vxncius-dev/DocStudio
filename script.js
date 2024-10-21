document.addEventListener('DOMContentLoaded', () => {
  const dragArea = document.querySelector('.drag_area');
  const fileInput = document.getElementById('file_input');

  // Função para ler o arquivo
  function handleFile(file) {
    const reader = new FileReader();

    // Callback quando a leitura do arquivo for concluída
    reader.onload = function (event) {
      console.log('Conteúdo do arquivo:', event.target.result);
    };

    // Ler o arquivo como texto
    reader.readAsText(file);
  }

  // Quando o arquivo for selecionado através do input
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  // Habilitando o comportamento de "drag and drop"
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
      fileInput.files = event.dataTransfer.files; // Atualiza o input de arquivo
      handleFile(file);
    }
  });
});

// Adicione os event listeners aos botões
document.getElementById('minimize').addEventListener('click', () => {
  if (window.pywebview) window.pywebview.api.minimize();
});
document.getElementById('close').addEventListener('click', () => {
  if (window.pywebview) window.pywebview.api.close();
});