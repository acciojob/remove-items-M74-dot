//your JS code here. If required.
// Select the button and dropdown
const removeButton = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

const removeSelectedColor = () => {
    // Get the selected option index
    const selectedIndex = colorSelect.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
        // Remove the selected option from the dropdown
        colorSelect.remove(selectedIndex);
    }
};

// Add event listener to the button
removeButton.addEventListener('click', removeSelectedColor);
