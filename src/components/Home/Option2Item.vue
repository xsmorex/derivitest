<template>
<b-card no-body class="strip-legs-option">
    <b-list-group flush>
        <b-list-group-item>
            <b-form-select name="optionClass" :plain="true" :options="['Knock In (pbki)']" disabled value="Knock In (pbki)">
            </b-form-select>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-select name="callPutOption" :plain="true" :options="getCallPutOptionList" :value="getCallPutOptionValue">
            </b-form-select>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-input name="strike" type="text" size="sm" placeholder="1.3000"></b-form-input>
        </b-list-group-item>
        <b-list-group-item>
            &nbsp;
        </b-list-group-item>
        <b-list-group-item>&nbsp;</b-list-group-item>
        <b-list-group-item>
            <b-form-group class="m-0" label="Strip begin date" label-for="strip_begin_date" :label-cols="5" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="strip_begin_date" :value="opt2.stripeBeginDate"></b-form-input>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-group class="m-0" label="Strip end date" label-for="strip_end_date" :label-cols="5" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="strip_end_date" :value="opt2.stripeEndDate"></b-form-input>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>&nbsp;</b-list-group-item>
        <b-list-group-item>
            Trigger Start
        </b-list-group-item>
        <b-list-group-item>
            <b-form-group class="m-0" label="" label-for="trigger_start_date" :label-cols="0" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="trigger_start_date"></b-form-input>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
            Trigger End
        </b-list-group-item>
        <b-list-group-item>
            <b-form-group class="m-0" label="" label-for="trigger_end_date" :label-cols="0" label-size="sm" :horizontal="true">
                <b-form-input type="date" size="sm" name="trigger_end_date"></b-form-input>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-group class="m-0" label="" label-for="nationalIn">
                <b-input-group>
                    <b-form-input size="sm" name="nationalIn" type="text" v-model="nationalIn"></b-form-input>
                    <b-input-group-append>
                        <b-button size="sm" :variant="getVarientClass">{{opt2.nationalInAction}}</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>&nbsp;</b-list-group-item>
    </b-list-group>
</b-card>
</template>

<script>
import {
    mapGetters
} from "vuex";
import {
    CHANGE_OPTIONS2
} from "@/store/actions.type";
export default {
    name: "Option2Item",
    props: {
        opt2: {
            Type: Object
        },
        option: {
            Type: Object
        }
    },
    data: function () {
        return {
            isDetailShown: true,
            nationalIn: this.opt2.nationalIn
        };
    },
    watch: {
        nationalIn() {
            this.onChange();
        },
    },
    methods: {
        onChange() {
            this.$store.dispatch(CHANGE_OPTIONS2, {
                id: this.option.id,
                data: {
                    option2id: this.opt2.option2id,
                    nationalIn: this.nationalIn
                }
            });
        },

    },
    computed: {
        ...mapGetters(["selectedSymbol", "callPutOptionList"]),
        getCallPutOptionList() {
            let items = [];
            this.callPutOptionList.map((data) => {
                items.push([this.selectedSymbol, data].join(" "))
            })
            return items;
        },
        getCallPutOptionValue() {
            return [this.selectedSymbol, this.opt2.callPutOption].join(" ")
        },
        getVarientClass() {
            return (this.opt2.nationalInAction.toLowerCase() == "buy") ? "info" : "warning"
        }
    }
};
</script>
