<template>
<div class="top-section">
    <b-row>
        <b-col cols="3">
            <b-form-group label="Trade Date" label-for="tradeDate" :label-cols="5" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="tradeDate" id="tradeDate"></b-form-input>
            </b-form-group>
            <b-form-group label="Spot Date" label-for="spotDate" :label-cols="5" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="spotDate" id="spotDate"></b-form-input>
            </b-form-group>
        </b-col>
        <b-col cols="3">
            <b-form-group label="Data Snap" label-for="dataSnap" label-size="sm" :label-cols="5" :horizontal="true">
                <b-form-input id="dataSnap" name="dataSnap" type="text" size="sm" placeholder="Live Rates"></b-form-input>
            </b-form-group>
            <b-form-group label="Currency Pair" label-for="currencyPair" label-size="sm" :label-cols="5" :horizontal="true">
                <b-row>
                    <b-col cols="5">
                        <b-form-select id="fromCurrency" v-model="selectedOption" name="fromCurrency" :plain="true" :options="symbolList" :value="selectedSymbol">
                        </b-form-select>
                    </b-col>
                    <b-col cols="2">
                        <span class="fa fa-exchange"></span>
                    </b-col>
                    <b-col cols="5">
                        <b-form-select id="toCurrency" name="toCurrency" :plain="true" :options="symbolList" :value="symbolList[symbolList.length-1]">
                        </b-form-select>
                    </b-col>
                </b-row>
            </b-form-group>
        </b-col>
        <b-col cols="3">
            <b-form-group label="Portfolio" label-class="font-weight-bold" label-for="smInput" label-size="sm" :label-cols="12" :horizontal="true">
            </b-form-group>
            <b-form-group label="Spot" label-for="spot" label-size="sm" :label-cols="6" :horizontal="true">
                <b-form-input id="spot" name="spot" type="text" size="sm" placeholder=""></b-form-input>
            </b-form-group>
        </b-col>
        <b-col cols="3">
            <b-form-group label="Contains" label-class="font-weight-bold" label-for="smInput" label-size="sm" :label-cols="12" :horizontal="true">
            </b-form-group>
            <b-form-group label="12 Options,Total Nationa (GBP): Sell 0.6M BUY 0.6M" label-for="smInput" label-size="sm" :label-cols="12" :horizontal="true">
            </b-form-group>
        </b-col>
    </b-row>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import {
    CHANGE_SELECTED_SYMBOL
} from "@/store/actions.type";

export default {
    name: "TopPanel",
    data: function () {
        return {
            selectedOption: {}
        };
    },
    computed: {
        ...mapGetters(["symbolList", "selectedSymbol"])
    },
    mounted() {
        this.selectedOption = this.symbolList[0]
    },
    methods: {
        changeTopSymbol(symbol) {
            this.$store.dispatch(CHANGE_SELECTED_SYMBOL, symbol);
        },
    },
    watch: {
        selectedOption: function (newValue) {
            this.changeTopSymbol(newValue);
        }
    }

};
</script>
