<template>
  <v-container class="grey lighten-5">
    <Header />
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <Card
          v-for="(news, index) in getAllSourceList"
          :key="index"
          :data="news"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("headlines", ["headlinesList"]),
  },
  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },
  async created() {
    await this.headlinesList();
  },
};
</script>

<style></style>
