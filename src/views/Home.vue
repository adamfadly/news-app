<template>
  <v-container class="grey lighten-5">
    <Header />
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <Card
          class="card-grid"
          v-for="news in sourceLists"
          :key="news.id"
          :data="news"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { getSourceList } from "@/services/sourceList";
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },
  data() {
    return {
      sourceLists: [],
    };
  },

  async created() {
    this.sourceLists = await getSourceList();
    console.log(this.sourceLists);
  },
};
</script>

<style>
.card-grid {
  display: flex;
}
</style>
