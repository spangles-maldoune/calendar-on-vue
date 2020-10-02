<template>
   <div class="main-content__calendar-month">
      <ul class="main-content__calendar-monthlist">
         <li
            @click="openPopUp(day)"
            v-for="(day, index) in dayInCurrentMonth"
            :key="index"
            :class="{
               'calendar-day__not-current': !day.isCurrentMonth,
               'calendar-day__today': day.isCurrentDay
            }"
         >
            {{day.value}}
         </li>
      </ul>
   </div>
</template>

<script>
   import {mapActions} from 'vuex'

   export default {
      name: "CalendarMonthDays",
      data() {
         return {
            date: new Date(),
            dayInCurrentMonth: [],
            lastDay: 0,
         }
      },
      methods: {
         ...mapActions(['SHOW_POP_UP']),
         createCurrentMonthDays() {
            let resArr = [];
            for(let i = 1; i <= this.lastDay; i++) {
               let weekDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), i).getDay();
               resArr.push({value: i, isCurrentDay: false, isCurrentMonth: true, weekDayIndex: weekDayIndex});
            }
            return resArr;
         },
         createPrevMonthDays(dayInCurrentMonth) {
            let curMonthDayIndex = new Date(this.date.getFullYear(), this.date.getMonth()).getDay();
            let prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
            for(let x = 0, y = 1; x < curMonthDayIndex; x++, y++) {
               let weekDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), 1 - y).getDay();
               dayInCurrentMonth.unshift({value: prevLastDay - x, isCurrentDay: false, isCurrentMonth: false, weekDayIndex: weekDayIndex});
            }
         },
         createNextMonthDays(dayInCurrentMonth) {
            let lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
            let nextDay = 7 - lastDayIndex - 1;
            for(let j = 1; j <= nextDay; j++) {
               let weekDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), this.lastDay + j).getDay();
               dayInCurrentMonth.push({value: j, isCurrentDay: false, isCurrentMonth: false, weekDayIndex: weekDayIndex});
            }
         },
         highlightCurrentDay(dayInCurrentMonth) {
            dayInCurrentMonth.map(item => {
               if(item.value === new Date().getDate() && this.date.getMonth() === new Date().getMonth() && item.isCurrentMonth) {
                  item.isCurrentDay = true;
               }
            })
         },
         startInitCalendar() {
            //first bug fix with february!
            if(this.date.getMonth() === 2) {
               this.date.setDate(1);
            }
            this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
            this.dayInCurrentMonth = this.createCurrentMonthDays();
            this.createPrevMonthDays(this.dayInCurrentMonth);
            this.createNextMonthDays(this.dayInCurrentMonth);
            this.highlightCurrentDay(this.dayInCurrentMonth);
         },
         openPopUp(currentDay) {
            this.SHOW_POP_UP(currentDay);
         }
      },
      mounted() {
         this.startInitCalendar();
         this.$emit('sendDate', this.date, this.startInitCalendar);
      }
   }
</script>

<style lang="scss">

   .main-content{

      &__calendar{

         &-month{

         }

         &-monthlist{
            color: #fff;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: repeat(6, 1fr);
            grid-gap: 11px 18px;

            & li{
               width: 51px;
               height: 51px;
               line-height: 51px;
               text-align: center;
               cursor: pointer;
            }
         }
      }
   }

   .calendar-day{

      &__not-current{
         color: #3D3D3D;
      }

      &__today{
         background: #FDD000;
      }
   }

</style>