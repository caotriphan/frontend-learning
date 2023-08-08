function sayHello() {
  const input = document.getElementById('input')
  const result = document.getElementById('result1')

  const value = input.value;
  result.innerText = `HELLO, ${value}`
}

document.getElementById('btn-say-hello').addEventListener('click', sayHello)
