<template>
  <div class="home">
    <Header />

    <Card
      class="card-grid"
      v-for="news in sourceLists"
      :key="news.id"
      :data="news"
    />
  </div>
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
