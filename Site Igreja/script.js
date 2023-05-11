const menuItems = document.querySelectorAll('#menu li');
const content = document.querySelector('#content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the text content of the clicked menu item
    const menuItemText = item.textContent;

    // Update the content area with the selected menu item
    content.textContent = `You clicked ${menuItemText}`;
  });
});
