<template>
  <div>
    <v-app>
      <v-container>
        <Header />
        <div class="d-flex justify-center pt-10 align-center">
          <h1>{{ detailSource.title }}</h1>
        </div>
        <div class="pt-10">
          <p class="font-weight-thin text-uppercase">
            source:
            <span class="font-weight-bold">
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
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Detail",
  components: {
    Header,
  },
  data() {
    return {
      detailSource: {},
    };
  },

  methods: {
    ...mapActions("headlines", ["headlinesList"]),
  },

  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },

  async created() {
    await this.headlinesList();
    let sourceLists = this.getAllSourceList;
    let nameSourceRoute = this.$route.params.title;
    sourceLists.forEach((item) => {
      if (item.title === nameSourceRoute) this.detailSource = item;
    });
    console.log(nameSourceRoute);
    console.log(this.detailSource);
  },
};
</script>

<style>
.line-height {
  line-height: 200%;
}
</style>
