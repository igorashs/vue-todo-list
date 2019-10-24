<template>
  <v-dialog max-width="620" persistent v-model="todoForm">
    <template v-slot:activator="{ on: form }">
      <v-tooltip right>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn class="grey darken-2" v-on="{ ...form, ...tooltip }">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Create new Todo</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="headline">
        Create new Todo
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container class="title">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Title"
                  prepend-inner-icon="mdi-card-text"
                  :rules="titleRules"
                  v-model="todo.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      readonly
                      :value="todo.dueDate"
                      label="Pick a Date"
                      prepend-inner-icon="mdi-calendar"
                      v-on="on"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker
                    no-title
                    v-model="todo.dueDate"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Todo Description"
                  no-resize
                  prepend-inner-icon="mdi-text"
                  v-model="todo.text"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-overflow-btn
                  :items="priorities"
                  label="Priority"
                  prepend-inner-icon="mdi-menu-open"
                  v-model="todo.priority"
                ></v-overflow-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" @click="todoForm = false">Cancel</v-btn>
        <v-btn class="success" @click="addTodoHandler">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import todosStorage from '../todoListStorage';

export default {
  data() {
    return {
      priorities: ['low', 'medium', 'high'],
      todoForm: false,
      todo: {
        id: null,
        title: '',
        dueDate: new Date().toISOString().substr(0, 10),
        text: '',
        priority: 'low',
        isCompleted: false,
      },
      titleRules: [v => !!v || 'Title is required'],
    };
  },
  methods: {
    addTodoHandler() {
      if (this.$refs.form.validate()) {
        this.todoForm = false;
        const todo = { ...this.todo };
        todo.id = todosStorage.getUniqueId();

        this.$emit('add-todo', todo);
        this.$refs.form.reset();
        this.reset();
      }
    },
    reset() {
      const { todo } = this;
      todo.title = '';
      todo.dueDate = new Date().toISOString().substr(0, 10);
      todo.text = '';
      todo.priority = 'low';
    },
  },
};
</script>
