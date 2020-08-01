<template>
  <v-app dark>
    <nav-bar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './navigation/NavBar.vue'

export default {
  components: {
    NavBar,
  },

  data() {
    return {
    }
  },
}
</script>
