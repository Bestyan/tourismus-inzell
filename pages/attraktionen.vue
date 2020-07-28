<template>
  <div>
    <h1>Attraktionen</h1>
    <masonry
      :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <div v-for="(item, index) in items" :key="index" class="item">
        <img :src="item.image" />

        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </masonry>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      items: [
        {
          title: 'Max Aicher Arena',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
          image:
            'https://www.max-aicher-arena.de/wp-content/uploads/BAN_Herbst.jpg',
        },
        {
          title: 'Salzbergwerk Berchtesgaden',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
          image:
            'https://www.salzbergwerk.de/salzbergwerk/blog/content/Wiederer%C3%B6ffnung/image-thumb__2096__ebb_hero-teaser-img/Magischer%20Salzraum.pjpeg',
        },
        {
          title: 'Weißbachschlucht',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
          image:
            'https://www.berchtesgaden.de/cdn/uploads/weissbachschlucht-in-schneizlreuth-thmediafilelightbox.jpg',
        },
      ],
    }
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
