const inputs = document.querySelectorAll('.controls input');

function updateInputs() {
  console.log(this);
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', updateInputs));

inputs.forEach(input => input.addEventListener('mousemove', updateInputs));
