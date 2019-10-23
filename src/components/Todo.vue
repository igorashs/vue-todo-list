<template>
  <v-card>
    <v-card-title>{{ todo.title }}</v-card-title>
    <v-card-subtitle>{{ todo.dueDate }}</v-card-subtitle>
    <v-card-actions>
      <v-btn class="purple">
        <v-icon>mdi-book-open-variant</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="success">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="error">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      todo: this.initTodo,
    };
  },
  props: ['initTodo'],
};
</script>
