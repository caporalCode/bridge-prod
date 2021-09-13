<template>
  <div class="product-item">
    <v-card class="" elevation="4" max-width="350px">
      <v-card-text>
        <v-img :src="item.img" :alt="item.description"></v-img>
        <v-card-title
          class="justify-center headline text-uppercase black--text font-weight-bold"
        >
          <span> {{ item.provider }}</span>
        </v-card-title>
        <!-- description -->
        <div>
          <p class="caption text-center mb-1">
            {{ item.description }}
          </p>
        </div>
        <!-- price -->
        <p class="text-center title mb-1" :class="`${item.color}--text`">
          {{ item.price }}
        </p>
        <!-- rating -->
        <p class="d-flex justify-center mb-1">
          <v-rating
            v-model="item.rate"
            color="yellow darken-3"
            background-color="grey lighten-2"
            empty-icon="$ratingFull"
            half-increments
          ></v-rating>
        </p>
      </v-card-text>
      <v-btn depressed dark block large :color="item.color">
        <v-icon>mdi-cart-plus</v-icon> <span>Add cart</span></v-btn
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductsListItem",
  props: {
      item:{
          required: true,
      }
  },
  data() {
    return {

    }
  },
};
</script>

<style></style>
