<template>
  <p>Hello there</p>
</template>

<script lang="ts">
import Vue from 'vue'
import { DataRepository } from '~/src/repository/DataRepository';

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    new DataRepository().getProcess(this);
  },
})
</script>
