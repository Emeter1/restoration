<template>
  <v-layout>
    <div class="w-full">
      <div v-if="spinner" class="h-screen flex justify-center items-center">
        <img src="@/assets/img/loader.gif" width="100" alt="" />
      </div>
      <div v-else>
        <UtilsDashboardHeader :drawer="OpenDrawer"></UtilsDashboardHeader>
        <slot />
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" temporary>
      <div class="bg-black">
        <img src="@/assets/img/logo.png" alt="" />
      </div>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          link
          :to="{ path: '/dashboard' }"
          color="black"
          prepend-icon="home"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/users' }"
          color="black"
          prepend-icon="home"
          title="Users"
          value="users"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/network' }"
          color="black"
          prepend-icon="home"
          title="Networks"
          value="networks"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/data' }"
          color="black"
          prepend-icon="home"
          title="Data"
          value="Data"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/bills' }"
          color="black"
          prepend-icon="home"
          title="Bills"
          value="Bills"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/cables' }"
          color="black"
          prepend-icon="home"
          title="Cables"
          value="Cables"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/giftcard' }"
          color="black"
          prepend-icon="home"
          title="Gift Cards"
          value="giftcard"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/crypto' }"
          color="black"
          prepend-icon="home"
          title="Crypto"
          value="Crypto"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/epins' }"
          color="black"
          prepend-icon="home"
          title="Epins"
          value="Epins"
        ></v-list-item>
        <v-list-item
          link
          :to="{ path: '/dashboard/airtime2cash' }"
          color="black"
          prepend-icon="home"
          title="AirtimeTo Cash"
          value="Airtimecash"
        ></v-list-item>
         <v-list-item
          link
          :to="{ path: '/dashboard/withdrawal' }"
          color="black"
          prepend-icon="settings"
          title="Withdrawal"
          value="Withdrawal"
        ></v-list-item>
         <v-list-item
          link
          :to="{ path: '/dashboard/kyc' }"
          color="black"
          prepend-icon="settings"
          title="Kyc"
          value="Kyc"
        ></v-list-item>
         <v-list-item
          link
          :to="{ path: '/dashboard/system' }"
          color="black"
          prepend-icon="settings"
          title="System"
          value="System"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
let nuxt;
let auth;
let store;
export default {
  data: () => ({
    spinner: true,
    drawer: false,
  }),
  methods: {
    OpenDrawer() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    store = useAdminStore();
    nuxt = useNuxtApp();
    auth = nuxt.$authfunc;
    onAuthStateChanged(auth.UserState(), async (user) => {
      this.spinner = true;
      if (user) {
        console.log(user);
        store.SetUserCred(user.id, user.accessToken);
        const data = await AuthHandler(user.uid, user.accessToken);
        if (data) {
          this.spinner = false;
          this.$router.push({ path: "/dashboard" });
        }
      } else {
        this.$router.push({ path: "/admin" });
        this.spinner = false;
      }
    });
  },
  created() {},
};
</script>

<style></style>
