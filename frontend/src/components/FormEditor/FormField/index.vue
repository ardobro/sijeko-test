<template>
  <section class="d-flex flex-wrap">
    <div class="field-settings flex-grow-1 mr-3">
      <b-form-group>
        <label>Подпись</label>
        <b-input
          v-model="fieldProps.label"
          placeholder="Введите подпись для поля"
          type="text"
        />
      </b-form-group>
      <b-form-group class="d-flex justify-content-center">
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
      <div v-if="fieldProps.type === 'float'" class="field-settings__float-settings">
        <b-form-group>
          <label>Минимум</label>
          <b-form-input v-model="fieldProps.floatSettings.min" type="number" />
        </b-form-group>
        <b-form-group>
          <label>Максимум</label>
          <b-form-input v-model="fieldProps.floatSettings.max" type="number" />
        </b-form-group>
        <b-form-group>
          <label>Шаг</label>
          <b-form-input v-model="fieldProps.floatSettings.step" type="number" />
        </b-form-group>
      </div>
      <b-form-group v-if="fieldProps.type === 'checkbox-group'">
        <b-form-checkbox
          v-for="(option) in fieldProps.checkboxGroupSettings.options"
          v-model="fieldProps.checkboxGroupSettings.selected"
          :key="option.value"
          :value="option.value"
          class="mb-1"
        >
          <div class="d-flex">
            <b-form-input v-model="option.text" size="sm" class="mr-1" />
            <b-button
              variant="outline-danger"
              size="sm"
              class="p-1"
              @click="removeCheckboxItem(option)"
            >
              <b-icon icon="dash-square" variant="outline-danger"></b-icon>
            </b-button>
          </div>
        </b-form-checkbox>
        <b-button
          variant="outline-primary"
          size="sm"
          class="p-1"
          @click="addCheckboxItem()"
        >
          <b-icon icon="plus-square" variant="outline-primary"></b-icon>
        </b-button>
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'radio'">
        <b-form-radio
          v-for="(option) in fieldProps.radioSettings.options"
          v-model="fieldProps.radioSettings.selected"
          :key="option.value"
          :value="option.value"
          class="mb-1"
        >
          <div class="d-flex">
            <b-form-input v-model="option.text" size="sm" class="mr-1" />
            <b-button
              variant="outline-danger"
              size="sm"
              class="p-1"
              @click="removeRadioItem(option)"
            >
              <b-icon icon="dash-square" variant="outline-danger"></b-icon>
            </b-button>
          </div>
        </b-form-radio>
        <b-button
          variant="outline-primary"
          size="sm"
          class="p-1"
          @click="addRadioItem()"
        >
          <b-icon icon="plus-square" variant="outline-primary"></b-icon>
        </b-button>
      </b-form-group>
    </div>
    <div class="field-preview flex-grow-0">
      <b-form-group v-if="fieldProps.type === 'text'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-textarea placeholder="Введите текст"></b-form-textarea>
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'string'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-input type="text" />
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'integer'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-input type="number" />
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'float'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-input
          :min="fieldProps.floatSettings.min"
          :max="fieldProps.floatSettings.max"
          :step="fieldProps.floatSettings.step"
          class="w-100"
          type="number"
        />
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'checkbox'">
        <b-form-checkbox >
          {{ fieldProps.label || 'Подпись' }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'checkbox-group'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-checkbox-group
          v-model="fieldProps.checkboxGroupSettings.selected"
          :options="fieldProps.checkboxGroupSettings.options"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group v-if="fieldProps.type === 'radio'">
        <label>{{ fieldProps.label || 'Подпись' }}</label>
        <b-form-radio-group
          v-model="fieldProps.radioSettings.selected"
          :options="fieldProps.radioSettings.options"
          stacked
        ></b-form-radio-group>
      </b-form-group>
    </div>
  </section>
</template>

<script>
import uuid from 'uuid';
import fieldTypes from './data/fieldTypes.ts';
import defaultField from '../data/defaultField.js';

export default {
  name: 'FormField',
  props: {
    field: {
      type: Object,
      default() {
        return defaultField;
      },
    },
  },
  data() {
    return {
      fieldProps: this.field,
      fieldTypes,
    };
  },
  methods: {
    isActiveButton(key) {
      return key === this.fieldProps.type ? 'primary' : 'outline-primary';
    },
    onTypeButtonClick(type) {
      this.fieldProps.type = type;
    },
    removeCheckboxItem(option) {
      const index = this.fieldProps.checkboxGroupSettings.options.indexOf(option);
      this.fieldProps.checkboxGroupSettings.options.splice(index, 1);
    },
    addCheckboxItem() {
      this.fieldProps.checkboxGroupSettings.options.push({ value: uuid(), text: '' });
    },
    removeRadioItem(option) {
      const index = this.fieldProps.radioSettings.options.indexOf(option);
      this.fieldProps.radioSettings.options.splice(index, 1);
    },
    addRadioItem() {
      this.fieldProps.radioSettings.options.push({ value: uuid(), text: '' });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 10px;
}
.field-settings {
  max-width: 637px;

  &__float-settings {
    display: flex;

    & > :not(:last-child) {
      margin-right: 20px;
    }
  }
}
.field-preview {
  min-width: 318px;
}
.items-list {
  margin-bottom: 3px;
}
.mr-3px {
  margin-right: 3px;
}
</style>
