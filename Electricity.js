const projectThree = document.querySelector('#project-three')
let calculateButton = projectThree.querySelector('#calculate-btn')


function calcKwh(){
    const container = projectThree.querySelector('.input-container')
    const powerInput = container.querySelector('#power')
    const durationInput = container.querySelector('#duration')
    const kwhPriceInput = container.querySelector('#price-kwh')
    let costPerDay = projectThree.querySelector("#costs-per-day")
    let costPerMonth = projectThree.querySelector("#costs-per-month")

    const updateCost = () => {
        const power = parseFloat(powerInput.value) || 0; 
        const duration = parseFloat(durationInput.value) || 0;
        const kwhPrice = parseFloat(kwhPriceInput.value) || 0;
        const total = (power / 1000) * duration * kwhPrice;
        costPerDay.textContent = total.toFixed(2); // Display to 2 decimal places
        let monthCost = total * 30
        costPerMonth.textContent = monthCost.toFixed(2)
    };

    // Add event listeners to update cost on input changes
    powerInput.addEventListener('input', updateCost);
    durationInput.addEventListener('input', updateCost);
    kwhPriceInput.addEventListener('input', updateCost);
}

calcKwh();