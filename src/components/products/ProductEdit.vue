<template>
  <div class="product-edit">
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="pink" v-bind="attrs" v-on="on" icon dark>
          <v-icon>mdi-pencil</v-icon>
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
                  :rules="[rules.required]"
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
                  :rules="[rules.required]"
                  dense
                  filled
                  label="Description"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Price"
                  type="text"
                  :rules="[rules.required]"
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
                    @click="handleUpdate"
                    >Update</v-btn
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
import { NOTYF } from "@/notyf";
export default {
  name: "product-edit",
  props: {
    itemId: {
      required: true,
    },
  },
  components: {
    BaseForm,
  },

  data() {
    return {
      dialog: false,
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
      },
    };
  },
  computed: {
    item: function() {
      return this.$store.getters.getProduct(this.itemId);
    },
  },
  methods: {
    handleUpdate() {
      this.$store.commit("updateProduct", this.item);
      NOTYF.success("Update success!");
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style scoped></style>
