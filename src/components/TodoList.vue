<template>
  <v-container>
    <todo />
  </v-container>
</template>

<script>
import Todo from './Todo.vue';

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>
