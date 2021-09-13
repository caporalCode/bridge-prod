<template>
  <div class="product-view">
    <v-dialog v-model="dialog" max-width="350px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="pink" v-bind="attrs" v-on="on" icon dark>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>
      <div class="d-flex justify-center align-center">
        <v-card class="" elevation="4" >
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
          <v-btn depressed dark block large @click="dialog= !dialog" color="error"> close</v-btn>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    item: {
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
