const baseUrl = 'https://64d9d6d1e947d30a260a5be1.mockapi.io/'

async function fetchTodoList() {
  const resp = await fetch(baseUrl + 'v1/todos')
  const json = await resp.json();

  return json; // [{},{}]
}

async function addTodo(description) {
  const payload = {
    id: 0,
    description,
    completed: false,
    createdAt: new Date()
  }

  const resp = await fetch(baseUrl + 'v1/todos', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

async function deleteTodo(id) {
  const resp = await fetch(baseUrl + 'v1/todos/' + id, {
    method: 'DELETE'
  })
}
