const mockTodoList = [
  {
    id: 1,
    title: 'First Demo',
    dueDate: '2019-10-23',
    text: 'Hello There this is a demo',
    priority: 1,
  },
  {
    id: 2,
    title: 'Second Demo',
    dueDate: '2019-10-23',
    text: 'The Second Demo',
    priority: 2,
  },
];

export default {
  getTodoList() {
    const data = localStorage.getItem('todoList');
    if (data) {
      return JSON.parse(data);
    }
    return mockTodoList;
  },
  setTodoList(todoList) {
    const data = JSON.stringify(todoList);
    localStorage.setItem('todoList', data);
  },
};
