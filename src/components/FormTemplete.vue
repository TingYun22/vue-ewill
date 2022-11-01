<template>
    <form name="form1" id="form1" autocomplete="off" v-on:submit.prevent="checkSubmit">
        <div class="form1_outer">
            <div id="form1_title">
                <h3>FORM</h3>
            </div>
            <div>
                <label for="store">store <span>*</span></label>
                <input v-model="inputValue.store" type="text" name="store" id="store" placeholder="placeholder text"
                >
                <div id="help"></div>
            </div>
            <div>
                <label for="name">name <span>*</span></label>
                <input v-model="inputValue.name" type="text" name="name" id="name" placeholder="placeholder text">
                <div id="help"></div>
            </div>
            <div>
                <label for="phone">phone <span>*</span></label>
                <input v-model="inputValue.phone" type="number" id="phone" placeholder="placeholder text" maxlength="10"
                 >
                <div id="help" ></div>
            </div>
            <div>
                <label for="amout">Amount of consumption <span>*</span></label>
                <input v-model="inputValue.amout" type="number" name="amout" id="amout" min="0" placeholder="placeholder text">
                <div id="help"></div>
            </div>
            <div>
                <label >payment <span>*</span></label>
                <div class="selectGroup">
                    <select class="form-control">
                        <option value="0" selected>digital payment</option>
                        <option value="1">ATM</option>
                    </select>
                    <div class="arrow"><i class="fa-solid fa-sort-down"></i></div>
                </div>
                <div id="help"></div>
            </div>
        </div>

        <ButtonTemplete :text="'submit'" />
        
    </form>
</template>

<script>
import stores from './../data/stores.json'
import ButtonTemplete from './ButtonTemplete.vue'

export default{
    name:'FormTemplete',
    components:{
        ButtonTemplete
    },
    data(){
        return{
            inputValue:{
                store:null,
                name:'',
                phone:'',
                amout:null
            },
            storesData:[...stores]
        }
    },
    mounted(){
        // console.log(this.storesData)
        $("input").on('keyup keypress blur change keydown', function (e) {
            const event=e.type
            
            const type=$(this).attr('type')
            const id=$(this).attr('id')

            if(type=='number'){
                if (e.which != 8 && e.which != 0  && (e.which < 48 || e.which > 57) ) {

                    if(id=='phone' || id=='amout'){
                        if(event=='keydown' && (e.which == 46 || e.which ==110)){
                                return false;
                        }
                        if(event=='keydown' && parseInt($(this).val().length) > parseInt($(this).attr('maxlength')-1) ){
                            return false;
                        }
                    }
                    let copyVal=$(this).val()
                    switch(id){
                        case 'phone':
                            for(let i=0;i< $(this).val().length; i++){
                                let word=$(this).val()[i]
                                if((i==0 && word!=='0') || (i==1 && word!=='9')){
                                    $(this).siblings('#help').text('wrong format')
                                    return false;
                                }else{
                                    $(this).siblings('#help').text('')
                                }
                            }
                            break;
                        case 'amout':
                            for(let i=0;i< $(this).val().length; i++){
                                let word=$(this).val()[i]
                                if(i==0 && word=='0'){
                                    $(this).val(`${parseInt(copyVal)}`)
                                }else{
                                    $(this).siblings('#help').text('')
                                }
                            }
                            break;
                    }
                    
                    
                    
                }
            }

            if(type=='text'){
                const reg=new RegExp(/[{\d"'<>%;)(&+}]/g)
                // let oldVal
                for(let i=0;i<$(this).val().length;i++){
                    const word=$(this).val()[i]
                    // console.log(i,reg.test(word))
                    if(reg.test(word)){
                        console.log(word)

                    
                    }
                }
                
                // /[^\a-\z\A-\Z]/g
                // /[^\u4E00-\u9FA5]/g
                // /[^u4e00-u9fa5w]/g
                // /[\a-\z\A-\Z\u4E00-\u9FA5\ ]
                
            }
            
            
        })
    },
    created(){
        
    },
    methods:{
        checkSubmit(e){
            e.preventDefault();

            for(let i=0;i< $('input').length;i++){
                let target=$('input')[i].id

                for(let k in this.inputValue){
                    if(target==k){
                        if($(`input[id=${target}]`).val()=='' && ($(`input[id=${target}]`).siblings('#help').text())==''){
                            $(`input[id=${target}]`).siblings('#help').text('required')
                        }else{
                            if($(`input[id=${target}]`).siblings('#help').text()==''){
                                $(`input[id=${target}]`).siblings('#help').text('')
                            }
                        }
                    }
                    
                }
                
            }
            
        }
    },

}</script>

<style lang="scss" src="@/assets/css/components/formTemplete.scss" scoped>
</style>