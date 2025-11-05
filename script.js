// Custom Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('categoryDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const selectedCategory = document.getElementById('selectedCategory');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Toggle dropdown on click
    dropdown.addEventListener('click', function(e) {
        // e.preventDefault();
        // e.stopPropagation();
        
        // Toggle the dropdown
        dropdown.classList.toggle('open');
        dropdownMenu.classList.toggle('show');
    });

    // Handle dropdown item selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Remove active class from all items
            dropdownItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update selected text
            const value = this.getAttribute('data-value');
            const text = this.textContent;
            
            // Show full category name without truncation
            if (value === 'all') {
                selectedCategory.textContent = 'All';
            } else {
                selectedCategory.textContent = text;
            }
            
            // Close dropdown
            dropdown.classList.remove('open');
            dropdownMenu.classList.remove('show');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            dropdownMenu.classList.remove('show');
        }
    });

    // Prevent form submission when clicking dropdown
    dropdown.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});