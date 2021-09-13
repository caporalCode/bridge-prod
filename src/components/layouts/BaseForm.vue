<template>
  <div class="base-form fill-height d-flex justify-center align-center">
    <v-card class="base-form-card" elevation="12" min-width="500px">
    <div class="bar-color"></div>
      <v-card-text class="base-form-card-text">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card-title
                class=" pb-1 mb-4 blue--text base-form-card-title uppercase headline font-weight-bold"
              >
                {{title}}
              </v-card-title>
            </v-col>
          </v-row>
          <slot> </slot>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true,
        }
    }
};
</script>

<style>
.bar-color{
    width: 100%;
    height: 10px;
    background:#2196F3 ;
}
</style>
