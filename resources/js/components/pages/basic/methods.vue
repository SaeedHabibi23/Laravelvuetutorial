<template>
    <div>
        <h1> We home some data here {{ views }} </h1>
        <button @click="updateCounter(1)"> Plus </button>
        <button @click="updateCounter(-1)"> Minus </button>
        <br><br><br><br><br><br><br>
        <div v-for="(blog, i) in blogs" :key="i">
            <h1> {{ blog.title }} </h1>
            <p> {{ blog.post }} </p>
        </div>

//some codes are disabled or comment at this area
        <div>
            <p v-if="showItems">If show items is true</p>
            <p v-else>If show items is false</p>
            <button @click="changeshowItems"> Change Show Items </button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            views: 0 , 
            blogs:[
             
            ] , 
            showItems: false
        }
    } , 
    methods:{
        updateCounter(number){
            this.views+=number;
        } , 
        changeshowItems(){
            this.showItems = !this.showItems ;
        }
    } , 
    created(){
        this.views = 100;
        // get the blog post
        let post = [
        {title: 'this is a blog title', 'post' : 'thid is a blog post' , id:1},
                {title: 'this is a blog title two', 'post' : 'thid is a blog post two' , id:2},
                {title: 'this is a blog title three', 'post' : 'thid is a blog post three' , id:3},
           
                {title: 'this is a blog title four', 'post' : 'thid is a blog post four' , id:4}
        ]
        this.blogs = post

    }
}
</script>
