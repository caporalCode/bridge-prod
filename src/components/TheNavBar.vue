<template>
  <div class="nav-bar">
    <v-app-bar
      color="#6A76AB"
      dark
      app
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target=""
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-app-bar-title>Bridge Africa App</v-app-bar-title>

      <v-spacer></v-spacer>
      <the-user-account></the-user-account>

      <template v-slot:extension>
        <v-tabs align-with-title color="pink lighten-2">
          <v-tab exact :to="item.route"  v-for="(item, n) in items" :key="n"
            >
            {{item.text}}
            </v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
const TheUserAccount = () => import("@/components/TheUserAccount.vue");

export default {
  name: "TheNavbar",
  data() {
    return {
      items: [
        {
          text: "Products",
          route: "/app",
        },
        {
          text: "Manage",
          route: "/app/manage/",
        },
      ],
    };
  },
  components: {
    TheUserAccount,
  },
};
</script>

<style></style>
