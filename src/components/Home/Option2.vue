<template>
<b-card no-body class="border-radius-0 strip-legs-option option2">
    <div slot="header">
        Strip > Legs
        <div class="card-header-actions">
            <b-link href="#" class="card-header-action btn-setting">
                <i class="fa fa-plus"></i>
            </b-link>
        </div>
    </div>
    <b-card-body class="p-0">
        <div class="d-flex flex-row flex-now">
            <Option2Item/>
            <Option2Item/>
            <Option2Item/>
            <Option2Item/>
            <Option2Item/>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
import Option2Item from "./Option2Item.vue";

export default {
    name: "Option2",
     components: {
        Option2Item
    },
};
</script>
