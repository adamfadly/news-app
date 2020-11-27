<template>
  <div>
    <v-app>
      <v-container class="pt-10">
        <div v-if="loading" class="layer-on-top">
          <v-progress-circular
            indeterminate
            :size="100"
            width="6"
            color="primary"
          ></v-progress-circular>
        </div>
        <div v-else>
          <div class="d-flex justify-center pt-10 align-center">
            <h1>{{ detailSource.title }}</h1>
          </div>
          <div class="pt-10">
            <p class="font-weight-thin text-uppercase">
              source:
              <span v-if="loading" class="font-weight-bold text-uppercase">
                news APi
              </span>
              <span v-else class="font-weight-bold text-uppercase">
                {{ detailSource.source.name }}
              </span>
            </p>
          </div>
          <div>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1.7"
              :src="detailSource.urlToImage"
            ></v-img>
            <p class="font-weight-regular line-height">
              {{ detailSource.content }}
            </p>
          </div>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      detailSource: {},
      loading: true,
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },

  async created() {
    this.scrollToTop();
    let sourceLists = this.getAllSourceList;
    let nameSourceRoute = this.$route.params.title;
    if (sourceLists.length == 0) {
      this.$router.push("/");
    } else {
      sourceLists.forEach((item) => {
        if (item.title === nameSourceRoute) this.detailSource = item;
      });
      this.loading = false;
    }
  },
};
</script>

<style>
.line-height {
  line-height: 200%;
}

.layer-on-top {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
