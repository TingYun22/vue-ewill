<template>
    <div class="buttonShap">
       {{btnText}}
    </div>
</template>

<script>
export default{
    name:'ButtonTemplete',
    props:{
        text:{
            type:String
        }
    },
    data(){
        return{
            btnText:this.text
        }
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/buttonTemplete.scss" scoped>
</style>