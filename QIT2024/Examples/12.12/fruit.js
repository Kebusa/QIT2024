
const fruitSelect = document.getElementById('fruitSelect')
const selectedFruit = document.getElementById('selectedFruit')

fruitSelect.addEventListener('change', () => {
    selectedFruit.textContent = fruitSelect.value;
    
})