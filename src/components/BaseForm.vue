<template>
  <div>
    <p>Message component</p>
    <div>
      <form class="buguer-form" @submit.prevent="sendBurguerData()">

        <div class="container-forms">
          <label for="name">Write your name:</label>
          <input type="text" name="name" v-model="name" placeholder="Ex: Naruto...">
        </div>

        <div class="container-forms">
          <label for="bread">Choose your bread:</label>
            <select name="bread">
              <option>Select your bread</option>
              <option v-for="bread in getBreads" :key="bread.id" value="bread.tipo">
                {{ bread.tipo }}
              </option>
            </select>
        </div>

        <div class="container-forms">
          <label for="steak">Choose your steak:</label>
            <select name="steak">
              <option value="">Select your steak</option>
              <option v-for="steak in getSteaks" :key="steak.id" value="steak.tipo">
                {{ steak.tipo }}
              </option>
            </select>
        </div>

        <div class="container-forms container-optionals">
          <label class="opcionais" for="optionals">Choose your optinal ingredients:</label>
          <div class="container-checkbox" v-for="option in getOptions" :key="option.id">
            <input class="checkbox__input" type="checkbox" name="sendOptions" v-model="sendOptions" :value="option.tipo">
            <span class="checkbox__span">{{ option.tipo }}</span>
          </div>  
        </div>

        <div class="container-forms">
          <input class="btn__submit" type="submit" name="btn-submit" value="Create burguer">
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseForm',
    data() {
      return {
        name: '',
        getBreads: null,
        getSteaks: null,
        getOptions: null,
        sendBread: null,
        sendSteak: null,
        sendOptions: [],
        status: 'Solicitado',
        msg: null,
      }
    },
    methods: {
      async getBurguerIngredients() {
        const request = await fetch("//localhost:3000/ingredientes");
        const response = await request.json()
       
        this.getBreads = response.paes;
        this.getSteaks = response.carnes;
        this.getOptions = response.opcionais;

      },
      async sendBurguerData(){
        console.log('Criou o burguer');
      },
    },
    mounted() {
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
    margin-bottom: 1rem;
  }
  label {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-left: 4px solid #FCBA03;
    font-weight: 600;
    color: #222;
  }
  input, select {
    padding: 0.5rem 0.75rem;
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
    margin-bottom: 1rem;
  }
  .checkbox__span,
  .checkbox__input {
    width: auto;
  }
  .checkbox__span{
    margin-left: 0.5rem;
    font-weight: 600;
  }
  .btn__submit {
    margin: 0 auto;
    padding: 0.75rem;
    background-color: #222;
    border: 2px solid #222;
    color:#FCBA03;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: .5s;
  }
  .btn__submit:hover {
    background-color: transparent;
    color: #222;
  }
</style>