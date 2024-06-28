// Get elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Event listener for check button
checkBtn.addEventListener('click', () => {
  const value = userInput.value.trim();
  if (!value) {
    alert('Please provide a phone number');
    return;
  }
  resultsDiv.textContent = validatePhoneNumber(value);
  resultsDiv.classList.add('show');
});

// Event listener for clear button
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
  resultsDiv.classList.remove('show');
  userInput.value = '';
});

// Function to validate phone number
function validatePhoneNumber(number) {
  const validFormats = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\d{10}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}[-\s]?\d{4}$/
  ];

  const isValid = validFormats.some((format) => format.test(number));
  return isValid ? `Valid US number: ${number}` : `Invalid US number: ${number}`;
}
