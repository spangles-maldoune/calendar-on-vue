<template>
   <div class="main-content__calendar-weekdays">
      <ul class="main-content__calendar-weeklist">
         <li class="main-content__calendar-item" v-for="(day, index) in days" :key="index">{{day}}</li>
      </ul>
   </div>
</template>

<script>
   export default {
      name: "CalendarWeekDays",
      data() {
         return {
            days: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
         }
      }
   }
</script>

<style lang="scss">
   .main-content__calendar{

      &-weeklist{
         display: flex;
         justify-content: space-between;
         color: #fff;
         border-top: 1px solid #FFF;
         border-bottom: 1px solid #FFF;
         padding: 19px 0;
      }

      &-item{
         margin: 0 auto;

         &:nth-child(1){
            margin: 0 auto 0 20px;
         }

         &:nth-child(7){
            margin: 0 20px 0 auto;
         }
      }
   }

</style>