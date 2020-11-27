<template>
  <div class="wrapper--card">
    <v-card
      class="mx-auto flex-column justify-space-between m-auto"
      color="#26c6da"
      dark
      width="320"
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

      <v-card-text class="headline text-limit-char">
        {{ data.description }}..
      </v-card-text>

      <v-card-actions class="flex-child">
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
.text-limit-char {
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: 275px;
}

.flex-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
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
