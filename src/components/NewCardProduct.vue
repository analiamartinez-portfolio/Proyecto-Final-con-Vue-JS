<template>
  <div>
    <b-modal id="modal-new-product" centered title=" Create New Product">
      <p class="my-4">
        <b-row
          >Image:
          <input v-model="images" type="text" />
        </b-row>            
    <b-row
          >Title:
        <input v-model="newProduct.title" type="text">
        </b-row>
     <b-row>Description:
        <input v-model="newProduct.description" type="text">
    </b-row>
    <b-row>Price:
        <input v-model.number="newProduct.price" type="number">
    </b-row> 
    <b-row>CategoryId:
        <input v-model.number="newProduct.categoryId" type="number">
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
  name: "newCardProduct",
  data(){
     return {
       newProduct: {
        images: [],
       }
    };
  },
  methods: {
    accept() {
      this.newProduct.images.push(this.images);
      this.$store.commit("products/createNewProduct", this.newProduct);
      this.$bvModal.hide("modal-new-product");
      this.newProduct = {};
      this.images = "";
      setTimeout(() => {
        this.$store.dispatch("products/getListProducts");
      }, 500);
    },
    cancel() {
      this.$bvModal.hide("modal-new-product");
    },
  },
};
</script>

<style scoped>

</style>
