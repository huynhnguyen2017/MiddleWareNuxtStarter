import { NuxtAxiosInstance } from '@nuxtjs/axios';
import axios, { AxiosResponse } from 'axios';

export class AppURL {
    private static instance: AppURL = new AppURL();
    private static axios: NuxtAxiosInstance

    private constructor() {}

    public static createInstance(axios: NuxtAxiosInstance) {
        this.axios = axios
        return AppURL.instance;
    }

    async getAppURL() {
         const { data } = await axios.get('/baseURL');
         return data
    }
}