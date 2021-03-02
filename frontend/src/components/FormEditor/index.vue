<template>
  <div class="container">
    <h1>Контрольные карты (чеклисты)</h1>
    <form>
      <div class="row">
        <div class="col-8">
          <h2>Настройка контрольной карты</h2>
        </div>
        <div class="col-4">
          <h2>Внешний вид</h2>
        </div>
      </div>
      <section v-for="key in 3" :key="key" class="row mb-3">
        <div class="col-8">
          <b-form-group>
            <label>Подпись</label>
            <b-input type="text" value="Название варианта такое-то" />
          </b-form-group>
          <b-button-group>
            <b-button variant="outline-primary" size="sm">Текст</b-button>
            <b-button variant="outline-primary" size="sm">Строка</b-button>
            <b-button variant="primary" size="sm">Целое</b-button>
            <b-button variant="outline-primary" size="sm">Вещественное</b-button>
            <b-button variant="outline-primary" size="sm">Флажок</b-button>
            <b-button variant="outline-primary" size="sm">Галочки</b-button>
            <b-button variant="outline-primary" size="sm">Радиокнопки</b-button>
          </b-button-group>
        </div>
        <div class="col-4">
          <b-form-group>
            <label>Название варианта такое-то</label>
            <b-input type="text" />
          </b-form-group>
        </div>
      </section>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormEditor',
};
</script>
