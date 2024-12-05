import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => { 
    // const url = `https://emeterr-recharge-api.vercel.app/api`
    const UseAxios = axios.create({
      
        // responseType: 'json',
    });

    nuxtApp.vueApp.provide('UseAxios', UseAxios);
    nuxtApp.provide('UseAxios', UseAxios);
})