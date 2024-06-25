let creditCard = document.querySelector('#creditCard');
let phoneNo = document.querySelector('#phoneNo');
let creditCardCVV = document.querySelector('#creditCardCVV');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');

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

firstName.addEventListener('input', event => {
    if (firstName.validity.patternMismatch)
        firstName.setCustomValidity('Bro, don\'t. Just don\'t');
    else
        firstName.setCustomValidity('');
});

lastName.addEventListener('input', event => {
    if (firstName.validity.patternMismatch)
        lastName.setCustomValidity('=_= are you have studip?');
    else
        lastName.setCustomValidity('');
});

creditCardCVV.addEventListener('input', event => {
    if (creditCardCVV.validity.patternMismatch)
        creditCardCVV.setCustomValidity('Hey come on?!');
    else
        creditCardCVV.setCustomValidity('');
});