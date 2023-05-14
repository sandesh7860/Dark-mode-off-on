function enableDarkMode() {
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    
    if (body.classList.contains('dark-mode')) {
      // Turn off dark mode
      body.classList.remove('dark-mode');
      buttons.forEach((button) => {
        button.classList.remove('dark-mode');
      });
    } else {
      // Turn on dark mode
      body.classList.add('dark-mode');
      buttons.forEach((button) => {
        button.classList.add('dark-mode');
      });
    }
  }
  