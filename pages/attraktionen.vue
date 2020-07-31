<template>
  <div>
    <masonry
      :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <v-card v-for="(item, index) in attractions" :key="index" class="item">
        <a :href="item.titleUrl"><img :src="item.imageUrl" /></a>

        <div class="content">
          <a :href="item.titleUrl"><h3>{{ item.title }}</h3></a>
          <p>{{ item.description }}</p>
        </div>
      </v-card>
    </masonry>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  async asyncData({ $axios }) {
    const attractions = await $axios.$get('/db/attractions')
    return { attractions }
  },

  methods: {
    /**
     * I am mocking a API call that load 20 objects at a time.
     */
    append() {},
  },
}
</script>

<style>
.item {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  background: rgb(53, 53, 53);
}
.content {
  padding: 20px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
}
</style>
