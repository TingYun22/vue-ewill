<template>
    <form name="form1" id="form1" autocomplete="off">
        <div class="form1_outer">
            <div id="form1_title">
                <h3>FORM</h3>
            </div>
            <div>
                <label for="store">store <span>*</span></label>
                <input type="text" name="store" id="store" placeholder="placeholder text">
                <div id="help"></div>
            </div>
            <div>
                <label for="name">name <span>*</span></label>
                <input type="text" name="name" id="name" placeholder="placeholder text">
                <div id="help">required</div>
            </div>
            <div>
                <label for="phone">phone <span>*</span></label>
                <input type="text" name="phone" id="phone" placeholder="placeholder text">
                <div id="help" ></div>
            </div>
            <div>
                <label for="amout">Amount of consumption <span>*</span></label>
                <input type="number" name="amout" id="amout" placeholder="placeholder text">
                <div id="help"></div>
            </div>
            <div>
                <label >payment <span>*</span></label>
                <div class="selectGroup">
                    <select class="form-control">
                        <option selected>digital payment</option>
                        <option value="1">ATM</option>
                    </select>
                    <div class="arrow"><i class="fa-solid fa-sort-down"></i></div>
                </div>
                <div id="help"></div>
            </div>
        </div>

        <ButtonTemplete :text="'submit'"/>
        
    </form>
</template>

<script>
import ButtonTemplete from './ButtonTemplete.vue'

export default{
    name:'FormTemplete',
    components:{
        ButtonTemplete
    }
    
}</script>

<style lang="scss" src="@/assets/css/components/formTemplete.scss" scoped>
</style>