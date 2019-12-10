<template>
  <v-dialog
    v-model="todoEditForm"
    max-width="620"
    persistent
  >
    <template v-slot:activator="{ on: form }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            class="success mr-2"
            :small="isXsScreen"
            v-on="{ ...form, ...tooltip }"
          >
            <v-icon :small="isXsScreen">
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Edit Todo</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="headline">
        Edit Todo
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container class="title">
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="todo.title"
                  label="Title"
                  prepend-inner-icon="mdi-card-text"
                  :rules="titleRules"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      readonly
                      :value="todo.dueDate"
                      label="Pick a Date"
                      prepend-inner-icon="mdi-calendar"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="todo.dueDate"
                    no-title
                  />
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="todo.text"
                  label="Todo Description"
                  no-resize
                  prepend-inner-icon="mdi-text"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-overflow-btn
                  v-model="todo.priority"
                  :items="priorities"
                  label="Priority"
                  prepend-inner-icon="mdi-menu-open"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          class="error"
          @click="todoEditForm = false"
        >
          Cancel
        </v-btn>
        <v-btn
          class="success"
          @click="editTodoHandler"
        >
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['initTodo'],

  data() {
    return {
      priorities: ['low', 'medium', 'high'],
      todoEditForm: false,
      todo: { ...this.initTodo },
      titleRules: [v => !!v || 'Title is required'],
    };
  },

  computed: {
    isXsScreen() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },

  methods: {
    editTodoHandler() {
      if (this.$refs.form.validate()) {
        this.todoEditForm = false;
        this.$emit('edit-todo', this.todo);
      }
    },
  },
};
</script>
