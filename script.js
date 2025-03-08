// Open Start Menu when clicking the start button
document.getElementById('startBtn').addEventListener('click', () => {
  const startMenu = document.getElementById('startMenu');
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
});

// Close Start Menu when clicking outside of it
window.addEventListener('click', (e) => {
  const startMenu = document.getElementById('startMenu');
  if (!e.target.closest('#startMenu') && !e.target.closest('#startBtn')) {
    startMenu.style.display = 'none';
  }
});

// Open Task Manager when clicking the Task Manager button in Start Menu
document.getElementById('openTaskManager').addEventListener('click', () => {
  openTaskManager();
  document.getElementById('startMenu').style.display = 'none'; // Close Start Menu
});

// Open Task Manager window
function openTaskManager() {
  document.getElementById('taskManager').style.display = 'block';
  displayServices();
  displayCookies();
}

// Close window function
function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

// Display fake active services
function displayServices() {
  const services = [
    'Service 1 - Running',
    'Service 2 - Stopped',
    'Service 3 - Running'
  ];

  const servicesList = document.getElementById('servicesList');
  servicesList.innerHTML = ''; // Clear existing list

  services.forEach(service => {
    const listItem = document.createElement('li');
    listItem.textContent = service;
    servicesList.appendChild(listItem);
  });
}

// Display cookies from browser
function displayCookies() {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const cookiesList = document.getElementById('cookiesList');
  cookiesList.innerHTML = ''; // Clear existing list

  if (cookies.length === 0 || cookies[0] === '') {
    cookiesList.innerHTML = '<li>No cookies found</li>';
  } else {
    cookies.forEach(cookie => {
      const listItem = document.createElement('li');
      listItem.textContent = cookie;
      cookiesList.appendChild(listItem);
    });
  }
}

// Changeable start button icon (from imgur)
document.getElementById('startBtn').innerHTML = `
  <img src="your-imgur-link-here" alt="Start Icon" id="startIcon">
`;
