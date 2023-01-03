<template>
  <div class="devices">
    <div class="devices__card container-fluid row">
      <div 
      class="deviced__card__items col"
      v-for="(item, index) in devices"
      :key="index">
        <div>
          <devices-product
          :title="item.title"
          :price="getIntl(item.price)"
          :btn="item.btn"
          :imgUrl="item.imgUrl"
          :card="item"
          @addDevicesToCart="addDevicesToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import devicesProduct from '@/components/devices-card.vue';
import formatter from '@/helper/formatter';
import { mapActions } from 'vuex';

export default {
    components:{
      devicesProduct,
    },
    data(){
      return{
        devices: [
          {
            id:1,
            title: 'Apple Mouse',
            price: 10000,
            btn: 'ADD TO CART',
            imgUrl: 'https://jjstore.ru/image/cache/catalog/iphone/aksessuary/apple-magic-mouse-2-silver-1181x865.jpeg'
          },
          {
            id:2,
            title: 'Apple Mouse',
            price: 20000,
            btn: 'ADD TO CART',
            imgUrl: 'https://jjstore.ru/image/cache/catalog/iphone/aksessuary/apple-magic-mouse-2-silver-1181x865.jpeg'
          },
          {
            id:3,
            title: 'Apple Mouse',
            price: 15000,
            btn: 'ADD TO CART',
            imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138490227'
          },
          {
            id:4,
            title: 'Apple Mouse',
            price: 8000,
            btn: 'ADD TO CART',
            imgUrl: 'https://jjstore.ru/image/cache/catalog/iphone/aksessuary/apple-magic-mouse-2-silver-1181x865.jpeg'
          },
          {
            id:5,
            title: 'Apple Mouse',
            price: 7000,
            btn: 'ADD TO CART',
            imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138490227'
          },
        ]
      }
    },
    methods:{
      getIntl(number){
        return formatter(number)
      },
      addDevicesToCart(data){
        this.ADD_TO_CART(data)
      },
      ...mapActions([
        'ADD_TO_CART'
      ]),
    },
}
</script>

<style lang="scss" scoped>
  .devices{
    margin-top: 100px;
  }
</style>