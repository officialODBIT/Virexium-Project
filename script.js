document.getElementById('startBtn').addEventListener('click', () => {
  alert('');
});

const windows = document.querySelectorAll('.window');
windows.forEach(window => {
  const header = window.querySelector('.window-header');
  const closeButton = window.querySelector('.close-btn');
  
  // Drag window functionality
  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - window.offsetLeft;
    offsetY = e.clientY - window.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      window.style.left = `${e.clientX - offsetX}px`;
      window.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Close window functionality
  closeButton.addEventListener('click', () => {
    window.style.display = 'none';
  });
});
