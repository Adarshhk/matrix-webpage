import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest, baseApiUrl } from "../request/requests";
import axios from "axios";

const useProfileStore = defineStore('profile', () => {

    const logged = ref(false);
    const authToken = localStorage.getItem('token')
    const url = ref(`${baseApiUrl.value}/user/profile`)
    const profileData = ref({});
    axios.defaults.withCredentials = true;
    
    const getProfile = async () => {
       console.log(authToken)
        if (authToken == '' || authToken == null) return;
        try {
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });
            
            if (res.data) {
                profileData.value = res.data.data || {};
                
                logged.value = true
            }
            
        } catch (error) {
            console.log('error occured in profileStore', error);
            logged.value = false
        } 
        
    }

    getProfile();
    return { getProfile, profileData ,logged}

})

export default useProfileStore;