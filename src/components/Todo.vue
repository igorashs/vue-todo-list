<template>
  <v-card>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-subtitle>{{ todo.dueDate }}</v-card-subtitle>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="purple" v-on="on">
            <v-icon>mdi-book-open-variant</v-icon>
          </v-btn>
        </template>
        <span>Show All</span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <todo-edit-form :initTodo="todo" @edit-todo="onEditTodo" />
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="error" v-on="on" @click="removeTodoHandler">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </template>
        <span>Remove Todo</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import TodoEditForm from './TodoEditForm.vue';

export default {
  components: {
    'todo-edit-form': TodoEditForm,
  },
  data() {
    return {
      todo: this.initTodo,
    };
  },
  props: ['initTodo'],
  methods: {
    removeTodoHandler() {
      this.$emit('remove-todo', this.todo.id);
    },
    onEditTodo(todo) {
      this.todo = todo;
      this.$emit('save-todo', this.todo);
    },
  },
};
</script>
