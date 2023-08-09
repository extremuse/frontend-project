window.onload = function() {

    const cards = document.querySelectorAll('.card');
    const totalPrize = document.getElementById('total-prize')
    let selectedProductPrize = 0;
    cards.forEach(card => {
        const dropdown = card.querySelector('.dropdown');
        const radio = card.querySelector('input[type="radio"]');
        
        card.addEventListener('click', function(event) {
            if (dropdown.classList.contains('show-dropdown')) {
                dropdown.classList.remove('show-dropdown');
                radio.checked = false;
                selectedProductPrize = 0; // Reset the selected product's prize
            } else {
                dropdown.classList.add('show-dropdown');
                radio.checked = true;
                
                // Update the selected product's prize based on the clicked product
                if (radio.value === 'onePair') {
                    selectedProductPrize =  195.00;
                } else if (radio.value === 'secondPair') {
                    selectedProductPrize =345.00;
                }
                 else if (radio.value === 'ThirdPair') {
                    selectedProductPrize =  528.00;
                }
            }
            
            // Update the total prize display
            totalPrize.textContent = `Total Prize: ${selectedProductPrize.toFixed(2)}`;
        });
        
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
        
        radio.addEventListener('change', function() {
            if (!radio.checked) {
                dropdown.classList.remove('show-dropdown');
                selectedProductPrize = 0; // Reset the selected product's prize
                totalPrize.textContent = `Total Prize: ${selectedProductPrize.toFixed(3)}`;
            }
        });
    });
};