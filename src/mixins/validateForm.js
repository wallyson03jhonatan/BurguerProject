import { defineRule } from 'vee-validate';

const formMixin = {
defineRule('required', value => {
  if (!value || !value.length) {
    return 'This field is required';
  }
  return true;
});

defineRule('name', value => {
  if (!value || !value.length) {
    return true;
  }
  // Check if valid name
  if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value)) {
    return 'This field must be a valid name';
  }
  return true;
});
}
export default formMixin;