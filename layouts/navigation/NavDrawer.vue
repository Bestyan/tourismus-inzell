<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    items: {
      type: Array,
      required: true,
    },

    clipped: {
      type: Boolean,
      required: true,
    },

    drawer:{
        type: Boolean
    }
  },
}
</script>

<style></style>
