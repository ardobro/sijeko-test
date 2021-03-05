<template>
  <div class="page-container">
    <h1>Контрольные карты (чеклисты)</h1>
    <div class="d-none d-lg-flex">
      <h2 class="flex-grow-1 mr-3" :style="{'max-width': '637px'}">
        Настройки контрольной карты
      </h2>
      <h2>Внешний вид</h2>
    </div>
    <form-field v-for="field in fields" :key="field.id" :field="field" />
    <b-button
      variant="outline-primary"
      size="sm"
      class="p-1"
      @click="addFieldItem()"
    >
      <b-icon icon="plus-square" variant="outline-primary"></b-icon>
    </b-button>
  </div>
</template>

<script>
import uuid from 'uuid';
import FormField from '@/components/FormEditor/FormField/index.vue';
import defaultField from './data/defaultField.js';

export default {
  name: 'FormEditor',
  components: { FormField },
  data() {
    return {
      fields: [defaultField],
    };
  },
  methods: {
    addFieldItem() {
      this.fields.push({ ...defaultField, id: uuid() });
    },
  },
};
</script>

<style scoped>
.page-container {
  padding: 20px;
}
</style>
