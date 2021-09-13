<template>
  <div class="products">
    <h1>
      List of our products
    </h1>
    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center">
        <ProductsListItem class="ma-4" v-for="item in products" :key="item.id" :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const ProductsListItem = () =>
  import("@/components/products/ProductsListItem.vue");
export default {
  name: "ProductList",
  components: {
    ProductsListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
    }),
  },
};
</script>

<style></style>
