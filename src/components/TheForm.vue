<template>
  <div>
    <base-message v-show="alert.type" :msgType="alert.type" @close="alert = {}">
      <span v-html="alert.message"></span>
    </base-message>


    <Form class="buguer-form" @submit="sendBurguerData" v-slot="{ errors, meta }">

      <!-- Name -->
      <div class="container-forms bottom-margin-medium">
        <label for="name" class="bottom-margin-small padding-small">Write your name:</label>
        <Field type="text" name="name" placeholder="Ex: Naruto..." rules="required|min: 3|max: 32" v-model="name"
          :class="[
            errors.name ? 'border-error' : '',
            meta.valid ? 'border-success' : '',
          ]" />

        <ErrorMessage name="name" as="div">
          <span class="text-error text-small text-bold">Name is not valid</span>
        </ErrorMessage>
      </div>

      <!-- Bread -->
      <div class="container-forms bottom-margin-medium">
        <label for="bread" class="bottom-margin-small padding-small">Choose your bread:</label>
        <Field name="bread" as="select" rules="required" v-model="sendBread" v-slot="{ value }" :class="[
          errors.bread ? 'border-error' : '',
          meta.valid ? 'border-success' : '',
        ]">
          <option value="">Select your bread</option>
          <option v-for="bread in getBreads" :key="bread.id" :value="bread.type"
            :selected="value && value.includes(bread.type)">
            {{ bread.type }}
          </option>
        </Field>

        <ErrorMessage name="bread" as="div">
          <span class="text-error text-small text-bold">Bread is not valid</span>
        </ErrorMessage>
      </div>

      <!-- Steak -->
      <div class="container-forms bottom-margin-medium">
        <label for="steak" class="bottom-margin-small padding-small">Choose your steak:</label>
        <Field name="steak" as="select" rules="required" v-model="sendSteak" v-slot="{ value }" :class="[
          errors.steak ? 'border-error' : '',
          meta.valid ? 'border-success' : '',
        ]">
          <option value="">Select your steak</option>
          <option v-for="steak in getSteaks" :key="steak.id" :value="steak.type"
            :selected="value && value.includes(steak.type)">
            {{ steak.type }}
          </option>
        </Field>

        <ErrorMessage name="steak" as="div">
          <span class="text-error text-small text-bold">Steak is not valid</span>
        </ErrorMessage>
      </div>

      <!-- Options -->
      <div class="container-forms container-optionals bottom-margin-medium">
        <label class="opcionais bottom-margin-small padding-small">Choose your optinal ingredients:</label>
        <div v-for="option in getOptions" :key="option.id" class="container-checkbox bottom-margin-medium">
          <Field name="optionals" type="checkbox" v-slot="{ field }" :value="option.type" v-model="sendOptions"
            @change="sendOptions.length < 3 ? errorOptions = false : errorOptions = true">
            <input class="checkbox__input" type="checkbox" name="optionals" id="optionals" v-bind="field"
              :value="option.type">
            <span class="checkbox__span left-margin-small">{{ option.type }}</span>
          </Field>
        </div>
        <span v-if="errorOptions" class="text-error text-small text-bold">Choose only two options</span>
      </div>

      <div class="container-forms">
        <button class="btn__submit text-medium" name="btn-submit" type="submit" title="Confirm" :disabled="errorOptions">
          Create burguer
        </button>
      </div>

    </Form>

  </div>
</template>

<script>
import store from '@/store/index.js'
import BaseMessage from '@/common/BaseMessage.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'TheForm',
  components: {
    BaseMessage,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: '',
      alert: {},

      getBreads: null,
      getSteaks: null,
      getOptions: null,

      sendBread: null,
      sendSteak: null,
      sendOptions: [],

      errorOptions: false,
    }
  },
  methods: {
    async sendBurguerData(values, { resetForm }) {

      const dataForm = {
        name: values.name,
        steak: values.steak,
        bread: values.bread,
        optionals: values.optionals,
        status: 'Requested',
        date: this.formatedDate(),
      }

      store.dispatch('sendBurguers', dataForm).then(() => {
          this.alert = {
            type: 'success',
            message: `Success: Order registred with success!`
          };
          
          resetForm();
      });
    },
    formatedDate() {
      const currentDate = new Date;
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      return `${currentDay}/${currentMonth > 9 ? currentMonth : '0' + currentMonth}/${currentYear}`;
    }
  },
  created() {
    store.dispatch('getIngredients').then(() => {
      this.getBreads = store.state.ingredients.breads;
      this.getSteaks = store.state.ingredients.steaks;
      this.getOptions = store.state.ingredients.optionals;
    });
  },
}
</script>

<style scoped>
.buguer-form {
  max-width: 25rem;
  margin: 0 auto;
}

.container-forms {
  display: flex;
  flex-direction: column;
}

label {
  border-left: .25rem solid #FCBA03;
  font-weight: 600;
  color: #222;
}

input,
select {
  border-radius: .25rem;
  padding: .5rem .75rem;
  width: 100%;
}

select option {
  background: #f9f9f9;
  color: #222;
}

.container-optionals {
  flex-direction: row;
  flex-wrap: wrap;
}

label .opcionais {
  width: 100%;
}

.container-checkbox {
  display: flex;
  align-items: center;
  width: 50%;
}

.checkbox__span,
.checkbox__input {
  width: auto;
}

.checkbox__input {
  cursor: pointer;
  font-weight: 400;

}

.btn__submit {
  padding: .75rem;
  background-color: #222;
  border: .125rem solid #222;
  color: #FCBA03;
  font-weight: 600;
  cursor: pointer;
  transition: .5s;
  border-radius: .25rem;
}

.btn__submit:hover {
  background-color: transparent;
  color: #222;
}
</style>