<template>
   <div class="modal-container">
      <div class="modal-pop-up">
         <div class="modal-pop-up__header">
            <div @click="closePopUp"></div>
         </div>
         <div class="modal-pop-up__content">
            <div class="modal-pop-up__content-input modal-month">
               <label for="month">Month</label>
               <input type="text" name="month" id="month" :value="selectedMonth">
            </div>
            <div class="modal-pop-up__content-input modal-day">
               <label for="day">Day</label>
               <input type="text" name="day" id="day" :value="`${selectedMonthDay} ${selectedWeekDay}`">
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {mapActions, mapGetters} from 'vuex'

   export default {
      name: "ModalPopUp",
      props:['sendMonthIndex'],
      data() {
         return {
            weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
         }
      },
      methods: {
         ...mapActions(['HIDE_POP_UP']),
         closePopUp() {
            this.HIDE_POP_UP();
         }
      },
      computed: {
         ...mapGetters(['GET_SELECTED_WEEK_DAY', 'GET_SELECTED_MONTH_DAY', 'GET_MONTHS']),
         selectedMonth() {
            return this.GET_MONTHS[this.sendMonthIndex];
         },
         selectedWeekDay() {
            return this.weekDays[this.GET_SELECTED_WEEK_DAY];
         },
         selectedMonthDay() {
            let selectedDay = this.GET_SELECTED_MONTH_DAY;
            return (selectedDay % 10 === 1 && selectedDay !== 11 ? selectedDay + 'st' :
                   (selectedDay % 10 === 2 && selectedDay !== 12 ? selectedDay + 'nd' :
                   (selectedDay % 10 === 3 && selectedDay !== 13 ? selectedDay + 'rd' : selectedDay + 'th')));
         }
      }
   }
</script>

<style lang="scss">

   .modal{

      &-container{
         position: absolute;
         top: 0;
         right: 0;
         left: 0;
         bottom: 0;
         background: rgba(39, 40, 41, .85);
      }

      &-pop-up{
         width: 510px;
         height: 140px;
         background: #fff;
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         &__header{

            & div{
               position: relative;
               width: 28px;
               height: 28px;
               background: #FDD000;
               margin-left: auto;
               cursor: pointer;

               &:before, &:after{
                  position: absolute;
                  content: ' ';
                  height: 2px;
                  width: 16px;
                  background: #3D3D3D;
                  top: 13px;
                  left: 6px;
               }

               &:before{
                  transform: rotate(45deg);
               }

               &:after{
                  transform: rotate(-45deg);
               }
            }
         }

         &__content{
            display: flex;
            justify-content: space-between;

            &-input{
               display: flex;
               flex-direction: column;

               & label{
                  color: #A2A2A2;
                  font-size: 20px;
                  letter-spacing: -.4px;
                  margin-bottom: 8px;
               }

               & input{
                  width: 220px;
                  height: 54px;
                  color: #3D3D3D;
                  font-size: 22px;
                  letter-spacing: .66px;
                  font-weight: 500;
                  border: 2px solid #FDD000;
                  box-shadow: 0 0 25px #0000000D;
                  padding: 14px 0 14px 20px;

                  &:focus{
                     outline: none;
                  }
               }
            }

         }
      }

      &-month{
         margin-left: 25px;
      }

      &-day{
         margin-right: 25px;
      }
   }


</style>