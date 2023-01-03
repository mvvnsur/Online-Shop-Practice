<template>
  <div class="product__select">
    <p 
    class="product__select__title d-flex justify-content-center btn-primary"
    @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div 
    class="product__select__options text-center"
    v-if="areOptionsVisible"
    >
        <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        >
        {{ option.name }}
        </p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ProductSelect',
    props: {
        options:{
            type: Array,
            default(){
                return []
            }
        },
        selected:{
            type: String,
            default: '',
        }
    },
    data(){
        return{
            areOptionsVisible: false,
        }
    },
    methods:{
        selectOption(option){
            this.$emit('select', option)
            this.areOptionsVisible = false;
        },
        hideSelect(){
            this.areOptionsVisible = false;
        }
    },
    // mounted(){
    //     document.addEventListener('click', this.hideSelect.bind(this), true)
    // },
    // beforeDestroy(){
    //     document.removeEventListener('click', this.hideSelect)
    // }
}
</script>

<style lang="scss" scoped>
    .product__select{
        position: relative;
        width: 200px;
        cursor: pointer;
        &__options{
            border: 1px solid #b4b2b2;
            border-radius: 3px;
            position: absolute;
            top: 35px;
            right: 0;
            width: 100%;
            z-index: 1;
            background-color: #f2f2f2;
        }
        &__title{
            border: 1px solid #b4b2b2;
            border-radius: 3px;
            padding: 5px 5px;
        }
        p{
            margin: 0;
        }
        &__options p:hover{
            background-color: #0d6efd;
            color: white;
        }
    }
</style>