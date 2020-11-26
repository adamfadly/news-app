<template>
  <nav>
    <v-app-bar app dark fixed-header>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Mocha</span>
        <span>News</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    //
  }),
};
</script>
