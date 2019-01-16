<template>
<b-card no-body class="strip-legs-option">
    <b-list-group flush>
        <b-list-group-item>
            <b-form-select name="optionClass" :plain="true" :options="['Knock In (pbki)']" disabled value="Knock In (pbki)">
            </b-form-select>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-select name="callPutOption" :plain="true" :options="['GBP Call', 'GBP Put']" value="GBP Call">
            </b-form-select>
        </b-list-group-item>
        <b-list-group-item>
            <b-form-input name="strike" type="text" size="sm" placeholder="1.3000"></b-form-input>
        </b-list-group-item>
        <b-list-group-item>
            <div class="row">
                <div class="col">
                    <b-form-input name="trigger1" type="text" size="sm" placeholder="1.3000"></b-form-input>
                </div>
                <div class="col">
                    <b-form-select name="trigger1_type" :plain="true" :options="['Above', 'Below']" value="Above">
                    </b-form-select>
                </div>
            </div>
        </b-list-group-item>
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
                    <b-form-input size="sm" name="nationalIn" type="text" value="100,000"></b-form-input>
                    <b-input-group-append>
                        <b-button size="sm" variant="warning">Sell</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-list-group-item>
        <b-list-group-item>&nbsp;</b-list-group-item>
    </b-list-group>
</b-card>
</template>

<script>
export default {
    name: "Option2Item"
};
</script>
