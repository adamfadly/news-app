<template>
  <div class="home">
    <Header />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },
};
</script>
