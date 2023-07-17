import throttle from "lodash.throttle";

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

saveFormState(emailInput, 'email');
saveFormState(messageInput, 'message');

function saveFormState(input, key) {
    input.addEventListener('input', throttle(function (name) {
        let formState = localStorage.getItem('feedback-form-state');
        if (formState === null) {
            formState = {};
        } else {
            formState = JSON.parse(formState);
        }
        formState[key] = input.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    }, 500));
}

let savedFormState = localStorage.getItem('feedback-form-state');
if (savedFormState) {
    let formState = JSON.parse(savedFormState);
    restoreFormState(formState, 'input[name="email"]', 'email');
    restoreFormState(formState, 'textarea[name="message"]', 'message');
}

function restoreFormState(formState, selector, key) {
    if (formState[key]) {
        const imputEl = document.querySelector(selector);
        imputEl.value = formState[key];
    }
}

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (emailInput.value === '' || messageInput.value === '') {
        alert('Please provide information for all fields!');
    } else {
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';
    }
});
