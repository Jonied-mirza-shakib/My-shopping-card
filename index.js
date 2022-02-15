function updatePhoneNumber(increasing) {
    const phoneInput = document.getElementById('phone-input');
    let phoneNumber = phoneInput.value;
    if (increasing == true) {
        phoneNumber = parseInt(phoneNumber) + 1;
    } else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneNumber * 1219;
    updateFinalPrice()
}


function updateCaseNumber(decreasing) {
    const caseInput = document.getElementById('case-input');
    let caseNumber = caseInput.value;
    if (decreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
    updateFinalPrice()
}

function updateFinalPrice() {
    const phoneInput = document.getElementById('phone-input');
    let phoneNumber = phoneInput.value;
    const totalPhonePrice = phoneNumber * 1219;
    const caseInput = document.getElementById('case-input');
    let caseNumber = caseInput.value;
    const totalCasePrice = caseNumber * 59;
    let subTotal = totalPhonePrice + totalCasePrice;
    let tax = subTotal / 10;
    let totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumber(true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumber(false)
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})