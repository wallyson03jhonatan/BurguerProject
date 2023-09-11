<template>
  <div>
    <base-message 
      v-show="msg && msgType != null"
      :msg="msg" 
      :msgType="msgType" 
    />
    <div>
      <form class="buguer-form" @submit.prevent="sendBurguerData()">

        <div class="container-forms">
          <label for="name">Write your name:</label>
          <input type="text" name="name" v-model="name" placeholder="Ex: Naruto...">
        </div>

        <div class="container-forms">
          <label for="bread">Choose your bread:</label>
            <select name="bread" v-model="sendBread">
              <option>Select your bread</option>
              <option v-for="bread in getBreads" :key="bread.id" :value="bread.type">
                {{ bread.type }}
              </option>
            </select>
        </div>

        <div class="container-forms">
          <label for="steak">Choose your steak:</label>
            <select name="steak" v-model="sendSteak">
              <option value="">Select your steak</option>
              <option v-for="steak in getSteaks" :key="steak.id" :value="steak.type">
                {{ steak.type }}
              </option>
            </select>
        </div>

        <div class="container-forms container-optionals">
          <label class="opcionais" for="optionals">Choose your optinal ingredients:</label>
          <div class="container-checkbox" v-for="option in getOptions" :key="option.id">
            <input class="checkbox__input" type="checkbox" name="sendOptions" v-model="sendOptions" :value="option.type">
            <span class="checkbox__span">{{ option.type }}</span>
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
  import BaseMessage from './BaseMessage.vue';

  export default {
    name: 'BaseForm',
    components: {
      BaseMessage,
    },
    data() {
      return {
        name: '',
        msg: null,
        msgType: null,

        getBreads: null,
        getSteaks: null,
        getOptions: null,

        sendBread: null,
        sendSteak: null,
        sendOptions: [],
      }
    },
    methods: {
      async getBurguerIngredients() {
        const request = await fetch("//localhost:3000/ingredients");
        const response = await request.json()
       
        this.getBreads = response.breads;
        this.getSteaks = response.steaks;
        this.getOptions = response.optionals;

      },
      async sendBurguerData(){
        const data = {
          name: this.name,
          steak: this.sendSteak,
          bread: this.sendBread,
          optionals: Array.from(this.sendOptions),
          status: 'Requested',
        }

        const dataJson = JSON.stringify(data);
        
        const request = await fetch("//localhost:3000/burguers", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: dataJson,
        })

        const response = await request.json();

        if (response.id) {
          this.msg = `Order Nº ${response.id} made with success`;
          this.msgType = 'success';

          setTimeout(async () => {
            this.cleanData();
          }, 3000);
        }  
      },
      cleanData() {
        
        
        const cleanedData = [
          this.name = null,
          this.sendSteak = null,
          this.sendBread = null,
          this.sendOptions = null,
          this.msg = null,
          this.msgType = null,
        ]

        return cleanedData;
      }
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
    margin-bottom: 1rem;
  }
  label {
    margin-bottom: .5rem;
    padding: .5rem;
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
    margin-bottom: 1rem;
  }
  .checkbox__span,
  .checkbox__input {
    width: auto;
  }
  .checkbox__span{
    margin-left: .5rem;
    font-weight: 600;
  }
  .btn__submit {
    margin: 0 auto;
    padding: .75rem;
    background-color: #222;
    border: .125rem solid #222;
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