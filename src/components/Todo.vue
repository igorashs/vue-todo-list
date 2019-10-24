<template>
  <v-card>
    <v-card-title
      :style="todo.isCompleted ? 'text-decoration: line-through' : null"
      >{{ todo.title }}</v-card-title
    >
    <v-card-subtitle
      ><span
        :style="todo.isCompleted ? 'text-decoration: line-through' : null"
        >{{ todo.dueDate }}</span
      >
      <v-spacer> </v-spacer>
      <v-icon v-for="n in priorityLevel" :key="n">
        mdi-star-outline
      </v-icon>
    </v-card-subtitle>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="purple" v-on="on">
            <v-icon>mdi-book-open-variant</v-icon>
          </v-btn>
        </template>
        <span>Show All</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            :class="todo.isCompleted ? 'grey' : 'blue'"
            v-on="on"
            class="ml-2"
            @click="onToggleComplete"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </template>
        <span v-if="todo.isCompleted">Mark Incomplete</span>
        <span v-else>Mark Complete</span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <todo-edit-form :initTodo="todo" @edit-todo="onEditTodo" />
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
  computed: {
    priorityLevel() {
      const { priority } = this.todo;
      if (priority === 'high') return 3;
      if (priority === 'medium') return 2;
      return 1;
    },
  },
  methods: {
    removeTodoHandler() {
      this.$emit('remove-todo', this.todo.id);
    },
    onEditTodo(todo) {
      this.todo = todo;
      this.$emit('save-todo', this.todo);
    },
    onToggleComplete() {
      this.todo.isCompleted = !this.todo.isCompleted;
      this.$emit('save-todo', this.todo);
    },
  },
};
</script>
