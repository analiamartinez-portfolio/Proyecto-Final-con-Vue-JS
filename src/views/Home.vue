<template>
  <div class="back-stilo">
    <div>
  <b-button @click="$bvModal.show('modal-new-product')" class="change-button-newproduct" block variant="warning">Add New Product</b-button>
    </div>
    <b-row>
    <b-col cols="3" v-for="products in $store.state.products.listproducts" :key="products.index">
    <productsOnline :title="products.title" :images="products.images" 
    :description="products.description" :price="products.price" :id="products.id" @productListEdit="editProduct"/> 
      </b-col>
    </b-row>
    <editCardProduct
      :title="productToEdit.title"
      :images="productToEdit.images"
      :description="productToEdit.description"
      :price="productToEdit.price"
      :id="productToEdit.id"
    />
    <newCardProduct />
  </div>
</template>

<script>
import productsOnline from "../components/ProductsOnline.vue";
import editCardProduct from "../components/EditCardProduct.vue";
import newCardProduct from "../components/NewCardProduct.vue";

export default {
  name: "Home",
  components: {
    productsOnline,
    editCardProduct,
    newCardProduct,
  },
  data() {
    return {
      productToEdit: {},
    };
  },
  methods: {
    editProduct(value) {
      console.log(value, "value");
      this.productToEdit = value;
      this.$bvModal.show("modal-edit-product");
    },
  },
  mounted() {
    this.$store.dispatch("products/getListProducts");
  },
};
</script>
<style scoped>
.back-stilo {
  background-color: #9f9cab;
  padding-left: 32px;
  padding-right: 57px;
}
.change-button-newproduct {
  font-weight: bold;
  margin-top: 1em;
  margin-right: 87%;
}
</style>
