<template>
  <div class="home container">
    <notifications
    :messages="messages"
    :timeout="4000"
    />
    <product-select
    :options="categories"
    :selected="selected"
    @select="sortByCategories"
    />
    <div class="row" >
      <div 
      class="col"
      v-for="product in filtered"
      :key="product.id">
        <div>
          <product-card
          :title="product.title"
          :btn="product.btn"
          :price="getFormatterNum(product.price)"
          :imgUrl="product.imgUrl"
          :amount="product.amount"
          :card="product"
          @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/product-card.vue';
import ProductSelect from '@/components/product-select.vue';
import formatter from '@/helper/formatter'
import { mapActions } from 'vuex';
import Notifications from '@/components/notifications.vue';

export default {
    data(){
      return{
        products:[
            {
            id:1,
            title: 'MacBook Pro M1',
            btn: 'ADD TO CART',
            price: 70000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/17/14/11417/images/16464/16464.970.jpeg',
            amount: 13,
            category: 'M1',
            },
            {
            id:2,
            title: 'MacBook Air M1',
            btn: 'ADD TO CART',
            price: 195000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/05/42/4205/images/7348/7348.970.jpeg',
            amount: 2,
            category: 'M1',
            },
            {
            id:3,
            title: 'MacBook Air M2',
            btn: 'ADD TO CART',
            price: 220000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/06/42/4206/images/7341/7341.970.jpeg',
            amount: 17,
            category: 'M2',
            },
            {
            id:4,
            title: 'MacBook Air M2',
            btn: 'ADD TO CART',
            price: 200000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/17/14/11417/images/16464/16464.970.jpeg',
            amount: 17,
            category: 'M2',
            },
            {
            id:5,
            title: 'MacBook Pro M1',
            btn: 'ADD TO CART',
            price: 201000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/06/42/4206/images/7341/7341.970.jpeg',
            amount: 17,
            category: 'M1',
            }, 
            {
            id:6,
            title: 'MacBook Pro M2',
            btn: 'ADD TO CART',
            price: 130000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/05/42/4205/images/7348/7348.970.jpeg',
            amount: 17,
            category: 'M2',
            }, 
            {
            id:7,
            title: 'MacBook Pro M2',
            btn: 'ADD TO CART',
            price: 100000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/06/42/4206/images/7341/7341.970.jpeg',
            amount: 17,
            category: 'M2',
            }, 
            {
            id:8,
            title: 'MacBook Pro M1',
            btn: 'ADD TO CART',
            price: 75000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/06/42/4206/images/7341/7341.970.jpeg',
            amount: 17,
            category: 'M1',
            }, 
            {
            id:9,
            title: 'MacBook Pro M1',
            btn: 'ADD TO CART',
            price: 85000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/05/42/4205/images/7348/7348.970.jpeg',
            amount: 17,
            category: 'M1',
            }, 
            {
            id:10,
            title: 'MacBook Pro M2',
            btn: 'ADD TO CART',
            price: 95000,
            imgUrl: 'https://my-apple-store.ru/wa-data/public/shop/products/17/14/11417/images/16464/16464.970.jpeg',
            amount: 17,
            category: 'M2',
            }, 
        ],
        categories:[
            {name : 'Все', value: 'All'},
            {name : 'M1', value: 'M1'},
            {name : 'M2', value: 'M2'}
        ],
        sortedProducts: [],
        selected: 'Все',
        messages:[]
      }
    },
    components:{
      ProductCard,
      ProductSelect,
      Notifications,
    },
    mounted(){
      window.addEventListener('resize', function(){
        if(window.innerWidth > 767){
          console.log('Desktop')
        }else{
          console.log('Mobile')
        }
      })
    },
    computed:{
      filtered(){
        if(this.sortedProducts.length){
          return this.sortedProducts
        }else{
          return this.products
        }
      }
    },
    methods: {
      getFormatterNum(number){
        return formatter(number)
      },
      ...mapActions([
          'ADD_TO_CART'
        ]),
      addToCart(data){
        this.ADD_TO_CART(data)
        let timeStamp = Date.now().toLocaleString()
        this.messages.unshift(
          {name: 'Товар добавлен в корзину', id: timeStamp}
        )
      },
      sortByCategories(category){
        this.sortedProducts = [];
        this.selected = category.name;
        let vm = this;
        this.products.map(function (item) {
          if(item.category === category.name){
            vm.sortedProducts.push(item);
          }
        })
      }
    },
}
</script>

<style lang="scss" scoped>
  .home{
    margin-top: 70px;
  }
</style>