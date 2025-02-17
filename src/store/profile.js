import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";
import axios from "axios";

const useProfileStore = defineStore('profile', () => {

    const logged = ref(false);
    const authToken = localStorage.getItem('token')
    const url = ref('https://usermatrixv3.punchmyorders.in/user/profile')
    const profileData = ref({});

    const getProfile = async () => {

        try {
            if (authToken == '') return;
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });
            
            if (res.data) {
                profileData.value = res.data.data || {};
                
                logged.value = true
            }
            
        } catch (error) {
            console.log('error occured in profileStore', error);
        } 
    }

    getProfile();
    return { getProfile, profileData ,logged}

})

export default useProfileStore;