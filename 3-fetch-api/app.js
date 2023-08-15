function renderTodoList(arr) {
  let html = arr.map(({ id, description, completed }) => `
  <div class="todo-item" data-id="${id}">
      <div class="description">${description}</div>
      <button type="button" class="btn-done">Mark done</button>
      <button type="button" class="btn-delete" >Delete</button>
    </div>
  `).join('')

  // or you can use this way to get data
  // let html = '';
  // for (let todo of json) {
  //   const { id, description, completed } = todo;
  //   html += `
  //   <div class="todo-item">
  //     <div class="description">${description}</div>
  //     <button type="button" class="btn-done">Mark done</button>
  //     <button type="button" class="btn-delete">Delete</button>
  //   </div>
  //   `
  // }

  document.getElementById('result').innerHTML = html;
}

async function onLoad() {
  const arr = await fetchTodoList();
  renderTodoList(arr);
}

onLoad();

async function handleSave() {
  const value = document.getElementById('input-text').value;

  if (!value) {
    return;
  }

  await addTodo(value);
  await onLoad();
}

document.getElementById('input-text').addEventListener('change', async function (e) {
  await handleSave();
  e.target.value = '';
})

function getTodoId(item) {
  return item.getAttribute('data-id')
}

function isElement(ele, className, type) {
  return ele.tagName.toLowerCase() === type?.toLowerCase() && (className?.length > 0 && ele.classList.contains(className))
}

document.getElementById('result').addEventListener('click', function (e) {
  if (isElement(e.target, "btn-delete", 'button')) {
    const todoEle = e.target.closest('.todo-item');
    const id = getTodoId(todoEle);

    deleteTodo(id).then(() => {
      todoEle.remove();
    });
  }
})
