<template>
    <div class="titles">
        <template v-for="(i) in 2">
            <img src="@/assets/images/cactus.png" alt="" :key="i" />
        </template>
        <h3>
            {{paragText}}
        </h3>
    </div>
</template>

<script>
export default{
    name:'ParagraphTitle',
    props:{
        parag:{
            type:String
        }
    },
    data(){
        return{
            paragText:this.parag
        }
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/paragraphTitle.scss" scoped>
</style>