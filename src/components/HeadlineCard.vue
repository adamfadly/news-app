<template>
  <div class="wrapper--card">
    <v-card
      class="mx-auto flex-column justify-space-between"
      color="#3b7ebb"
      rounded
      dark
      width="320"
      height="400"
      elevation="11"
      tile
      loading
    >
      <div class="d-flex justify-space-between px-4">
        <div>
          <span class="font-weight-thin">{{ news.name }}</span>
        </div>
      </div>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="150"
        aspect-ratio="1.7"
        :src="news.picture"
      ></v-img>

      <v-card-text
        height="300"
        class="subtitle font-weight-bold text-limit-char font-title"
      >
        {{ news.title }}..
      </v-card-text>

      <v-card-actions class="flex-child">
        <v-list-item>
          <v-hover>
            <v-btn outlined text @click="onRead">
              Read More
            </v-btn>
          </v-hover>
          <v-spacer></v-spacer>
          <v-hover>
            <v-btn outlined text @click="onEditTitle">
              <v-icon small color="#ffff" class="mr-1">
                mdi-pencil
              </v-icon>
              Edit title
            </v-btn>
          </v-hover>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeadlineCard",
  props: {
    news: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },

  data() {
    return {
      title: "",
    };
  },

  methods: {
    ...mapMutations("headlines", [
      "HANDLE_CHANGED_INDEXCARD",
      "HANDLE_CHANGED_VISITED",
    ]),

    onRead() {
      this.$emit("read");
      this.HANDLE_CHANGED_VISITED(this.news);
    },

    onEditTitle() {
      this.$emit("edit-title");
      this.HANDLE_CHANGED_INDEXCARD(this.idx);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");

.font-title {
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  font-size: 20px;
}

.text-limit-char {
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: 160px;
}

.bg-white {
  background: white;
  width: 100%;
  padding: 10%;
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
