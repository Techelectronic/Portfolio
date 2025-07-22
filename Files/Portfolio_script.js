// 1. Theme toggle setup
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// 2. File download function
function handleDownload(filePath) {
  const fileName = filePath.split('/').pop();
  const link = document.createElement('a');
  link.href = filePath;
  link.setAttribute('download', '');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 3. Attach download listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const pdfLink = document.getElementById('download-pdf');
  const docxLink = document.getElementById('download-docx');

  if (pdfLink) {
    pdfLink.addEventListener('click', function (e) {
      e.preventDefault();
      handleDownload('files/_CV.pdf');
    });
  }

  if (docxLink) {
    docxLink.addEventListener('click', function (e) {
      e.preventDefault();
      handleDownload('files/_CV.docx');
    });
  }
});
/*
 Theme toggle (working fine)
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// CV download function
function handleDownload(filePath) {
  const fileName = filePath.split('/').pop();
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach download listeners
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('download-pdf').addEventListener('click', function (e) {
    e.preventDefault();
    handleDownload('files/_CV.pdf'); // Replace with correct relative path
  });

  document.getElementById('download-docx').addEventListener('click', function (e) {
    e.preventDefault();
    handleDownload('files/_CV.docx'); // Replace with correct relative path
  });
});
*/
