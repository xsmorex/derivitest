<template>
<b-container fluid>
    <TopPanel />
    <div class="middle-section mt-3 pt-4 pb-5">
        <b-card no-body class="ml-2 strip-legs-option">
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
                        <b-form-select id="optionClass" :plain="true" :options="['Vanilla', 'Cash Deals']" value="Vanilla">
                        </b-form-select>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-form-select id="callPutOption" :plain="true" :options="['GBP Put', 'GBP Call']" value="GBP Put">
                        </b-form-select>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-form-input id="strike" type="text" size="sm" placeholder="1.3000"></b-form-input>
                    </b-list-group-item>
                    <b-list-group-item>&nbsp;</b-list-group-item>
                    <b-list-group-item>&nbsp;</b-list-group-item>
                    <b-list-group-item>
                        <b-form-group class="m-0" label="Strip begin date" label-for="date" :label-cols="5" label-size="sm" :horizontal="true">
                            <b-form-input type="date" size="sm" id="strip_begin_date"></b-form-input>
                        </b-form-group>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-form-group class="m-0" label="Strip end date" label-for="date" :label-cols="5" label-size="sm" :horizontal="true">
                            <b-form-input type="date" size="sm" id="strip_end_date"></b-form-input>
                        </b-form-group>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-form-group class="m-0" label="Expiries" label-for="smInput" label-size="sm" :label-cols="6" :horizontal="true">
                            <b-form-input id="expiries" type="text" size="sm" placeholder="6"></b-form-input>
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
                                <b-form-input size="sm" id="nationalIn" type="text" value="100,000"></b-form-input>
                                <b-input-group-append>
                                    <b-button size="sm" variant="primary">Buy</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-list-group-item>
                </b-list-group>
            </b-card-body>
        </b-card>
    </div>
</b-container>
</template>

<script>
import TopPanel from "../components/Home/TopPanel.vue";

export default {
    name: "Home",
    components: {
        TopPanel
    }
};
</script>
