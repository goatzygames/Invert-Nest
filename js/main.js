document.addEventListener('DOMContentLoaded', () => {
  // Setup product card clicks
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      goToProduct(id);
    });
  });

  document.querySelectorAll('.product-card .view-product').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = e.target.closest('.product-card').dataset.id;
      goToProduct(id);
    });
  });

  // Dropdown hover handling
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);

      // Close all other dropdowns first
      document.querySelectorAll('.dropdown').forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const menu = otherDropdown.querySelector('.dropdown-menu');
          if (menu) {
            menu.style.display = 'none';
            menu.classList.remove('fadeInAnimation');
          }
        }
      });

      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'block';
        menu.classList.add('fadeInAnimation');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        timeout = setTimeout(() => {
          menu.style.display = 'none';
          menu.classList.remove('fadeInAnimation');
        }, 500);
      }
    });
  });
}); // <--- ✅ This was missing
