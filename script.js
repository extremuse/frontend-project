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
                selectedProductPrize = 0; 
            } else {
                dropdown.classList.add('show-dropdown');
                radio.checked = true;
                

                if (radio.value === 'onePair') {
                    selectedProductPrize =  "DKK 195.00";
                } else if (radio.value === 'secondPair') {
                    selectedProductPrize = "DKK 345.00";
                }
                 else  {
                    selectedProductPrize =  "DKK 528.00";
                }
            }
            

            totalPrize.textContent = `Total Prize: ${selectedProductPrize}`;
        });
        
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
        
        radio.addEventListener('change', function() {
            if (!radio.checked) {
                dropdown.classList.remove('show-dropdown');
                selectedProductPrize = 0;
                totalPrize.textContent = `Total Prize: ${selectedProductPrize}`;
            }
        });
    });
};