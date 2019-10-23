<template>
  <v-container>
    <v-row>
      <v-col>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn class="grey darken-2" v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Create new Todo</span>
        </v-tooltip>
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
