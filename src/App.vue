<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
      <!-- <Home /> -->
    </v-main>
  </v-app>
</template>

<script>
// import Home from "./views/Home.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    // Home,
  },
};
</script>
