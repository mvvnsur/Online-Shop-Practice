<template>
  <div class="cart d-flex justify-content-center flex-column align-items-center" v-if="cart_data == ''">
    <h1>The cart is empty</h1>
    <img src="@/../public/img/empty-box.png" width="200px">
  </div>
  <div class="cart__info" v-else>
    <cart-item 
    v-for="(item, index) in cart_data"
    :key="item.id"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    @increment="increment(index)"
    @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p>Total :</p>
      <p> {{getFormatterNum(cartTotal)}} </p>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart-item.vue';
import formatter from '@/helper/formatter';
import { mapActions } from 'vuex';

export default {
  name: 'Cart',
  components:{
    CartItem,
  },
  props:{
    cart_data:{
      type: Array,
      default(){
        return []
      }
    },
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    },
    getFormatterNum(number){
      return formatter(number)
    },
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    }
  },
  computed:{
    cartTotal(){
      let result = []
      
      if(this.cart_data.length){
        for(let item of this.cart_data){
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function(sum ,el){
          return sum + el
        })
        return result
      }
    }
  },
}

</script>

<style lang="scss" scoped>
  .cart{
    margin-top: 100px;
  }
  .cart__info{
    margin-top: 100px;
    .cart__total{
      width: 80%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e4e4e4;
      margin: auto;
      p{
        margin: 0;
        font-size: 20px;
      }
    } 
  }
</style>