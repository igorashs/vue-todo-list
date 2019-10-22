<template>
  <v-app>
    <nav-bar />
    <v-content class="ma-4">
      <todo-list />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'todo-list': TodoList,
  },
  data: () => ({
    //
  }),
};
</script>
