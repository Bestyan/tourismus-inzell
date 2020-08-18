<template>
  <v-app-bar dark app>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-menu v-for="(item, i) in items" :key="i">
      <template v-slot:activator="{ on, attributes }">
        <v-btn v-bind="attributes" v-on="on" :to="item.to" tile class="ml-sm-4">
          {{ item.title }}
        </v-btn>
      </template>

      <v-list v-if="item.subItems">
        <v-list-item v-for="(subItem, j) in item.subItems" :key="j">
          <v-list-item-title>{{ subItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      title: 'Attraktionen in und um Inzell',

      items: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Attraktionen',
          to: '/attraktionen',
        },
        {
          title: 'Admin',
          to: '/admin',
        },
        {
          title: 'Login',
          to: '/login',
        },
      ],
    }
  },
}
</script>

<style></style>
