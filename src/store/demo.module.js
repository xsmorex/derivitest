import _ from 'lodash';
import { CHANGE_OPTIONS1, CHANGE_SELECTED_SYMBOL,SET_DEFAULT_OPTION1 } from "./actions.type";
import {
  CHANGE_OPTIONS1_END,
  CHANGE_SYMBOL_END,
  SET_DEFAULT_OPTION1_END
} from "./mutations.type";
let stripeBeginDate = new Date();
let stripeEndDate = stripeBeginDate;
stripeEndDate.setMonth(stripeEndDate.getMonth() + 8);
const state = {
  option1: [],
  option2: [],
  defaultValues: {
    id:0,
    strike: 1.3000,
    optionClass:["Vanilla","CashDeals"],
    callPutOption:["Put","Buy"],
    stripeBeginDate:stripeBeginDate,
    stripeEndDate:stripeEndDate,
    expiries:1,
    NationalInAction:["Buy","Sell"]
  },
  selectedSymbol: "GBP",
  symbolList:["GBP","USD","EUR"]
};

const getters = {
  selectedSymbol(state) {
    return state.selectedSymbol;
  },
  defaultValues(state) {
    return state.defaultValues;
  },
  option1(state) {
    return state.option1;
  }
};

const actions = {
  [SET_DEFAULT_OPTION1]({ commit }) {
    commit(SET_DEFAULT_OPTION1_END)
  },
  [CHANGE_OPTIONS1]({ commit }, data) {
    commit(CHANGE_OPTIONS1_END, data);
  },
  [CHANGE_SELECTED_SYMBOL]({ commit }, symbol) {
    commit(CHANGE_SYMBOL_END, {
      symbol
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [CHANGE_OPTIONS1_END](state, { id, optionClass, callPutOption, stripeBeginDate, stripeEndDate, expiries, NationalInAction }) {
    let option1 = {
      strike: 1.3000,
      optionClass,
      callPutOption,
      stripeBeginDate,
      stripeEndDate,
      expiries,
      NationalInAction
    };
    if (id == 0) {
      option1.id = "Option_" + Date.now() + Math.random();
      state.option1.push(option1)
    }
    else {
      var index = _.findIndex(state.option1, { id: id });
      state.option1.splice(index, 1, option1);
    }
  },
  [CHANGE_SYMBOL_END](state, { symbol }) {
    state.symbol = symbol
  },
  [SET_DEFAULT_OPTION1_END](state) {
    state.option1.push(state.defaultValues)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
