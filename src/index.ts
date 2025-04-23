import Haikunator from 'haikunator';

const haikunator = new Haikunator();

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate') as HTMLButtonElement;
  const resultElement = document.getElementById('result') as HTMLDivElement;
  const tokenLengthInput = document.getElementById('tokenLength') as HTMLInputElement;
  const delimiterInput = document.getElementById('delimiter') as HTMLInputElement;

  generateButton.addEventListener('click', () => {
    const tokenLength = parseInt(tokenLengthInput.value) || 4;
    const delimiter = delimiterInput.value || '-';

    const name = haikunator.haikunate({
      tokenLength,
      delimiter
    });

    resultElement.textContent = name;
  });
}); 