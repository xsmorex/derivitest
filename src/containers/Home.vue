<template>
<b-container fluid>
    <TopPanel />
    <div class="middle-section mt-3 pt-4 pb-5">
        <div class="d-flex flex-row flex-now">
            <Option1 />
        </div>
    </div>
</b-container>
</template>

<script>
import TopPanel from "../components/Home/TopPanel.vue";
import Option1 from "../components/Home/Option1.vue";
export default {
    name: "Home",
    components: {
        TopPanel,
        Option1
    }
};
</script>
