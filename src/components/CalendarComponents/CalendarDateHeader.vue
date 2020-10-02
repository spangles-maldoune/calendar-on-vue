<template>
   <div class="main-content__calendar-header">
      <span @click="selectPreviousMonth"><</span>
      <span>{{selectedMonth}} {{selectedYear}}</span>
      <span @click="selectNextMonth">></span>
   </div>
</template>

<script>
   import {mapGetters} from 'vuex'

   export default {
      name: "CalendarDateHeader",
      props:['sendDate', 'startInitCalendar'],
      data() {
         return {
            date: new Date(),
            selectedMonthIndex: 0,
         }
      },
      methods: {
         selectPreviousMonth() {
            if(this.selectedMonthIndex < 1) {
               this.selectedMonthIndex = 0;
            } else if(this.selectedMonthIndex > 0) {
               this.sendDate.setMonth(--this.selectedMonthIndex);
            }
            this.startInitCalendar();
            this.sendMonthIndex();
         },
         selectNextMonth() {
            if(this.selectedMonthIndex < 11) {
               this.sendDate.setMonth(++this.selectedMonthIndex);
            } else if(this.selectedMonthIndex >= 12) {
               this.sendDate.setMonth(11);
            }
            this.startInitCalendar();
            this.sendMonthIndex();
         },
         sendMonthIndex() {
            this.$emit('sendMonthIndex', this.selectedMonthIndex);
         }
      },
      created() {
         this.selectedMonthIndex = this.date.getMonth();
      },
      mounted() {
         this.sendMonthIndex();
      },
      computed: {
         ...mapGetters(['GET_MONTHS']),
         selectedMonth() {
            return this.GET_MONTHS[this.selectedMonthIndex];
         },
         selectedYear() {
            return this.date.getFullYear();
         }
      }
   }
</script>

<style lang="scss">

   .main-content{

      &__calendar-header{
         font-size: 19px;
         line-height: 23px;
         text-transform: uppercase;
         color: #DFDFDF;
         border-bottom: 1px solid #FFFFFF;
         margin: 0 0 38px 0;
         display: flex;
         justify-content: center;

         & span{
            margin-bottom: 19.5px;


            &:nth-child(1){
               margin-right: auto;
               cursor: pointer;
            }

            &:nth-child(3){
               margin-left: auto;
               cursor: pointer;
            }
         }
      }
   }

</style>