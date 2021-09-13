<template>
  <div class="product-edit">
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" depressed color="pink" dark>
          <v-icon>mdi-plus</v-icon>
          <span>add product</span>
        </v-btn>
      </template>
      <base-form title="Product Edit">
        <template v-slot:default>
          <v-container class="">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Provider"
                  type="text"
                  :rules="[rules.required, rules.checkText]"
                  hide-details
                  filled
                  rounded
                  dense
                  v-model="item.provider"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="item.description"
                  rounded
                  hide-details
                  :rules="[rules.required, rules.checkText]"
                  dense
                  filled
                  label="Description"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Price"
                  type="text"
                  :rules="[rules.required, rules.checkText]"
                  hide-details
                  filled
                  rounded
                  dense
                  v-model="item.price"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="caption">Rate</div>
                <div class="d-flex justify-center">
                  <v-rating
                    v-model="item.rate"
                    color="yellow darken-3"
                    background-color="grey lighten-2"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    dense
                  ></v-rating>
                </div>
              </v-col>
              <!-- image -->
              <!-- color -->
              <v-col cols="12">
                <v-select
                  v-model="item.color"
                  :items="colors"
                  filled
                  hide-details
                  :rules="[rules.required]"
                  rounded
                  dense
                  item-text="text"
                  item-value="val"
                  label="Select"
                  single-line
                ></v-select>
              </v-col>
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <v-btn
                    depressed
                    rounded
                    large
                    color="blue"
                    dark
                    @click="handleCreate"
                    >create</v-btn
                  >
                  <v-btn
                    depressed
                    rounded
                    large
                    color="error"
                    dark
                    @click="dialog = !dialog"
                    >cancel</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </base-form>
    </v-dialog>
  </div>
</template>

<script>
import BaseForm from "@/components/layouts/BaseForm.vue";
import { TEXT_REGEX } from "@/regex";
import { NOTYF } from "@/notyf";
export default {
  name: "product-add",
  components: {
    BaseForm,
  },

  data() {
    return {
      dialog: false,
      item: {
        id: -1,
        provider: "",
        img: "https://picsum.photos/400/200?random",
        description: ``,
        price: "",
        rate: 0.0,
        color: "",
      },
      colors: [
        {
          text: "teal",
          val: "teal",
        },
        {
          text: "orange",
          val: "orange",
        },
        {
          text: "blue",
          val: "blue",
        },
        {
          text: "pink",
          val: "pink",
        },
      ],
      rules: {
        required: (v) => !!v || "Required field.",
        checkText: (v) => TEXT_REGEX.test(v) || "Invalid format.",
      },
    };
  },
  methods: {
    handleCreate() {
      this.item.id = this.$store.getters.getIdLastProduct + 1;
      if (this.item.id != -1) {
        this.$store.commit("newProduct", this.item);
        NOTYF.success("create success!");
        this.dialog = !this.dialog;
      }
    },
  },
};
</script>

<style scoped></style>
