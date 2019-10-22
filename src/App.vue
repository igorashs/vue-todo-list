<template>
  <v-app>
    <nav-bar />
    <main>
      <v-content></v-content>
    </main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
