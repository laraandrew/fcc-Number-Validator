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

// Compares input to valid phone number formats
function validatePhoneNumber(number) {
  const validFormats = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/, // 1 333-222-4444
    /^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/,//1(123)-323-2343
    /^1?\d{10}$/, //15555555555
    /^\d{10}$/, //5555555555
    /^\(\d{3}\)\d{3}[-\s]?\d{4}$/, //(222)333-4444
    /^[+/s]?1?\s?\(\d{3}\)\d{3}[-\s]?\d{4}$/ //+1 (818)744-3879
  ];

  const isValid = validFormats.some((format) => format.test(number));
  return isValid ? `Valid US number: ${number}` : `Invalid US number: ${number}`;
}
