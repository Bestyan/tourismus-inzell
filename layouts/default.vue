<template>
  <v-app dark>
    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <nav-drawer :items="items" :clipped="clipped" :drawer="drawer" />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from './navigation/NavDrawer.vue'

export default {
  components: {
    NavDrawer,
  },

  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-stadium-variant',
          title: 'Attraktionen',
          to: '/attraktionen',
        },
        {
          icon: 'mdi-lock',
          title: 'Admin',
          to: '/admin',
        },
      ],

      clipped: true,
      drawer: false,
      title: "Attraktionen in und um Inzell"
    }
  },
}
</script>
