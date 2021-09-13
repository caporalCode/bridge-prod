<template>
  <div class="login fill-height">
    <base-form title="SignUp">
      <template v-slot:default>
        <v-form ref="form">
          <!-- email -->
          <v-text-field
            label="Email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.email]"
            filled
            rounded
            dense
          ></v-text-field>
          <!-- username -->
          <v-text-field
            label="User name"
            placeholder="Enter your user name"
            v-model="username"
            prepend-inner-icon="mdi-account"
            type="text"
            :rules="[rules.required, rules.min, rules.max, rules.checkText]"
            filled
            rounded
            dense
          ></v-text-field>

          <!-- password -->
          <v-text-field
            label="Password"
            v-model="password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-inner-icon="mdi-key"
            :type="showPass ? 'text' : 'password'"
            placeholder="Enter your password"
            :rules="[rules.required, rules.password]"
            @click:append="showPass = !showPass"
            filled
            rounded
            dense
          ></v-text-field>
          <!-- confirm password -->
          <v-text-field
            label="Confirm Password"
            v-model="conPassWord"
            :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-inner-icon="mdi-key"
            :type="showPass2 ? 'text' : 'password'"
            placeholder="Confirm your password"
            :rules="[rules.required, rules.matchpassword]"
            @click:append="showPass2 = !showPass2"
            filled
            rounded
            dense
          ></v-text-field>

          <!-- informations -->
          <div class="">
            <p class="text-center">
              if you have any account, please
              <router-link to="/login">
                <strong>click here</strong>
              </router-link>
              to login!
            </p>
          </div>

          <v-btn
            block
            depressed
            rounded
            :loading="loading"
            @click="handleRegister"
            large
            color="blue"
            dark
            >SignUp</v-btn
          >
        </v-form>
      </template>
    </base-form>
  </div>
</template>

<script>
import { NOTYF } from "@/notyf";
import BaseForm from "@/components/layouts/BaseForm.vue";
import { EMAIL_REGEX, PASSWORD_REGEX, TEXT_REGEX } from "@/regex";

const bcrypt = require("bcryptjs");
export default {
  name: "SignUp",
  data() {
    return {
      showPass: false,
      showPass2: false,
      username: "",
      email: "",
      password: "",
      conPassWord: "",
      loading: false,
      rules: {
        required: (v) => !!v || "Required field.",
        email: (v) => EMAIL_REGEX.test(v) || "Email is not valid.",
        min: (v) => v.length >= 6 || "Min 6 caracters.",
        max: (v) => v.length <= 50 || "Max 50 caracters.",
        checkText: (v) => TEXT_REGEX.test(v) || "Invalid format.",
        password: (v) =>
          PASSWORD_REGEX.test(v) ||
          "8 characters, a number, a lowercase letter, an uppercase letter.",
        // user_name: (v) => USER_NAME_REGEX.test(v) || 'Format du nom invalide',
        matchpassword: (v) =>
          v === this.password ? true : "Passwords don't match..",
      },
    };
  },
  methods: {
    async handleRegister() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(this.password, salt);
        const user = {
          username: this.username,
          email: this.email,
          password: hash,
        };
        localStorage.setItem("user", JSON.stringify(user));
        this.loading = false;
        this.$router.replace("/login");
        NOTYF.success("Registered success!");
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
