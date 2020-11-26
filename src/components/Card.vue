<template>
  <div class="wrapper--card">
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="400"
      min-width="320"
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
            @click="clicked()"
          >
            Button A
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined rounded text @click="clicked">
            Button B
          </v-btn>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  methods: {
    clicked() {
      return this.$emit("clicked");
    },
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
