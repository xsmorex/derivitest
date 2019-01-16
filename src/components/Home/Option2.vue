<template>
<b-card no-body class="border-radius-0 strip-legs-option option2">
    <div slot="header">
        Strip > Legs [ {{this.option.optionClass}} ]
        <div class="card-header-actions">
            <b-link href="#" class="card-header-action btn-setting">
                <i class="fa fa-plus"></i>
            </b-link>
        </div>
    </div>
    <b-card-body class="p-0">
        <div class="d-flex flex-row flex-now">
            <template v-for="opt2 in getOption2ofOption1">
                <Option2Item :key="opt2.id" :opt2="opt2" />
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

export default {
    name: "Option2",
    props: {
        option: {
            Type: Object
        }
    },
    components: {
        Option2Item
    },
    mounted: function () {
        console.log(this.getOption2ofOption1)
    },
    methods: {

    },
    computed: {
        _() {
            return _;
        },
        ...mapGetters(["option2"]),
        getOption2ofOption1() {
            return _.find(this.option2, {
                "id": this.option.id
            })
        }
    }

};
</script>
