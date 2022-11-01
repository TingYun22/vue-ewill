<template>
    <button class="buttonShap" :class="btnText.toLowerCase()" >       
       <slot name="btn_contain" />
    </button>
</template>

<script>
export default{
    name:'ButtonTemplete',
    props:{
        text:{
            type:String
        },
        // isSub:{
        //     type:Boolean
        // }
    },
    data(){
        return{
            btnText:this.text,
            // canSubmit:this.isSub
        }
    },
    methods:{
        
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/buttonTemplete.scss" scoped>
</style>