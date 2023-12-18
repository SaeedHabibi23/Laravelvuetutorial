<template>
<div>
    <router-link to="/" class="btn btn-danger">First Page</router-link>
    <router-link to="/secondpage" class="btn btn-danger" >Second Page</router-link>
    <router-view></router-view>

</div>

    </template>
    
    <script>
export default {
  name: 'mainapp'
}
</script>
