// public/scripts/upload.js

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-upload');
    const uploadButton = document.getElementById('upload-btn');
  
    uploadButton.addEventListener('click', () => {
      const file = fileInput.files[0];
      if (file) {
        console.log('Uploading file:', file);
      } else {
        console.error('No file selected.');
      }
    });
  });
  