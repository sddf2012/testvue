<template>
  <div>
  <button @click="getAllUsers">allUser</button>
  <ul>
    <li v-for="user in users" :key="user.id">{{user}}</li>
  </ul>
     <input  v-model="userid"><button @click="getUserById(userid)">getById</button><br>
    <span v-text="user"></span>
  </div>
</template>

<script>
import axios from '@/config/httpService'

export default {
  name: 'BasicContainer',
  data () {
    return {
      users: [],
      user: null,
      userid: '1'
    }
  },
  methods: {
    getAllUsers () {
      axios.get('user/getAll').then(resp => { this.users = resp.data })
    },
    getUserById (id) {
      axios.get(`user/getById/${id}`).then(resp => { this.user = resp.data })
    }
  }
}
</script>

<style scoped>

</style>
