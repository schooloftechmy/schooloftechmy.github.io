// Image drop & preview script (client-side only)
(function () {
  const dropArea = document.getElementById('drop-area');
  const fileInput = document.getElementById('fileElem');
  const preview = document.getElementById('preview');
  const yearSpan = document.getElementById('year');

  // set current year
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
  });

  dropArea.addEventListener('drop', handleDrop, false);
  fileInput.addEventListener('change', handleFiles, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files } });
  }

  function handleFiles(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please drop an image file.');
      return;
    }
    previewFile(file);
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      preview.innerHTML = '';
      const img = document.createElement('img');
      img.src = reader.result;
      img.alt = file.name;
      preview.appendChild(img);
      const info = document.createElement('div');
      info.textContent = file.name;
      info.style.fontSize = '0.9rem';
      info.style.color = '#475569';
      preview.appendChild(info);
    };
  }
})();
