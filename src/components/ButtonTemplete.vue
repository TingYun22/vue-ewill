<template>
    <button class="buttonShap" :class="btnText.toLowerCase()" >
       {{btnText}}
    </button>
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
    },
    methods:{
        checkType(e){
            console.log(e.type);
        }
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/buttonTemplete.scss" scoped>
</style>