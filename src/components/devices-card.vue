<template>
    <div class="devices__product">
        <div class="devices__product__card" style="width: 14rem;">
             <img :src="imgUrl" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-price">{{price}}</p>
                <a href="#" class="btn btn-primary w-100" @click="addDevicesToCart">{{btn}}</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['title','price','btn','imgUrl','card'],
    methods:{
        addDevicesToCart(){
            this.$emit('addDevicesToCart', this.card)
        }
    }
}
</script>

<style lang="scss" scoped>
    .devices__product{
        &__card{
            transition: .3s;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 0.25rem;
            .card-img-top{
                height: 162px;
            }
        }
        &__card:hover{
            cursor: pointer;
            box-shadow: 0 0 8px 0 #e0e0e0;
            transform: scale(1.1);
        }
    }
</style>