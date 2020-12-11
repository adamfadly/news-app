<template>
  <v-container class="grey lighten-5 p-10">
    <div v-if="loading" class="layer-on-top">
      <v-progress-circular
        indeterminate
        :size="100"
        width="6"
        color="primary"
      ></v-progress-circular>
    </div>
    <div v-else>
      <ModalPopUp
        :dialog="dialog"
        @close-dialog="triggerDialog()"
        @save-dialog="savingChangeTitle()"
      />
      <v-row no-gutters>
        <v-col class="d-flex flex-wrap flex-row" cols="12" sl>
          <HeadlineCard
            v-for="(news, index) in getAllSourceList"
            :key="news.id"
            :news="news"
            :idx="index"
            @read="onReadMore(news.title)"
            @edit-title="onEditTitle()"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import HeadlineCard from "@/components/HeadlineCard.vue";
import ModalPopUp from "@/components/ModalPopUp.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HeadlineCard,
    ModalPopUp,
  },
  data() {
    return {
      dialog: false,
      testDulu: "tes",
      loading: true,
    };
  },
  methods: {
    goToDetail(title) {
      this.$router.push(`/detail/${title}`);
    },

    onReadMore(title) {
      this.goToDetail(title);
    },

    triggerDialog() {
      this.dialog = !this.dialog;
    },

    onEditTitle() {
      this.triggerDialog();
    },

    savingChangeTitle() {
      this.triggerDialog();
    },
  },

  computed: {
    ...mapGetters("headlines", ["getAllSourceList"]),
  },

  created() {
    this.loading = false;
  },
};
</script>
