import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";


const useBlogStore = defineStore('blog' , () => {

    const loading = ref(false);
    const blogs = ref([]);
    const selectedBlog = ref(null);

    const getBlogs = async () => {
        loading.value = true;
        try {

            const res = await makeRequest('blogs' , 'GET' , {} , {} , {} , {} , {});
            if(res) {
                blogs.value = res || [];
            }
        } catch (error) {
            console.log('error occured in blogstore' , error);
        } finally { loading.value = false};
    }

    const getBlogById = async () => {
        loading.value = true;
        try {

            const res = await makeRequest('blogs' , 'GET' , {} , {} , {} , {} , selectedBlog.value);
            if(res) {
                blogs.value = res || [];
            }
        } catch (error) {
            console.log('error occured in blogstore' , error);
        } finally { loading.value = false};
    }

    getBlogs();
    return {loading , getBlogs , blogs , selectedBlog}

})

export default useBlogStore;