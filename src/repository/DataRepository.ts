import axios from 'axios'
import Vue from 'vue';
import { AppURL } from '../service/AppURL';

export class DataRepository {

    async getProcess(self: Vue) {
        const { url: baseURL } = await AppURL.createInstance(self.$axios).getAppURL();
      
        
        console.log("Bike cities: ", self.$axios.get(baseURL || ''));
        
    }
}
