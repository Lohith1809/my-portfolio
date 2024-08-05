document.getElementById('themeToggleButton').addEventListener('click', function() {
    var body = document.body;
    var img = document.getElementById('themeToggleImage');
  
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      img.src = './images/dark.png';  
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      img.src = './images/light.png'; 
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    body.classList.add('light-mode');
  });
  