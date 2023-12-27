
export default{
    data(){
        return {

        }
    }, 
    methods:{
        CallApi(methods, url , datadb){
            try{
                axios({
                    method: methods,
                    url: url,
                    data: datadb
                  });
            }
            catch(e){
                return e.respons;
            }
        }
    }
}  
