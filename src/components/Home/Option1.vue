<template>
<div class="d-flex">
    <b-card no-body class="ml-2 strip-legs-option option1">
        <div slot="header">
            Strip > Legs
            <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting" v-on:click.capture='onClick'>
                    <i class="fa fa-plus"></i>
                </b-link>
            </div>
        </div>
        <b-card-body class="p-0">
            <b-list-group flush>
                <b-list-group-item>
                    <b-form-select name="optionClass" :plain="true" v-model="optionClass" :options="optionClassList">
                    </b-form-select>
                </b-list-group-item>
                <b-list-group-item>
                    <div class="row">
                        <div class="col">
                            {{selectedSymbol}}
                        </div>
                        <div class="col">
                            <b-form-select name="callPutOption" :plain="true" :options="callPutOptionList" v-model="callPutOption">
                            </b-form-select>
                        </div>
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-input name="strike" type="text" size="sm" :value="option.strike"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip begin date" label-for="strip_begin_date" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-input type="date" size="sm" name="strip_begin_date" v-model="stripeBeginDate"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip end date" label-for="strip_end_date" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-input type="date" size="sm" name="strip_end_date" v-model="stripeEndDate"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Expiries" label-for="expiries" label-size="sm" :label-cols="5" :horizontal="true">
                        <b-form-input name="expiries" type="text" size="sm" v-model="expiries"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip By" label-for="strip_by" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-select name="strip_by" :plain="true" :options="['Expiry']" value="Expiry">
                        </b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button block variant="secondary" class="btn-pill" size="sm" @click='toggleDetail()'>Toggle Strip Details</b-button>
                </b-list-group-item>
                <b-list-group-item>
                    Leg Total National:
                </b-list-group-item>
                <b-list-group-item>
                    600,000
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="" label-for="nationalIn">
                        <b-input-group>
                            <b-form-input size="sm" name="nationalIn" type="text" value="100,000"></b-form-input>
                            <b-input-group-append>
                                <b-form-select name="callPutOption" :plain="true" :options="nationalInActionList" :value="option.nationalInAction">
                                </b-form-select>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
            </b-list-group>
        </b-card-body>
    </b-card>
    <template v-if="isDetailShown">
        <Option2 :option="option" />
    </template>
</div>
</template>

<script>
import Option2 from "./Option2.vue";
import {
    ADD_OPTION1,
    CHANGE_OPTIONS1
} from "@/store/actions.type";
import {
    mapGetters
} from "vuex";

export default {
    name: "Option1",
    props: {
        "option": {
            type: Object
        }
    },
    data: function () {
        return {
            isDetailShown: true,
            optionClass: this.option.optionClass,
            callPutOption: this.option.callPutOption,
            stripeBeginDate: this.option.stripeBeginDate,
            stripeEndDate: this.option.stripeEndDate,
            expiries: this.option.expiries
        }
    },
    watch: {
        optionClass() {
            this.onChange()
        },
        callPutOption() {
            this.onChange()
        },
        stripeBeginDate() {
            this.onChange()
        },
        stripeEndDate() {
            this.onChange()
        },
        expiries() {
            this.onChange()
        }
    },
    components: {
        Option2
    },
    methods: {
        onClick() {
            this.$store.dispatch(ADD_OPTION1)
        },
        toggleDetail: function () {
            this.isDetailShown = !this.isDetailShown
        },
        onChange() {
            this.$store.dispatch(CHANGE_OPTIONS1, {
                id: this.option.id,
                optionClass: this.optionClass,
                callPutOption: this.callPutOption,
                stripeBeginDate: this.stripeBeginDate,
                stripeEndDate: this.stripeEndDate,
                expiries: this.expiries
            })
        }
    },
    computed: {
        ...mapGetters(["optionClassList", "callPutOptionList", "nationalInActionList", "symbolList", "selectedSymbol"])
    }
};
</script>
