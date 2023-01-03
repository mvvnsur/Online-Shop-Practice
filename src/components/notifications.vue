<template>
  <div class="notifications">
    <transition-group
        name="transition-animate"
        class="message_list"
    >
        <div 
        class="notifications__content content"
        v-for="message in messages"
        :key="message.id"
        >
            <div class="content__text">
                <span>{{message.name}}</span>
                <img src="../../public/img/done.png" width="30px">
            </div>
            <div class="content__buttons">
                <button v-if="rightButton.length">{{rightButton}}</button>
                <button v-if="leftButton.length">{{leftButton}}</button>
            </div>
        </div>
    </transition-group>

  </div>
</template>

<script>

export default {
    name: 'notifications',
    props:{
        messages: {
            type: Array,
            default: () => {
                return []
            }
        },
        rightButton:{
            type: String,
            default: ''
        },
        leftButton:{
            type: String,
            default: ''
        },
        timeout:{
            type: Number,
            default: 3000
        }
    },
    methods:{
        hideNotifications(){
            let vm = this;
            if(this.messages.length){
                setTimeout(function (){
                    vm.messages.splice(vm.messages.length - 1, 1)
                }, vm.timeout)
            }
        }
    },
    watch:{
        messages(){
            this.hideNotifications()
        }
    },
    mounted(){
        this.hideNotifications()
    }

}
</script>

<style lang="scss" scoped>
    .notifications{
        position: fixed;
        top: 90px;
        right: 16px;
        z-index: 10;
        &__content{
            border-radius: 5px;
            padding: 16px;
            color: #ffffff;
            height: 70px;
            margin-bottom: 16px;
            background: green;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .content{
            &__text{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    margin-left: 16px;
                }
            }
        }
        .transition-animate{
            &-enter {
                transform: translateX(120px);
                opacity: 0;
            }
            &-enter-active {
                transition: all .6s ease;
            }
            &-enter-to {
                opacity: 1;
            }

            &-leave {
                height: 70px;
                opacity: 0;
            }
            &-leave-active {
                transition: transform .6s ease, opacity .6s, height .6s .2s;
            }
            &-leave-to {
                height: 0;
                transform: translateX(120px);
                opacity: 0;
            }

            &-move{
                transition: transform .6s ease;
            }

        }
    }
</style>