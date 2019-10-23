const mockTodoList = [
  {
    id: 1,
    title: 'First Demo',
    dueDate: '2019-10-23',
    text: 'Hello There this is a demo',
    priority: 'low',
  },
  {
    id: 2,
    title: 'Second Demo',
    dueDate: '2019-10-23',
    text: 'The Second Demo',
    priority: 'medium',
  },
];

let uniqueId = 2;

export default {
  getTodoList() {
    const data = localStorage.getItem('todoList');
    const id = localStorage.getItem('uniqueId');

    if (id) {
      uniqueId = JSON.parse(id);
    }

    if (data) {
      return JSON.parse(data);
    }
    return mockTodoList;
  },
  setTodoList(todoList) {
    const data = JSON.stringify(todoList);
    const id = JSON.stringify(uniqueId);

    localStorage.setItem('todoList', data);
    localStorage.setItem('uniqueId', id);
  },
  getUniqueId() {
    uniqueId += 1;
    return uniqueId;
  },
};
