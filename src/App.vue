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
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    // Home,
  },

  methods: {
    ...mapActions("headlines", ["headlinesList"]),
  },
  async created() {
    await this.headlinesList();
  },
};
</script>
