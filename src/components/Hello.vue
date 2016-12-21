<template>
  <div>
  <ul>
    <li v-for="user in users">{{ user.username }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.$user = this.$resource('users')
    this.$user.get().then((response) => {
      this.users = response.body
    }, (response) => {
      console.log('error')
    })
  }

}
</script>

