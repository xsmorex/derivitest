import _ from 'lodash';
import { CHANGE_OPTIONS1, CHANGE_SELECTED_SYMBOL, SET_DEFAULT_OPTION1,ADD_OPTION1 } from "./actions.type";
import {
  CHANGE_OPTIONS1_END,
  CHANGE_SYMBOL_END
} from "./mutations.type";
const state = {
  option1: [],
  option2: [],
  optionClassList: ["Vanilla", "CashDeals", "Binaries"],
  callPutOptionList: ["Put", "Buy"],
  nationalInActionList: ["Buy", "Sell"],
  selectedSymbol: "GBP",
  symbolList: ["GBP", "USD", "EUR"]
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
  },
  optionClassList(state) {
    return state.optionClassList;
  },
  callPutOptionList(state) {
    return state.callPutOptionList;
  },
  nationalInActionList(state) {
    return state.nationalInActionList;
  },
  symbolList(state) {
    return state.symbolList;
  },
  option2() {
    return state.option2;
  }
};

const actions = {
  [SET_DEFAULT_OPTION1]({ commit }) {
    commit(CHANGE_OPTIONS1_END, {})
  },
  [ADD_OPTION1]({ commit }) {
    commit(CHANGE_OPTIONS1_END, {})
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
  [CHANGE_OPTIONS1_END](state, data) {
    let defualtStripeBeginDate = new Date();
    defualtStripeBeginDate = new Date(defualtStripeBeginDate).toISOString().slice(0, 10);
    let defaultStripeEndDate = new Date();
    defaultStripeEndDate.setMonth(defaultStripeEndDate.getMonth() + 1);
    defaultStripeEndDate = new Date(defaultStripeEndDate).toISOString().slice(0, 10);
    let { id, optionClass, callPutOption, stripeBeginDate, stripeEndDate, expiries, nationalInAction } = data;

    let option1 = {
      strike: 1.3000,
      optionClass: optionClass || state.optionClassList[2],
      callPutOption: callPutOption || state.callPutOptionList[0],
      stripeBeginDate: stripeBeginDate || defualtStripeBeginDate,
      stripeEndDate: stripeEndDate || defaultStripeEndDate,
      expiries: expiries || 1,
      nationalInAction: nationalInAction || state.nationalInActionList[0]
    };
    if (_.isUndefined(id) || id == 0) {
      option1.id = "Option_" + Date.now() + Math.random();
      state.option1.push(option1)
    }
    else {
      var index = _.findIndex(state.option1, { id: id });
      state.option1.splice(index, 1, option1);
    }
  },
  [CHANGE_SYMBOL_END](state, { symbol }) {
    state.selectedSymbol = symbol
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
