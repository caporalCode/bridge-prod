<template>
  <div class="products">
    <!-- tool bar -->
    <v-toolbar flat>
      <v-toolbar-title>
        <h1>
          Products manager
        </h1></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <product-add />
    </v-toolbar>

    <!-- product list -->
    <v-simple-table class="mt-6">
      <template v-slot:default>
        <thead>
          <tr class="primary">
            <th class="text-left" v-for="(header, n) in headers" :key="n">
              <span
                class="title font-weight-light text-capitalize white--text"
                >{{ header }}</span
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="text-uppercase">{{ item.provider }}</td>
            <td>{{ item.price }}</td>
            <td>
              <v-chip dark :color="generateColor(item.rate)">
                {{ item.rate }}
              </v-chip>
            </td>
            <td class="d-flex">
              <!-- view -->
              <ProductView :item="item" />

              <!-- edit -->
              <product-edit :itemId="item.id" />
              <!-- remove -->
              <v-btn color="pink" icon dark @click="handleDelete(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const ProductView = () => import("@/components/products/ProductView.vue");
const ProductEdit = () => import("@/components/products/ProductEdit.vue");
const ProductAdd = () => import("@/components/products/ProductAdd.vue");

export default {
  data() {
    return {
      headers: ["Provider", "price", "rate", "actions"],
    };
  },
  components: {
    ProductView,
    ProductEdit,
    ProductAdd
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
    }),
  },
  methods: {
    handleDelete(id) {
      this.$store.commit("removeProduct", id);
    },
    generateColor(num) {
      if (num <= 2.0) {
        return "error";
      }
      if (num <= 3.5) {
        return "info";
      }
      if (num <= 5) {
        return "success";
      }
    },
  },
};
</script>

<style></style>
