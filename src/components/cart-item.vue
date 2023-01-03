<template>
  <div class="cart__item">
    <img :src="cart_item_data.imgUrl" class="cart__item__img">
    <div class="cart__item__info">
      <h5 class="card-title">{{cart_item_data.title}}</h5>
      <p class="card-price">{{getFormatterNum(cart_item_data.price)}}</p>
    </div>
    <div class="cart__item__quantity">
      Quantity: 
      {{cart_item_data.quantity}}
      <div class="cart__item__quantity-counter d-flex justify-content-evenly">
        <button class="btn btn-primary" @click="decrementItem">-</button>
        <button class="btn btn-primary" @click="incrementItem">+</button>
      </div>
    </div>
    <button class="cart__item__btn btn btn-danger" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import formatter from '@/helper/formatter';

export default {
  name: 'CartItem',
  props:{
    cart_item_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    getFormatterNum(number){
      return formatter(number)
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
  },
  mounted(){
    this.$set(this.cart_item_data, 'quantity', 1)
  },
}
</script>

<style lang="scss" scoped>
  .cart__item{
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0px 30px 0px 30px;
    box-shadow: 0 0 10px 0 #e0e0e0;
    margin-bottom: 30px;
    // scroll-behavior: smooth;
    &__img{
      width: 200px;
      height: 200px;
    }
    &___btn{
      width: 20px;
    }
  }
</style>