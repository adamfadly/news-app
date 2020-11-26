<template>
  <div class="text-center">
    <v-dialog :persistent="true" v-model="dialog" width="600">
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>
          <v-container>
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="valueTitle"
                  label="Change Title"
                  :counter="30"
                  :rules="titleRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="handleClose">
              Close
            </v-btn>
            <v-btn color="primary" text @click="handleSave">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ModalPopUp",
  props: {
    dialog: Boolean,
  },
  data: () => ({
    valueTitle: "",
    valid: true,
    titleRules: [
      (v) => !!v || "Headlines",
      (v) =>
        (v && v.length <= 30) || "Headlines must be less than 30 characters",
    ],
  }),
  methods: {
    ...mapMutations("headlines", ["HANDLE_CHANGED_VALUETITLE"]),

    handleClose() {
      this.$emit("close-dialog");
      this.valueTitle = "";
      this.valid = false;
    },
    handleSave() {
      if (this.$refs.form.validate()) {
        this.$emit("save-dialog");
        this.HANDLE_CHANGED_VALUETITLE(this.valueTitle);
        this.valueTitle = "";
      } else if (this.valueTitle === "") {
        this.handleClose();
      }
    },
  },
};
</script>
