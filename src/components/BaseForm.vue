<template>
  <div>

    <base-message 
      v-show="alert.type"
      :msgType="alert.type" 
      @close="alert = {}"
    >
      <span v-html="alert.message"></span>
    </base-message>

    <div>
      <Form class="buguer-form" @submit="sendBurguerData">

        <!-- Name -->
        <div class="container-forms bottom-margin-medium">
          <label for="name" class="bottom-margin-small padding-small">Write your name:</label>
          <Field 
            type="text" 
            name="name" 
            placeholder="Ex: Naruto..." 
            rules="required|min: 3|max: 80" 
            v-model="name"   
          />
          <ErrorMessage name="name">Name is not valid</ErrorMessage>
        </div>

        <!-- Bread -->
        <div class="container-forms bottom-margin-medium">
          <label for="bread" class="bottom-margin-small padding-small">Choose your bread:</label>
          <Field 
            name="bread" 
            as="select" 
            rules="required"
            v-model="sendBread"
            v-slot="{ value }"
          >
            <option value="">Select your bread</option>
            <option 
              v-for="bread in getBreads" 
              :key="bread.id" 
              :value="bread.type" 
              :selected="value && value.includes(bread.type)"
            >
              {{ bread.type }}
            </option>
          </Field>
          <ErrorMessage name="bread">Bread is not valid</ErrorMessage>
        </div>

        <!-- Steak -->
        <div class="container-forms bottom-margin-medium">
          <label for="steak" class="bottom-margin-small padding-small">Choose your steak:</label>
          <Field 
            name="steak" 
            as="select" 
            rules="required"
            v-model="sendSteak"
            v-slot="{ value }"
          >
            <option value="">Select your steak</option>
            <option 
              v-for="steak in getSteaks" 
              :key="steak.id" 
              :value="steak.type"
              :selected="value && value.includes(steak.type)"
            >
              {{ steak.type }}
            </option>
          </Field>
          <ErrorMessage name="steak">Steak is not valid</ErrorMessage>
        </div>

        <!-- Options -->
        <div class="container-forms container-optionals bottom-margin-medium">
          <label class="opcionais bottom-margin-small padding-small">Choose your optinal ingredients:</label>
          <div 
            v-for="option in getOptions" 
            :key="option.id"
            class="container-checkbox bottom-margin-medium" 
          >
            <input 
              class="checkbox__input" 
              type="checkbox" 
              name="optionals" 
              id="optionals" 
              :value="option.type"
              v-model="sendOptions"
            >
            
            <span class="checkbox__span left-margin-small">{{ option.type }}</span>
            
          </div>  
        </div>

        <div class="container-forms">
          <button 
            class="btn__submit text-medium" 
            name="btn-submit" 
            type="submit"
            title="Confirm order"
          >
            Create burguer
          </button>
        </div>

      </Form>
    </div>
  </div>
</template>

<script>
  import BaseMessage from '@/components/BaseMessage.vue';
  import { Form, Field, ErrorMessage } from 'vee-validate';

    export default {
    name: 'BaseForm',
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

        sendOptions: [],
        sendBread: null, 
        sendSteak: null,
      }
    },
    methods: {
      async getBurguerIngredients() {
        try {
          const request = await fetch("//localhost:3000/ingredients");
          const response = await request.json()
        
          this.getBreads = response.breads;
          this.getSteaks = response.steaks;
          this.getOptions = response.optionals;

        } catch (error) {
          throw new Error('Something was wrong!');
        }
      },
      async sendBurguerData(values,  { resetForm }){
        const dataForm = {
          name: values.name,
          steak: values.steak,
          bread: values.bread,
          optionals: this.sendOptions,
          status: 'Requested',
        }

        try {
          const request = await fetch("//localhost:3000/burguers", {
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(dataForm),
          });
          const response = await request.json();

          if (response.id) {
            this.alert = { type: 'success', message: `Order Nº ${response.id} made with success`};  
            resetForm();
          } 

        } catch (error) {
          throw new Error('Something was wrong!');
        }
      },
    },
    created() {
      this.getBurguerIngredients(); 
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
  input, select {
    padding: .5rem .75rem;
    width: 100%;
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
    align-items: flex-start;
    width: 50%;
  }
  .checkbox__span,
  .checkbox__input {
    width: auto;
    font-weight: 600;
  }
  .checkbox__input { 
    cursor: pointer;
  } 
  .btn__submit {
    padding: .75rem;
    background-color: #222;
    border: .125rem solid #222;
    color:#FCBA03;
    font-weight: 600;
    cursor: pointer;
    transition: .5s;
  }
  .btn__submit:hover {
    background-color: transparent;
    color: #222;
  }
</style>