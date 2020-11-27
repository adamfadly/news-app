<template>
  <div>
    <v-app>
      <v-container>
        <Header />
        <div class="d-flex justify-center pt-10">
          <h1>News</h1>
        </div>
        <div class="pt-10">
          <p class="font-weight-thin">source: {{ detailSource.name }}</p>
        </div>
        <div>
          <p class="font-weight-regular line-height">
            {{ detailSource.description }}
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
    let nameSourceRoute = this.$route.params.id;
    sourceLists.forEach((item) => {
      if (item.id === nameSourceRoute) this.detailSource = item;
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
