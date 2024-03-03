import axios from 'axios'
import Vue from 'vue';
import { AppURL } from '../service/AppURL';
import { useDataStore } from '~/store/data';

export class DataRepository {

    async getProcess(self: Vue) {    
        const dataStore = useDataStore();
        
        console.log("Bike cities: ", self.$axios.get(dataStore.baseURL || ''));
        
    }
}
