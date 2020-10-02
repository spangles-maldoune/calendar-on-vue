import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
     isPopUpActive: false,
     currentDay: {}
  },
  mutations: {
     'OPEN_POP_UP'(state, currentDay) {
         state.isPopUpActive = true;
         state.currentDay = currentDay;
     },
     'CLOSE_POP_UP'(state) {
        state.isPopUpActive = false;
     }
  },
  actions: {
     'SHOW_POP_UP'({commit}, currentDay) {
         commit('OPEN_POP_UP', currentDay);
     },
     'HIDE_POP_UP'({commit}) {
        commit('CLOSE_POP_UP');
     }
  },
   getters: {
      'GET_POP_UP_STATE'({isPopUpActive}) {
         return isPopUpActive;
      },
      'GET_MONTHS' ({months}) {
         return months;
      },
      'GET_SELECTED_MONTH_DAY'({currentDay}) {
         return currentDay.value;
      },
      'GET_SELECTED_WEEK_DAY'({currentDay}) {
         return currentDay.weekDayIndex;
      }
   },
  modules: {
  }
})
