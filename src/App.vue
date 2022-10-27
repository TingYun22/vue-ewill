<template>
    <div id="app">
        <FormPage />
    </div>
</template>

<script>
import FormPage from "./components/FormPage.vue";

export default {
    name: "App",
    components: {
        FormPage,
        
    },

    data() {
        return {
            
        };
    },
    created() {
        window.addEventListener("scroll", this.updateScroll);
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
            // console.log(window.scrollY);
        },
        clickShowMenu() {
            this.isShow = !this.isShow;
            if (this.isShow) {
                this.$refs.nav.classList.remove("changeColor");
            }
        },
    },
};
</script>

<style lang="scss" src="./@/../assets/css/app.scss"></style>
