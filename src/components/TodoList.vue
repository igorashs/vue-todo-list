<template>
  <v-container>
    <v-row>
      <v-col>
        <todo-form />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="todo in todos"
        :key="todo.id"
      >
        <todo :initTodo="todo" />
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
};
</script>
