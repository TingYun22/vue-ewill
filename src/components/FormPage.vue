<template>
    <div>
        <div class="form_bg">
            <div class="waves">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <!-- <canvas ref="canvas"></canvas> -->
            <ContentLayout>
                <template v-slot:contain>
                    <section class="top">
                        <h2>
                            <div>There is no one</div>
                            <div>who loves pain</div>
                        </h2>
                    </section>
                </template>
            </ContentLayout>
        </div>
    </div>
</template>

<script>

import ContentLayout from './ContentLayout.vue'
export default{
    name:'FormPage',
    components:{
        ContentLayout
    },
    data(){
        return{
            // vueCanvas: null
        }
    },
    mounted(){
        // var ctx = this.$refs.canvas.getContext("2d");
        // this.vueCanvas=ctx;
        // this.vueCanvas.beginPath();
        // this.vueCanvas.moveTo(75,25);
        // this.vueCanvas.quadraticCurveTo(25,25,25,62.5);
        // this.vueCanvas.quadraticCurveTo(25,100,50,100);
        // this.vueCanvas.quadraticCurveTo(50,120,30,125);
        // this.vueCanvas.quadraticCurveTo(60,120,65,100);
        // this.vueCanvas.quadraticCurveTo(125,100,125,62.5);
        // this.vueCanvas.quadraticCurveTo(125,25,75,25);
        // this.vueCanvas.stroke(); 
    },
    
}</script>

<style lang="scss" src="@/assets/css/components/formPage.scss" scoped>
</style>