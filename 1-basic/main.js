function sayHello() {
  const input = document.getElementById('input')
  const result = document.getElementById('result1')

  const value = input.value;
  result.innerText = `HELLO, ${value}`
}

// pure function
function toTitleCase(input) {
  if (!input) {
    return ''
  }

  const len = input.length;
  let result = input[0].toUpperCase();
  for (let i = 1; i < len; i++) {
    if (input[i - 1] == ' ') {
      result += input[i].toUpperCase();
    } else {
      result += input[i].toLowerCase()
    }
  }
  return result;
}

document.getElementById('btn-say-hello').addEventListener('click', sayHello)
document.getElementById('btn-title-case').addEventListener('click', function () {
  const input = document.getElementById('input')
  const result = document.getElementById('result1')

  result.innerText = toTitleCase(input.value)
})
