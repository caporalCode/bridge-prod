<template>
  <div class="user-account">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      class="rounded-0"
      bottom
    >
      <!-- BUTTON ACTIVATION MENU WITH TOOLTIP-->
      <template #activator="{ on, attrs }">
        <v-btn icon v-on="on" v-bind="attrs">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card class="rounded-0">
        <v-card-title class="elevation-O primary">
          <span class="text-h5 white--text">My Account</span>
        </v-card-title>

        <v-divider />
        <!-- NOTIFICATIONS LISTS -->
        <v-card-text>
          <!-- Avatar et profil utilisateur -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="body-1 d-flex justify-center mb-4">
                <v-avatar color="pink" size="75">
                  <v-icon color="white">mdi-account</v-icon>
                </v-avatar>
              </v-list-item-title>
              <v-list-item-subtitle class="title black--text text-center">
                {{ user.username }}
                <span class="d-block subtitle-1 grey--text"
                  > {{ user.email }}</span
                >
              </v-list-item-subtitle>
              <v-divider class="" />
            </v-list-item-content>
          </v-list-item>

          <!-- LISTE DES OPTIONS  -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                My cart
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="handleLogOut" link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Log out
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      menu: false,
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    handleLogOut() {
      sessionStorage.removeItem('status')
      localStorage.removeItem("user");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped></style>
