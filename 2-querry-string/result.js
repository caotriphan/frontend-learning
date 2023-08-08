//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object
// parse query string to object
function parseQuerryString(s) {
  // s = name=abc&gender=male
  // return {name: 'abc', gender: 'male'}
  if (!s) {
    return {};
  }

  if (s[0] === '?') {
    s = s.substring(1);
  }

  const pairs = s.split('&');// ['','','']
  const result = {};

  for (let pair of pairs) {
    const [name, value] = pair.split('=');
    result[name] = decodeURIComponent(value); // result.name =value;
  }

  return result;
}

function onLoad() {
  const qs = window.location.search;
  const obj = parseQuerryString(qs);

  document.getElementById('name').innerText = obj.name;
  document.getElementById('gender').innerText = obj.gender;
}

onLoad();
