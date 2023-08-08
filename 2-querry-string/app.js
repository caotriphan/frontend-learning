function handleSubmit() {
  const name = document.getElementById('name').value;
  const gender = document.getElementById('male').checked ? "male" : 'female'

  // navigate to result page
  window.location.href = `result.html?name=${name}&gender=${gender}`
}

document.getElementById('submit')?.addEventListener('click', handleSubmit)
