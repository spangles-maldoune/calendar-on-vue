<template>
   <div class="main-content__calendar-wrapper">
      <CalendarDateHeader
         :sendDate="date"
         :startInitCalendar="startInitCalendar"
         @sendMonthIndex="getMonthIndex"
      />

      <calendar-month-days
         @sendDate="getDate"
      />

      <CalendarWeekDays/>
   </div>
</template>

<script>
   import CalendarDateHeader from "@/components/CalendarComponents/CalendarDateHeader";
   import CalendarMonthDays from "@/components/CalendarComponents/CalendarMonthDays";
   import CalendarWeekDays from "@/components/CalendarComponents/CalendarWeekDays";

   export default {
      name: "Calendar",
      components: {
         CalendarDateHeader,
         CalendarMonthDays,
         CalendarWeekDays
      },
      data() {
         return {
            date: {},
            startInitCalendar: {}
         }
      },
      methods: {
         getDate(date, startInitCalendar) {
            this.date = date;
            this.startInitCalendar = startInitCalendar;
         },
         getMonthIndex(selectedMonthIndex) {
            this.$emit('sendMonthIndex', selectedMonthIndex);
         }
      }
   }
</script>

<style lang="scss">
   .main-content__calendar-wrapper{
      width: 467px;
   }

</style>