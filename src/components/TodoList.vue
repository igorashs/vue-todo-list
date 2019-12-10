<template>
  <v-container>
    <v-row>
      <v-col>
        <todo-form @add-todo="onAddTodo" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="todo in todos"
        :key="todo.id"
        cols="12"
        lg="4"
        md="6"
      >
        <todo
          :init-todo="todo"
          @remove-todo="onRemoveTodo"
          @save-todo="onSaveTodo"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Todo from './Todo.vue';
import todoForm from './TodoForm.vue';

import todosStorage from '../todoListStorage';

export default {
  components: {
    Todo,
    'todo-form': todoForm,
  },
  data() {
    return {
      todos: [],
    };
  },

  created() {
    this.todos = todosStorage.getTodoList();
  },

  methods: {
    onSaveTodo(todo) {
      const index = this.todos.findIndex(t => t.id === todo.id);
      this.todos.splice(index, 1, todo);
      todosStorage.setTodoList(this.todos);
    },
    onAddTodo(todo) {
      this.todos.unshift(todo);
      todosStorage.setTodoList(this.todos);
    },
    onRemoveTodo(id) {
      const index = this.todos.findIndex(t => t.id === id);
      this.todos.splice(index, 1);
      todosStorage.setTodoList(this.todos);
    },
  },
};
</script>
