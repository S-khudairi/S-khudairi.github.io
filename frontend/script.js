// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const tabToggle = document.getElementById('tabToggle');
  const tabNavigation = document.getElementById('tabNavigation');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  // Toggle sidebar
  tabToggle.addEventListener('click', () => {
    tabNavigation.classList.toggle('reveal-tabs');
    sidebarOverlay.classList.toggle('active');
    
    // Hide the toggle button when sidebar is open
    if (tabNavigation.classList.contains('reveal-tabs')) {
      tabToggle.style.opacity = '0';
      tabToggle.style.transform = 'scale(0)';
    } else {
      tabToggle.style.opacity = '1';
      tabToggle.style.transform = 'scale(1)';
    }
  });

  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener('click', () => {
    tabNavigation.classList.remove('reveal-tabs');
    sidebarOverlay.classList.remove('active');
    
    // Show the toggle button when sidebar is closed
    tabToggle.style.opacity = '1';
    tabToggle.style.transform = 'scale(1)';
  });

  // Tab switching functionality
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');

      // Close sidebar after selecting a tab
      tabNavigation.classList.remove('reveal-tabs');
      sidebarOverlay.classList.remove('active');
      
      // Show the toggle button when sidebar is closed
      tabToggle.style.opacity = '1';
      tabToggle.style.transform = 'scale(1)';
    });
  });
});

// Original reveal button functionality (only works on home tab)
document.getElementById('reveal-button').addEventListener('click', () => {
  const hiddenContent = document.getElementById('hiddenContent');
  const revealButton = document.getElementById('reveal-button');
  const tabToggle = document.getElementById('tabToggle');
  
  //updates to reveal content
  hiddenContent.classList.add('reveal-content');

  //fade out initial content instead of hiding completely
  revealButton.style.opacity = '0';
  revealButton.style.transform = 'translateY(-20px)';

  //reveal the tab toggle button
  tabToggle.classList.add('reveal-toggle');
});