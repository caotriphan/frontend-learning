function handleDecode() {
  const jwtValue = document.getElementById('jwt-value').value;

  const jwt = jwt_decode(jwtValue);
  const name = jwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
  const exp = new Date(Number(jwt['exp']) * 1000)

  document.getElementById('name').innerText = name;
  document.getElementById('exp').innerText = exp;
}

document.getElementById('decode-btn').addEventListener("click", handleDecode);
