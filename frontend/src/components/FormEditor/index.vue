<template>
  <div class="page-container">
    <h1>Контрольные карты (чеклисты)</h1>
    <form-field />
    <form-field />
    <form-field />
    <form-field />
    <form-field />
  </div>
</template>

<script>
import FormField from '@/components/FormEditor/FormField/index.vue';

export default {
  name: 'FormEditor',
  components: { FormField },
};
</script>

<style scoped>
.page-container {
  padding: 20px;
}
</style>
