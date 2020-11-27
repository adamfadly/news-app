<template>
  <div class="wrapper--card">
    <v-card
      class="mx-auto flex-column justify-space-between"
      color="#3b7ebb"
      rounded
      dark
      width="320"
      height="400"
      elevation="3"
      tile
      loading
    >
      <div class="d-flex justify-space-between px-4">
        <div>
          <span class="font-weight-thin">{{ data.source.name }}</span>
        </div>
      </div>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="150"
        aspect-ratio="1.7"
        :src="data.urlToImage"
      ></v-img>

      <v-card-text class="headline text-limit-char">
        {{ data.title }}..
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
  height: px;
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
