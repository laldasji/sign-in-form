let creditCard = document.querySelector('#creditCard');
let phoneNo = document.querySelector('#phoneNo');
let creditCardCVV = document.querySelector('#creditCardCVV');

creditCard.addEventListener('input', (event) => {
    if (creditCard.validity.patternMismatch)
        creditCard.setCustomValidity('Are you trying to scam ME instead?');
    else
        creditCard.setCustomValidity('');
});

phoneNo.addEventListener('input', (event) => {
    if (phoneNo.validity.patternMismatch)
        phoneNo.setCustomValidity('Identity theft doesn\'t work with fake numbers.');
    else
        phoneNo.setCustomValidity('');
});

creditCardCVV.addEventListener('input', event => {
    if (creditCardCVV.validity.patternMismatch)
        creditCardCVV.setCustomValidity('Hey come on?!');
    else
        phoneNo.setCustomValidity('');
});