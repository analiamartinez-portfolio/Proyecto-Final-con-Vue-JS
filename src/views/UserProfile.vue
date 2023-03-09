<template>
  <div class="back-stilo">
    <b-row>
    <b-col cols="3" v-for="users in $store.state.users.usersProfile" :key="users.index">
    <cardUser :id="users.id" :avatar="users.avatar" 
    :email="users.email" :password="users.password" :name="users.name" :role="users.role" /> 
    </b-col> 
    </b-row>
  </div>
</template>
<script>
import cardUser from "../components/CardUser.vue";


export default {
  name: "userProfile",
  components: {
    cardUser,
  },
  data(){ 
    return{}
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch("users/getUsersProfile");
  },
};
</script>

<style>

.back-stilo{
  background-color: #9f9cab;
}

</style>