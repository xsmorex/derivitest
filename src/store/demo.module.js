import _ from 'lodash';
import { CHANGE_OPTIONS1, CHANGE_SELECTED_SYMBOL, SET_DEFAULT_OPTION1, ADD_OPTION1, ADD_OPTION2, CHANGE_OPTIONS2 } from "./actions.type";
import {
  CHANGE_OPTIONS1_END,
  CHANGE_SYMBOL_END,
  CHANGE_OPTIONS2_END
} from "./mutations.type";
const state = {
  option1: [],
  option2: [],
  defaultExpiries:5,
  optionClassList: ["Vanilla", "CashDeals", "Binaries"],
  callPutOptionList: ["Put", "Call"],
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
  [ADD_OPTION2]({ commit }, data) {
    commit(CHANGE_OPTIONS2_END, { id: data.id, data: data.data || {} })
  },
  [CHANGE_OPTIONS1]({ commit }, data) {
    commit(CHANGE_OPTIONS1_END, data);
  },
  [CHANGE_OPTIONS2]({ commit }, data) {
    commit(CHANGE_OPTIONS2_END, { id: data.id, data: data.data || {} });
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
      expiries: expiries || state.defaultExpiries,
      nationalInAction: nationalInAction || state.nationalInActionList[0]
    };
    if (_.isUndefined(id) || id == 0) {
      option1.id = "Option_" + Date.now() + Math.random();
      state.option1.push(option1)

    }
    else {
      option1.id = id;
      var index = _.findIndex(state.option1, { id: id });
      state.option1.splice(index, 1, option1);
      //Vue.set(state, 'option1', [...items]);

    }
  },
  [CHANGE_OPTIONS2_END](state, { id, data }) {

    let option1 = _.find(state.option1, { id: id });
    let option2 = _.filter(state.option2, { id: id });
    let option2StripeBeginDate, option2StripeEndDate;
    let { option2id, nationalIn } = data;
    let index = _.findIndex(option2, { option2id: option2id });
    if (option2.length >0 && index < 0) {
      index = option2.length;
    }
    if ((_.isUndefined(option2id) || option2id == 0) && (option2.length + 1) > option1.expiries) {
      alert("Max Expiries");
      return;
    }

    if (option2.length == 0 || index == 0) {
      option2StripeBeginDate = new Date(option1.stripeBeginDate);
      option2StripeBeginDate.setMonth(option2StripeBeginDate.getMonth() + 1);
      option2StripeEndDate = new Date(option2StripeBeginDate);
      option2StripeEndDate.setMonth(option2StripeEndDate.getMonth() + 1)
      option2StripeEndDate.setDate(option2StripeEndDate.getDate() - 1);

    }
    else {
      let lastOption = option2[index - 1];
      option2StripeBeginDate = new Date(lastOption.stripeBeginDate);
      option2StripeBeginDate.setMonth(option2StripeBeginDate.getMonth() + 1);
      option2StripeEndDate = new Date(option2StripeBeginDate);
      option2StripeEndDate.setMonth(option2StripeEndDate.getMonth() + 1)
      option2StripeEndDate.setDate(option2StripeEndDate.getDate() - 1);
    }

    option2StripeBeginDate = new Date(option2StripeBeginDate).toISOString().slice(0, 10);
    option2StripeEndDate = new Date(option2StripeEndDate).toISOString().slice(0, 10);

    let option2ItemObj = {
      strike: 1.3000,
      id: id,
      callPutOption: _.without(state.callPutOptionList, option1.callPutOption)[0],
      stripeBeginDate: option2StripeBeginDate,
      stripeEndDate: option2StripeEndDate,
      nationalIn: nationalIn || 0,
      nationalInAction: _.without(state.nationalInActionList, option1.nationalInAction)[0],
    };
    if (_.isUndefined(option2id) || option2id == 0) {
      option2ItemObj.option2id = "Option2_" + Date.now() + Math.random();
      state.option2.push(option2ItemObj)
    }
    else {
      option2ItemObj.option2id = option2id;
      
      let indexNew = _.findIndex(state.option2, { option2id: option2id });

      state.option2.splice(indexNew, 1, option2ItemObj);
      //Vue.set(state, 'option2', [...items]);
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
