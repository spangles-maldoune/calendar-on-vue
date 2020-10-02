<template>
   <div class="main-content__home">
      <modal-pop-up
         v-if="isPopUpShow"
         :sendMonthIndex="dispatchedMonthIndex"
      />
      <div class="main-content__choose">
         <h1 class="main-content__title">Choose the day <br> for the meeting</h1>
         <span class="main-content__text">We encourage you to book your <br> appointment online. <br> This will save you time.</span>
      </div>
      <aside class="main-content__calendar">
         <calendar
            @sendMonthIndex="selectedMonthIndex"
         />
      </aside>
   </div>
</template>

<script>
   import Calendar from "@/components/Calendar";
   import ModalPopUp from "@/components/CalendarComponents/ModalPopUp";
   import {mapActions, mapGetters} from 'vuex';

   export default {
      name: "Home",
      components: {
         Calendar,
         ModalPopUp
      },
      data() {
         return {
            dispatchedMonthIndex: ''
         }
      },
      methods: {
         selectedMonthIndex(selectedMonthIndex) {
            this.dispatchedMonthIndex = selectedMonthIndex;
         }
      },
      computed: {
         ...mapGetters(['GET_POP_UP_STATE']),
         isPopUpShow() {
            return this.GET_POP_UP_STATE;
         }
      }
   }
</script>

<style lang="scss">
   .main{

      &-content{

         &__home{
            background: url("../assets/img/Untitled-1Artboard 1 copy.jpg") no-repeat center;
            background-size: cover;
            height: 100%;
            display: flex;
            justify-content: flex-end;
         }
         
         &__choose{
            text-align: right;
            margin-right: 33px;
            padding-top: 193px;
         }

         &__title{
            color: #FDD000;
            font-size: 50px;
            line-height: 64px;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            margin-bottom: 44px;
         }

         &__text{
            color: #DFDFDF;
            font-size: 30px;
            line-height: 40px;
            letter-spacing: 0.6px;
         }

         &__calendar{
            padding: 150px 105px 0 122px;
            background: #272829;
            height: calc(100vh - 176px);
         }
      }
   }

</style>