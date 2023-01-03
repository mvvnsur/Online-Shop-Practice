<template>
    <div class="product__card my-5">
    <popUp 
        v-if="isInfoVisible"
        @closePopup="closePopup"
        rightBtnTitle="Add To Cart"
        :popupName="title"
        @btnAction="addToCart"
    >
        <img :src="imgUrl" class="card-img-top w-50 p-4">
        <div class="d-flex flex-column">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-price">{{price}}</p>
            <ul class="p-0">
                <p>Характеристики:</p>
                <li>Процессор Apple M1</li>
                <li>Цвет «серый космос»</li>
                <li> Память 256 ГБ</li>
                <li> Объем оперативной памяти 8 ГБ</li>
            </ul>
        </div>
    </popUp>
    <div 
    class="card" 
    style="width: 14rem;">
        <img :src="imgUrl" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-price">{{price}}</p>
            <div class="card__btn d-flex justify-content-evenly">
                <a 
                class="btn btn-warning" 
                @click="showPopup"
                >
                Show info
                </a>
                <a 
                class="btn btn-primary" 
                @click="addToCart">
                {{btn}}
                </a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import popUp from './pop-up.vue';

export default {
    name: 'ProductCard',
    components:{
        popUp,
    },
    data(){
        return{
            isInfoVisible: false
        }
    },
    props: ['title', 'btn', 'price', 'imgUrl', 'amount','memory','card',],
    methods:{
        addToCart(){
            this.$emit('addToCart', this.card)
        },
        showPopup(){
            this.isInfoVisible = true
        },
        closePopup(){
            this.isInfoVisible = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        transition: .3s;
        // border: none;
        &__btn a{
            font-size: 12px;
            width: 40%;
        }
    }
    .card:hover{
        cursor: pointer;
        box-shadow: 0 0 8px 0 #e0e0e0;
        transform: scale(1.1);
    }
</style>