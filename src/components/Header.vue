<template>
  <nav>
    <v-app-bar height="70" class="p-auto" app fixed-header>
      <router-link to="/">
        <div class="logo">
          M
        </div>
      </router-link>

      <v-toolbar-title class="text-uppercase grey--text hide-name">
        <span class="font-weight-light">anatal</span>
        <span>News</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        class="mt-6"
        solo
        label="Search"
        append-icon="mdi-magnify"
        v-model="valueTyping"
      ></v-text-field>

      <v-btn depressed dark class="ml-5" to="/history">
        History
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",

  data: () => ({
    valueTyping: "",
  }),
  methods: {
    ...mapActions("headlines", ["getListByTyping"]),
  },
  watch: {
    valueTyping(value) {
      this.getListByTyping(value);
    },
  },
};
</script>

<style>
@media only screen and (max-width: 700px) {
  .hide-name {
    display: none;
  }
}

.logo {
  text-align: center;
  color: #ffffff;
  background-color: #3b7ebb;
  padding: 8px;
  width: 60px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 30px;
}
</style>
