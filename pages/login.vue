<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    async userLogin() {
      this.$auth
        .loginWith('local', { data: this.login })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    },
  },

  auth: 'guest',
}
</script>

<style scoped>
input {
  background: white;
}
</style>
