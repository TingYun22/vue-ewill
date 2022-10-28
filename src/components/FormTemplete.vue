<template>
    <form name="form1" id="form1">
        <div>
            <label for="email">store <span>*</span></label>
            <input type="email" name="email" id="email">
            <div id="help"></div>
        </div>
        <div>
            <label for="email">name <span>*</span></label>
            <input type="email" name="email" id="email">
            <div id="help"></div>
        </div>
        <div>
            <label for="email">phone <span>*</span></label>
            <input type="email" name="email" id="email">
            <div id="help"></div>
        </div>
        <div>
            <label for="email">Amount of consumption <span>*</span></label>
            <input type="email" name="email" id="email">
            <div id="help"></div>
        </div>
        
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default{
    name:'FormTemplete'
    
}</script>

<style lang="scss" src="@/assets/css/components/formTemplete.scss" scoped>
</style>