<template>
  <div>
    <v-file-input
      filled
      :show-size="1000"
      placeholder="Excel Datei mit Attraktionen"
      v-model="attractionFile"
    />
    <v-btn @click="upload">Hochladen</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attractionFile: null,
    }
  },

  methods: {
    upload(event) {
      console.log(this.attractionFile)
      let formData = new FormData();
      formData.append('file', this.attractionFile)
      this.$axios
        .put('/admin/upload', formData)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    },
  },
}
</script>

<style></style>
