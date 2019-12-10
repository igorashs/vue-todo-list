<template>
  <v-card>
    <v-card-title
      :style="todo.isCompleted ? 'text-decoration: line-through' : null"
    >
      {{ todo.title }}
    </v-card-title>
    <v-card-subtitle>
      <span
        :style="todo.isCompleted ? 'text-decoration: line-through' : null"
      >{{ todo.dueDate }}</span>
      <v-spacer />
      <v-icon
        v-for="n in priorityLevel"
        :key="n"
      >
        mdi-star-outline
      </v-icon>
    </v-card-subtitle>
    <v-card-actions>
      <todo-info :init-todo="todo" />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            :class="todo.isCompleted ? 'grey' : 'blue'"
            :small="isXsScreen"
            class="ml-2"
            v-on="on"
            @click="onToggleComplete"
          >
            <v-icon :small="isXsScreen">
              mdi-check
            </v-icon>
          </v-btn>
        </template>
        <span v-if="todo.isCompleted">Mark Incomplete</span>
        <span v-else>Mark Complete</span>
      </v-tooltip>
      <v-spacer />
      <todo-edit-form
        :init-todo="todo"
        @edit-todo="onEditTodo"
      />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="error"
            :small="isXsScreen"
            v-on="on"
            @click="removeTodoHandler"
          >
            <v-icon :small="isXsScreen">
              mdi-close-circle
            </v-icon>
          </v-btn>
        </template>
        <span>Remove Todo</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import TodoEditForm from './TodoEditForm.vue';
import TodoInfo from './TodoInfo.vue';

export default {
  components: {
    TodoEditForm,
    TodoInfo,
  },

  props: ['initTodo'],

  data() {
    return {
      todo: this.initTodo,
    };
  },

  computed: {
    priorityLevel() {
      const { priority } = this.todo;
      if (priority === 'high') return 3;
      if (priority === 'medium') return 2;
      return 1;
    },

    isXsScreen() {
      return this.$vuetify.breakpoint.xsOnly;
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
