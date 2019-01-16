<template>
<b-card no-body class="border-radius-0 strip-legs-option option2">
    <div slot="header">
        Strip > Legs [ {{this.option.optionClass}} ]
        <div class="card-header-actions">
            <b-link href="#" class="card-header-action btn-setting" v-on:click.capture='onClick'>
                <i class="fa fa-plus"></i>
            </b-link>
        </div>
    </div>
    <b-card-body class="p-0">
        <div class="d-flex flex-row flex-now" v-if="optionlist.length>0">
            <template v-for="opt2 in optionlist">
                <Option2Item :key="opt2.optid" :option="option" :opt2="opt2" />
            </template>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
import _ from "lodash";
import {
    mapGetters
} from "vuex";
import Option2Item from "./Option2Item.vue";
import {
    ADD_OPTION2
} from "@/store/actions.type";
export default {
    name: "Option2",
    props: {
        option: {
            Type: Object
        }
    },
    data: function () {
        return {
            optionlist: []
        };
    },
    components: {
        Option2Item
    },
    watch: {
        option2() {
            this.optionlist = this.getOption2ofOption1();
        }
    },
    mounted: function () {
        this.optionlist = this.getOption2ofOption1();
    },
    methods: {
        onClick() {
            this.$store.dispatch(ADD_OPTION2, {
                id: this.option.id
            });
        },
        getOption2ofOption1() {
            return _.filter(this.option2, {
                id: this.option.id
            });
        }
    },
    computed: {
        _() {
            return _;
        },
        ...mapGetters(["option2"])
    }
};
</script>
