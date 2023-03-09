<template>
<div>
<b-container>
  <b-row>
    <b-col>
      <div>
      <b-card class="card-profile" :img-src="avatar" img-alt="Card avatar" img-top>
      <h4>{{name}}</h4>
      <b-card-text class="card-text-profile">
      <b-row>{{id}}# {{role}}</b-row>
      <b-row> Email: {{email}}</b-row>
      <b-row>Password: {{password}}</b-row>
      </b-card-text>
      </b-card>
      </div>
     </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
export default {
name:"cardUser",
props: {
    id: Number,
    name: String,
    role: String,
    email: String,
    password: String,
    avatar: String,
  },
}
</script>

<style scoped>

.card-profile{
  width: 290px;
  height: 400px;
  box-shadow: 5px 13px 20px rgba(0, 0, 0, 0.646);
  font-size: 14px;
  cursor: pointer;
  border-color: #9f9cab;
  margin-top: 3em;
  text-align: left;
}
h4{
  font-weight: bold;
}
.card-text-profile{
   padding-left: 12px;
   font-weight: bold;
   color:#9f9cab;
   margin-top: 6px;
   font-size: 18px;
}

</style>