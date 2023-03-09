<template>
<div>
<b-container>
  <b-row>
    <b-col>
      <div>
      <b-card class="card-change" :img-src="images[0]" img-alt="Card image" img-top>
      <h5>{{title}}</h5>
      <b-card-text>
      <b-row class="descrip-stilo">{{description}}</b-row>
      <b-row class="price-stilo"> Price: {{price}} €</b-row>
      </b-card-text>
      <b-row align-h="start">
        <b-col cols="3" ><b-button class="editButtonStilo" @click="emitEditProduct" variant="info">Edit</b-button></b-col>
        <b-col cols="3"><b-button class="editButtonStilo" @click="deleteCardProduct" variant="danger">Delete</b-button></b-col>
      </b-row>
      </b-card> 
      </div>
    </b-col>
  </b-row>
</b-container>
<div>
</div>
</div>
</template>

<script>


export default {
  name: "productsOnline",
  components: {
 
  },
  props: {
    title: String,
    price: Number,
    description: String,
    images: Array,
    id: Number,
  },
  methods: {
    deleteCardProduct(){
      this.$store.commit("products/deleteCardProduct", this.id);
      setTimeout(() => {
        this.$store.dispatch("products/getListProducts")
        }, 500)
      },
      emitEditProduct(){
        console.log("hola")
        const product = {
            images: this.images,
            title: this.title,
            description: this.description,
            price: this.price,
            id:this.id,
        }
        this.$emit('productListEdit', product)
    },
}
}
</script>

<style scoped> 

.card-change{
  width: 320px;
  height: 500px;
  box-shadow: 5px 13px 20px rgba(0, 0, 0, 0.646);
  font-size: 14px;
  cursor: pointer;
  border-color: #9f9cab;
  margin-top: 3em;
  text-align: left;
}
h5{
  font-weight: bold;
}
.imageStyle{
  max-height: 240px;
}
.descrip-stilo{
  padding-left: 12px;
  padding-right: 12px;
}
.price-stilo{
   padding-left: 12px;
   font-weight: bold;
   color:#042a63;
   margin-top: 6px;
}
.editButtonStilo{
  color:white;
  font-weight: bold;
}

</style> 
