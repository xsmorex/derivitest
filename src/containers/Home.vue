<template>
<b-container fluid>
    <TopPanel />
    <div class="middle-section mt-3 pt-4 pb-5">
        <div class="d-flex flex-row flex-now">
            <template v-for="option in option1">
                <Option1 :key="option.id" />
            </template>
        </div>
    </div>
</b-container>
</template>

<script>
import TopPanel from "../components/Home/TopPanel.vue";
import Option1 from "../components/Home/Option1.vue";
import { SET_DEFAULT_OPTION1 } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    TopPanel,
    Option1
  },
  mounted() {
    this.$store.dispatch(SET_DEFAULT_OPTION1)
  },
  computed: {
    ...mapGetters(["option1"])
  }
};
</script>
