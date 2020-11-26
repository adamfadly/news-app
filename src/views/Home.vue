<template>
  <v-container class="grey lighten-5">
    <Header />
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <Card
          v-for="(news, index) in getAllSourceList"
          :key="index"
          :data="news"
          @clicked="goToDetail(news.name)"
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
    goToDetail(name) {
      this.$router.push(`/detail/${name}`);
    },
  },
  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },
  async created() {
    await this.headlinesList();
    console.log(this.getAllSourceList);
  },
};
</script>

<style></style>
