<template>
  <div class="login fill-height">
    <base-form title="Login">
      <template v-slot:default>
        <v-form ref="form">
          <v-text-field
            label="Email"
            placeholder="Enter your email"
            type="email"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.email]"
            filled
            rounded
            dense
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-inner-icon="mdi-key"
            :type="showPass ? 'text' : 'password'"
            placeholder="Enter your password"
            :rules="[rules.required]"
            @click:append="showPass = !showPass"
            filled
            rounded
            dense
            v-model="password"
          ></v-text-field>

          <!-- informations -->
          <div class="">
            <p class="text-center">
              if you don't have any account, please
              <router-link to="/signup">
                <strong>click here</strong>
              </router-link>
              to subscribe!
            </p>
          </div>
          <v-btn
            block
            depressed
            rounded
            :loading="loading"
            @click="handleLogin"
            large
            color="blue"
            dark
            >Login</v-btn
          >
        </v-form>
      </template>
    </base-form>
  </div>
</template>

<script>
import BaseForm from "@/components/layouts/BaseForm.vue";
import { EMAIL_REGEX } from "@/regex";
import { NOTYF } from "@/notyf";

const bcrypt = require("bcryptjs");

export default {
  name: "Login",
  data() {
    return {
      showPass: false,
      email: "",
      password: "",
      loading: false,
      rules: {
        required: (v) => !!v || "Required field.",
        email: (v) => EMAIL_REGEX.test(v) || "Email is not valid.",
      },
    };
  },
  computed: {
    userLocal: function() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        if (this.userLocal===undefined) {
          NOTYF.info("This account don't exist, please subscribe!");
          return;
        }
        if (this.email === this.userLocal.email) {
          const compare = bcrypt.compare(
            this.password,
            this.userLocal.password
          );
          if (compare) {
            this.$store.commit('setStatus', 'connect')
            NOTYF.success("Login success!");
            this.$router.replace("/app");
          } else {
            NOTYF.error("Password incorrect!");
          }
        } else {
          NOTYF.error("Email is not valid!");
        }
      } else {
        NOTYF.error("fill all the blanks!");
      }
    },
  },
  components: {
    BaseForm,
  },
};
</script>

<style scoped></style>
