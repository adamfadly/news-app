<template>
  <nav>
    <v-toolbar app dark fixed-header>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Mocha</span>
        <span>News</span>
      </v-toolbar-title>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>
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
