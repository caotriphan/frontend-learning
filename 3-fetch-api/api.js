const baseUrl = 'https://64d9d6d1e947d30a260a5be1.mockapi.io/'

async function fetchTodoList() {
  // const resp = await fetch(baseUrl + 'v1/todos') // get request
  // const json = await resp.json();
  const json = await axios.get(baseUrl + 'v1/todos')

  return json.data; // [{},{}]
}

async function addTodo(description) {
  // const payload = {
  //   id: 0,
  //   description,
  //   completed: false,
  //   createdAt: new Date()
  // }

  //pop request
  // const resp = await fetch(baseUrl + 'v1/todos', {
  //   method: 'POST',
  //   body: JSON.stringify(payload)
  // })

  const resp = await axios.post(baseUrl + 'v1/todos', {
    id: 0,
    description,
    completed: false,
    createdAt: new Date()
  })
}



// delete request
async function deleteTodo(id) {
  // const resp = await fetch(baseUrl + 'v1/todos/' + id, {
  //   method: 'DELETE'
  // })
  await axios.delete(baseUrl + 'v1/todos/' + id)
}
