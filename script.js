const placeholder = document.getElementById('placeholder');
const input = document.getElementById('input');

const hideElement = () => {
  input.classList.remove("hidden")
  placeholder.classList.add("hidden")
  input.focus()
  input.value = placeholder.innerHTML
}

placeholder.addEventListener('click', () => hideElement());

const changeText = () => {
  input.classList.add("hidden")
  placeholder.classList.remove("hidden")
  placeholder.innerHTML = input.value
}

input.addEventListener('focusout', () => changeText());
input.addEventListener("keyup", (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    changeText();
  }
});
