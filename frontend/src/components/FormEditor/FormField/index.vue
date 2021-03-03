<template>
  <section class="d-flex flex-wrap">
    <div class="field-settings">
      <b-form-group>
        <label>Подпись</label>
        <b-input
          v-model="field.label"
          placeholder="Введите подпись для поля"
          type="text"
        />
      </b-form-group>
      <b-form-group>
        <b-button-group>
          <b-button
            v-for="{ key, value } in fieldTypes"
            :key="key"
            :variant="isActiveButton(key)"
            @click="onTypeButtonClick(key)"
          >
            {{ value }}
          </b-button>
        </b-button-group>
      </b-form-group>
      <div v-if="field.type === 'float'" class="field-settings__float-settings">
        <b-form-group>
          <label>Минимум</label>
          <b-form-input v-model="field.floatSettings.min" type="number" />
        </b-form-group>
        <b-form-group>
          <label>Максимум</label>
          <b-form-input v-model="field.floatSettings.max" type="number" />
        </b-form-group>
        <b-form-group>
          <label>Шаг</label>
          <b-form-input v-model="field.floatSettings.step" type="number" />
        </b-form-group>
      </div>
    </div>
    <div class="field-preview">
      <b-from-group v-if="field.type === 'text'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-input type="text" />
      </b-from-group>
      <b-from-group v-if="field.type === 'string'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-input type="text" />
      </b-from-group>
      <b-form-group v-if="field.type === 'integer'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-input type="number" />
      </b-form-group>
      <b-form-group v-if="field.type === 'float'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-input
          :min="field.floatSettings.min"
          :max="field.floatSettings.max"
          :step="field.floatSettings.step"
          class="w-100"
          type="number"
        />
      </b-form-group>
      <b-form-group v-if="field.type === 'checkbox'">
        <b-form-checkbox >
          {{ field.label || 'Подпись' }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group v-if="field.type === 'checkbox-group'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-checkbox-group
          v-model="field.checkboxGroupSettings.selected"
          :options="field.checkboxGroupSettings.options"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group v-if="field.type === 'radio'">
        <label>{{ field.label || 'Подпись' }}</label>
        <b-form-radio-group
          v-model="field.radioSettings.selected"
          :options="field.radioSettings.options"
          stacked
        ></b-form-radio-group>
      </b-form-group>
    </div>
  </section>
</template>

<script>
import fieldTypes from './data/fieldTypes';

export default {
  name: 'FormField',
  data() {
    return {
      field: {
        label: '',
        type: 'text',
        floatSettings: {
          min: 0,
          max: 100,
          step: 0.5,
        },
        checkboxGroupSettings: {
          selected: [],
          options: [
            { text: 'Опция 1', value: 'option1' },
            { text: 'Опция 2', value: 'option2' },
          ],
        },
        radioSettings: {
          selected: 'option1',
          options: [
            { text: 'Опция 1', value: 'option1' },
            { text: 'Опция 2', value: 'option2' },
          ],
        },
      },
      fieldTypes,
    };
  },
  methods: {
    isActiveButton(key) {
      return key === this.field.type ? 'primary' : 'outline-primary';
    },
    onTypeButtonClick(type) {
      this.field.type = type;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 10px;
}
.field-settings {
  min-width: 637px;
  max-width: 637px;
  margin-right: 20px;

  &__float-settings {
    display: flex;

    & > :not(:last-child) {
      margin-right: 20px;
    }
  }
}
.field-preview {
  min-width: 318px;
  max-width: 318px;
}
</style>
