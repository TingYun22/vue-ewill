<template>
    <div class="col-6 col-md-4  award_outer">
        <div class="award_shadow">
            <div :class="(title=='A' || title=='B' || title=='C')? 'award':'award award_blue'">
                <div class="one">{{text['num'].toUpperCase()}}</div>
                <div>{{text['text'].toLowerCase()}}</div>
            </div>
            <div class="medal">
                <div :class="(title=='A' || title=='B' || title=='C') ? 'medal_text medal_blue':'medal_text'">
                    {{title.toUpperCase()}}
                </div>
                <template v-if="title=='A' || title=='B' || title=='C'">
                    <img src="@/assets/images/medal_green.svg" alt="">
                </template>
                <template v-else>
                    <img src="@/assets/images/medal_blue.svg" alt="">
                </template>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    name:'AwardCard',
    props:{
        contain:{
            type:Object
        }
    },
    data(){
        let value;
        let index;
        for(let i in this.contain){
            index=this.contain[i]
            value=this.contain['val']
        }
       
        return{
            title:index,
            text:value
        }
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/awardCard.scss" scoped>
</style>