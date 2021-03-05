import uuid from 'uuid';

export default {
  id: uuid(),
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
      { text: 'Опция 1', value: uuid() },
      { text: 'Опция 2', value: uuid() },
    ],
  },
  radioSettings: {
    selected: null,
    options: [
      { text: 'Опция 1', value: uuid() },
      { text: 'Опция 2', value: uuid() },
    ],
  },
};
