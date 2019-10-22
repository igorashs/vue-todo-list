<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="grey darken-2">Add new Todo</v-btn>
      </v-col>
    </v-row>
    <todo />
  </v-container>
</template>

<script>
import Todo from './Todo.vue';

import todosStorage from '../todoListStorage';

export default {
  components: {
    Todo,
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
