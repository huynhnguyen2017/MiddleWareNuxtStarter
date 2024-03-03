<template>
  <p>Hello there</p>
</template>

<script lang="ts">
import Vue from 'vue'
import { DataRepository } from '~/src/repository/DataRepository';
import { useDataStore } from '~/store/data';

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'AppURL',
  setup() {
    const dataStore = useDataStore();

    return {
      dataStore
    }
  },
  mounted() {
    console.log('baseURL: ', this.dataStore.baseURL);
    
    new DataRepository().getProcess(this);
  },
})
</script>
