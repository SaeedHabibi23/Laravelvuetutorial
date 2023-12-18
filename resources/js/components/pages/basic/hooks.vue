<template>
    <div>
        <h1 ref="myref"> Hooks Page </h1>
        <p>  My Name is {{name}}  </p>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                name: 'Saeed'
            }
        } , 
        created(){
        //  Call mostly initial data from it also simple test foe new hardesk
        console.log('data and other function is created but not html' , this.name)
        },
        beforeCreate(){

        } , 
        mounted(){
            // access the local storage and access for the html elements, after render html, mounted is availabel.
            console.log(this.$refs.myref)

        }
    }

</script>