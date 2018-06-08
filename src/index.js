const root = document.documentElement;
const range = document.querySelector('.chest-slider');
const inputs = document.querySelectorAll('.color-box > input');

const handleSlider = e => {
  let value = e.target.value;
  root.style.setProperty('--slider', value);
}

range.addEventListener('input', handleSlider);

const handleInputChange = e => {
  let value = e.target.value;
  let inputId = e.target.parentNode.id;
  let inputBg = `--bg-${inputId}`;
  root.style.setProperty(inputBg, value);
}

inputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
})