window.onload = function() {
    // This event listener waits for the page to fully load before executing its code.
    // This ensures that all elements are present and ready to be manipulated.

    const cards = document.querySelectorAll('.card');
    // This selects all elements with the class "card" and stores them in the "cards" variable.

    cards.forEach(card => {
        // This loops through each card element that was selected earlier.

        const dropdown = card.querySelector('.dropdown');
        // This selects the element with class "dropdown" inside the current card and stores it in "dropdown".

        const radio = card.querySelector('input[type="radio"]');
        // This selects the radio button input inside the current card and stores it in "radio".

        card.addEventListener('click', function(event) {
            // This adds a click event listener to the current card element.

            if (dropdown.classList.contains('show-dropdown')) {
                // This checks if the dropdown already has the class "show-dropdown".

                dropdown.classList.remove('show-dropdown');
                // If the dropdown has the class, it is removed to hide the dropdown.

                radio.checked = false;
                // The associated radio button is unchecked.

            } else {
                dropdown.classList.add('show-dropdown');
                // If the dropdown doesn't have the class, it is added to show the dropdown.
                
                radio.checked = true;
                // The associated radio button is checked.
            }
        });

        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            // This prevents the click event on the dropdown from reaching the parent card.
            // This prevents the dropdown from closing when clicked inside.
        });

        radio.addEventListener('change', function() {
            if (!radio.checked) {
                // This checks if the radio button is not checked.

                dropdown.classList.remove('show-dropdown');
                // If the radio button is unchecked, the dropdown is hidden.
            }
        });
    });
};
