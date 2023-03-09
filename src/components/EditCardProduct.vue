<template>
<div>
  <b-modal id="modal-edit-product" centered title="Edit Product">
    <p class="my-4">
    <b-row>Image:
        <input v-model="images"  type="text">
    </b-row> 
    <b-row>Title:
        <input v-model="title" type="text">
    </b-row>
     <b-row>Description:
        <input v-model="description" type="text">
    </b-row>
    <b-row>Price:
        <input v-model.number="price" type="number">
    </b-row> 
    </p>
<template #modal-footer>
      <b-button size="sm" variant="success" @click="accept">
        Accept
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel">
        Cancel
      </b-button>
</template>
</b-modal>
</div>
</template>

<script>

export default {
name: "editCardProduct",
props: {
    title: String,
    price: Number,
    description: String,
    images: Array,
    id: Number,
  },
data(){
    return{
       
    }
},
methods: {
    accept(){
        const productEditado = {
            images: this.images,
            title: this.title,
            description: this.description,
            price: this.price,
            id:this.id,
        }
        this.$store.commit("products/editCardProduct", productEditado);
        this.$bvModal.hide('modal-edit-product')
        setTimeout(() => {
        this.$store.dispatch("products/getListProducts")
        }, 500)
    },
    cancel(){
        this.$bvModal.hide('modal-edit-product')
    }
},
}
</script>

<style scoped>
h1{
  color:  rgb(8, 38, 84);
  margin-top: 1.5em;
  margin-bottom: 1em;
}

</style>