<template>
    <div>
        <div class="form_top_bg">
            <div class="waves">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <!-- <canvas ref="canvas"></canvas> -->
            <div class="form_top_contents">
                <ContentLayout>
                    <template v-slot:contain>
                        <article class="top">
                            <h2>
                                <div>There is no one</div>
                                <div>who loves pain</div>
                            </h2>
                            <div class="goFormBtn">
                                <ButtonTemplete :text="'FORM'"/>
                            </div>
                            <section>
                                <div class="paragGroup">
                                    <ParagraphTitle :parag="'paragraph'" />
                                        <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </div>
                                <div class="paragGroup">
                                    <ParagraphTitle :parag="'paragraph'" />
                                    <li>1. Quisque sodales leo <span>vitae vulputate auctor.</span></li>
                                    <li>2. Proin ac justo ut nisl tincidunt imperdiet.</li>
                                    <li>3. Maecenas viverra libero a pellentesque blandit.</li>
                                    <li>4. Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.</li>
                                    <li>5. Donec ultrices sapien <span class="noUnder">vitae leo venenatis ullamcorper.</span></li>
                                </div>
                            </section>
                
                        </article>
                    </template>
                </ContentLayout>
            </div>
            
        </div>
        <div class="curve">
            <!-- <img src="@/assets/images/waves_bg.png" alt=""> -->
        </div>
        <ContentLayout>
            <template v-slot:contain>
                <div class="form_bottom_contents">

                    <FormTemplete />
                </div>
            </template>
        </ContentLayout>
    </div>
</template>

<script>

import ContentLayout from './ContentLayout.vue'
import ButtonTemplete from './ButtonTemplete.vue'
import ParagraphTitle from './parts/ParagraphTitle.vue'
import FormTemplete from './FormTemplete.vue'

export default{
    name:'FormPage',
    components:{
        ContentLayout,
        ButtonTemplete,
        ParagraphTitle,
        FormTemplete
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