<template>
  <div>
    <v-app>
      <Header />
      <div>
        content goes here
      </div>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Detail",
  components: {
    Header,
  },
};
</script>
