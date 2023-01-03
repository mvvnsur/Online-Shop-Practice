<template>
    <div class="popup__wrapper" ref="popup_wrapper">
        <div class="popup">
          <div class="popup__header d-flex justify-content-between align-items-center">
              <span>{{popupName}}</span>
              <span><img 
                  class="popup__close"
                  src="../../public/img/close.png" 
                  width="15px"
                  @click="closePopup"
              ></span>
          </div>
          <div class="popup__content d-flex justify-content-center align-items-center">
              <slot></slot>
          </div>
          <div class="popup__footer d-flex justify-content-between align-items-center">
              <button class="btn btn-danger" @click="closePopup">Close</button>
              <button 
              class="btn btn-primary"
              @click="btnAction"
              >{{rightBtnTitle}}</button>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        rightBtnTitle:{
            type: String,
            default: 'Ok'
        },
        popupName:{
            type: String,
            default: 'Popup Name'
        }
    },
    methods:{
        closePopup(){
            this.$emit('closePopup')
        },
        btnAction(){
            this.$emit('btnAction')
        }
    },
    mounted(){
        let vm = this;
        document.addEventListener('click' ,function(item){
            if(item.target === vm.$refs['popup_wrapper']){
                vm.closePopup()
            }
        })
    }
}

</script>

<style lang="scss" scoped>
    .popup__wrapper{
        width: 100%;
        height: 1030px;
        background: rgba( 64,64,64, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    }
    .popup{
        padding: 16px;
        position: fixed;
        top: 200px;
        left: 25%;
        right: 25%;
        width: 800px;
        box-shadow: 0 0 17px 0 #e7e7e7;
        background: #ffffff;
        z-index: 10;
        &__close{
            cursor: pointer;
        }
    }
</style>