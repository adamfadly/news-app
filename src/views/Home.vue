<template>
  <div class="home">
    <Header />
    <Card />
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
      lists: [],
    };
  },

  async created() {
    this.lists = await getSourceList();
    console.log(this.lists);
  },
};
</script>
