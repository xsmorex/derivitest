<template>
<div class="d-flex">
    <b-card no-body class="ml-2 strip-legs-option option1">
        <div slot="header">
            Strip > Legs
            <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                    <i class="fa fa-plus"></i>
                </b-link>
            </div>
        </div>
        <b-card-body class="p-0">
            <b-list-group flush>
                <b-list-group-item>
                    <b-form-select name="optionClass" :plain="true" :options="['Vanilla', 'Cash Deals']" value="Vanilla">
                    </b-form-select>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-select name="callPutOption" :plain="true" :options="['GBP Put', 'GBP Call']" value="GBP Put">
                    </b-form-select>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-input name="strike" type="text" size="sm" placeholder="1.3000"></b-form-input>
                </b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip begin date" label-for="strip_begin_date" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-input type="date" size="sm" name="strip_begin_date"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip end date" label-for="strip_end_date" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-input type="date" size="sm" name="strip_end_date"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Expiries" label-for="expiries" label-size="sm" :label-cols="5" :horizontal="true">
                        <b-form-input name="expiries" type="text" size="sm" placeholder="6"></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group class="m-0" label="Strip By" label-for="strip_by" :label-cols="5" label-size="sm" :horizontal="true">
                        <b-form-select name="strip_by" :plain="true" :options="['Expiry']" value="Expiry">
                        </b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button block variant="secondary" class="btn-pill" size="sm">Strip Details</b-button>
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
                                <b-button size="sm" variant="primary">Buy</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>&nbsp;</b-list-group-item>
            </b-list-group>
        </b-card-body>
    </b-card>
    <Option2 />
</div>
</template>

<script>
import Option2 from "./Option2.vue";

export default {
    name: "Option1",
    components: {
        Option2
    },
};
</script>
