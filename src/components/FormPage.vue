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
                            <div class="goFormBtn" @click.prevent="scrollTo('#form1_title')">
                                <ButtonTemplete :text="'FORM'" >
                                    <template v-slot:btn_contain>
                                        FROM
                                    </template>
                                </ButtonTemplete>
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
        <div class="lottery_top_bg">
            <ContentLayout>
                <template v-slot:contain>
                    <RankingLayout>
                        <template v-slot:contain>
                            <template v-for="(val,ind) in awardsData">
                                    <AwardCard :key="ind" :contain="{val,ind}" />         
                            </template>
                        </template>
                    </RankingLayout>
                </template>
            </ContentLayout>
        </div>
        <div class="lottery_botton">
            <div class="info">
                <span></span>
                <div class="info_date">13.32</div>
                <div>who seeks after it and</div>
                <div>wants to have it</div>
            </div>
            <div class="pic">
                <img src="@/assets/images/lighthouse.png" alt="">
            </div>
        </div>
        <div class="market_bg">
            <div class="info">
                <div>Neque porro quisquam</div>
                <div>est qui dolorem!</div>
            </div>
            <div class="pic">
                <img src="@/assets/images/market.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import awards from '../data/awards.json'

import ContentLayout from './ContentLayout.vue'
import RankingLayout from './RankingLayout.vue'
import ButtonTemplete from './ButtonTemplete.vue'
import ParagraphTitle from './parts/ParagraphTitle.vue'
import AwardCard from './parts/AwardCard.vue'
import FormTemplete from './FormTemplete.vue'

export default{
    name:'FormPage',
    components:{
        ContentLayout,
        RankingLayout,
        ButtonTemplete,
        ParagraphTitle,
        AwardCard,
        FormTemplete
    },
    data(){
        return{
            // vueCanvas: null
            awardsData:{...awards}
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
    methods:{
        scrollTo(id) {
            document.querySelector(id).scrollIntoView( {behavior : 'smooth'} );
        }
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/formPage.scss" scoped>
</style>