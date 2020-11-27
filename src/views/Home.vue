<template>
  <v-container class="grey lighten-5">
    <Header />
    <ModalPopUp
      :dialog="dialog"
      @close-dialog="triggerDialog()"
      @save-dialog="savingChangeTitle()"
    />
    <v-row no-gutters>
      <v-col class="d-flex flex-wrap flex-row" cols="12" sl>
        <Card
          v-for="(news, index) in getAllSourceList"
          :key="index"
          :data="news"
          :idx="index"
          @clicked-btn1="goToDetail(news.title)"
          @clicked-btn2="triggerDialog()"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import ModalPopUp from "@/components/ModalPopUp.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Card,
    ModalPopUp,
  },
  data() {
    return {
      dialog: false,
      testDulu: "tes",
    };
  },
  methods: {
    ...mapActions("headlines", ["headlinesList"]),

    goToDetail(name) {
      this.$router.push(`/detail/${name}`);
    },
    triggerDialog() {
      this.dialog = !this.dialog;
    },
    savingChangeTitle() {
      this.triggerDialog();
    },
  },

  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },

  async created() {
    await this.headlinesList();
  },
};
</script>

<style></style>
