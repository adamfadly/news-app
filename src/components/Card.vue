<template>
  <div class="wrapper--card">
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="400"
      min-width="320"
      height="400"
      elevation="3"
      outlined
      shaped
      tile
      loading
    >
      <v-card-title>
        <span class="title font-weight-light">{{ data.name }}</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold text-limit-char">
        {{ data.description }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-btn
            class="bg-dark"
            raised
            outlined
            text
            color="white lighten-2"
            @click="clickedOne()"
          >
            Read More
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="bg-dark"
            raised
            outlined
            text
            rounded
            @click="clickedTwo()"
          >
            Button B
          </v-btn>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Card",
  props: {
    data: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },

  data() {
    return {};
  },
  methods: {
    ...mapMutations("headlines", ["HANDLE_CHANGED_INDEXCARD"]),
    clickedOne() {
      this.$emit("clicked-btn1");
    },
    clickedTwo() {
      this.$emit("clicked-btn2");
      this.HANDLE_CHANGED_INDEXCARD(this.idx);
    },
  },
  computed: {
    // ...mapGetters("headlines", ["getAllSourceList"]),
  },
};
</script>

<style>
.wrapper--card {
  padding: 20px;
  margin: auto;
}
.bg-dark {
  background-color: red;
}
.bg-green {
  background-color: green;
}
</style>
