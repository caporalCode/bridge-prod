<template>
  <div class="home">
    <the-nav-bar />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
export default {
  name: "Home",
  components: {
    TheNavBar,
  },
};
</script>
