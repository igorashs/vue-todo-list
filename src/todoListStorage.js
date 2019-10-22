const mockTodoList = [
  {
    id: 1,
    title: 'Demo',
    dueDate: 'date',
    description: 'Hello There this is a demo',
    priority: 1,
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
