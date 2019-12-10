<template>
  <v-dialog
    v-model="todoEditForm"
    max-width="620"
  >
    <template v-slot:activator="{ on: form }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            class="purple"
            :small="isXsScreen"
            v-on="{ ...form, ...tooltip }"
          >
            <v-icon :small="isXsScreen">
              mdi-book-open-variant
            </v-icon>
          </v-btn>
        </template>
        <span>Show All</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ initTodo.title }}</span>
        <v-spacer />
        <v-icon
          v-for="n in priorityLevel"
          :key="n"
        >
          mdi-star-outline
        </v-icon>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-divider />
          <v-row class="px-2">
            <v-col
              cols="12"
              sm="6"
            >
              <span>Due Date: {{ initTodo.dueDate }}</span>
            </v-col>
          </v-row>
          <v-divider />
          <v-row class="px-2">
            <v-col cols="12">
              <span
                class="title"
                style="word-break: break-word"
              >
                {{ initTodo.text }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          class="error"
          @click="todoEditForm = false"
        >
          Cancel
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
    };
  },

  computed: {
    priorityLevel() {
      const { priority } = this.initTodo;
      if (priority === 'high') return 3;
      if (priority === 'medium') return 2;
      return 1;
    },

    isXsScreen() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
