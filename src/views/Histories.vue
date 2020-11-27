<template>
  <v-container class="pt">
    <div v-if="getAllVisitedPages.length == 0">
      <div class="font-no-history">
        Sorry you haven't visited any detail our page at home!
      </div>
    </div>
    <div v-else class="wrapper">
      <div v-for="(item, index) in getAllVisitedPages" :key="index" class="box">
        {{ item.title }}
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Histories",
  comoponent: {},

  computed: {
    ...mapGetters("headlines", ["getAllVisitedPages"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nerko+One&display=swap");

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.font-no-history {
  margin-top: 2em;
  font-family: "Nerko One", cursive;
  font-size: 6em;
  text-align: center;
}

.pt {
  padding-top: 10%;
}
.box {
  background-color: #c2bffb;
  margin-top: 15px;
  padding: 5px 40px;
  width: 50%;
  height: 15%;
  border-radius: 6px;
  border: solid #d6d4fc 1px;
  /* transition-delay: 2s; */
}

.box:hover {
  transform: scale(1.3);
  transition: 0.5s;
}
</style>
