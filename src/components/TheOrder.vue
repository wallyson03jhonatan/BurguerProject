<template>
  <div>

    <div v-if="orders && orders.length" class="container-order">
      <base-message v-show="alert.type" :msgType="alert.type" @close="alert = {}">
        <span v-html="alert.message"></span>
      </base-message>

      <div class="container-bar">
        <base-search @callback="searchValue"/>
      </div>

      <div class="container-grid grid-template-columns">  
        <div v-for="(order, index) in filteredOrders" :key="index" class="card padding-medium margin-medium">

          <div class="card__header bottom-border-gray bottom-padding-x-small text-small">
            <span>
              ID: 
              <strong>{{ order.id }}</strong>
            </span>

            <span>
              Status:
              <strong>{{ order.status }}</strong>
            </span>
          </div>

          <div class="card__content card__content--split text-small top-padding-small">

            <div class="item item-1">
              <div class="card__title">
                <i class="fa-regular fa-user icon__color right-padding-small"></i>
                <span>Name:</span>
              </div>
              <span class="text-bold" v-text="limitText(order.name, 16)"></span>
            </div>

            <div class="item item-2">
              <div class="card__title">
                <i class="fa-regular fa-calendar icon__color right-padding-small"></i>
                <span>Date:</span>
              </div>
              <span class="text-bold">{{ order.date }}</span>
            </div>

            <div class="item item-3">
              <div class="card__title">
                <i class="fa-solid fa-bread-slice icon__color right-padding-small"></i>
                <span>Bread:</span>
              </div>
              <span class="text-bold">{{ order.bread }}</span>
            </div>

            <div class="item item-4">
              <div class="card__title">
                <i class="fa-solid fa-drumstick-bite icon__color right-padding-small"></i>
                <span>Steak:</span>
              </div>
              <span class="text-bold">{{ order.steak }}</span>
            </div>

            <div class="item item-5">
              <div class="card__title">
                <i class="fa-solid fa-bacon icon__color right-padding-small"></i>
                <span>Optionals:</span>
              </div>

              <template v-if="order.optionals.length != []">
                <span v-for="option, idx in order.optionals" :key="idx" class="text-bold options">
                  • {{ option }}
                </span>
              </template>
              <template v-else>
                <span class="text-bold"> • None</span>
              </template>
            </div>

            <div class="item item-6 container-btn top-padding-x-small" v-if="order.status == 'Requested'">
              <button 
                class="padding-small btn btn__confirm" 
                title="Confirm Order" 
                @click.prevent="handleStatus(order.id, 'Completed')"
              >
                Confirm receipt
              </button>
              <button 
                class="padding-small btn btn__cancel" 
                title="Cancel Order" 
                @click.prevent="handleStatus(order.id, 'Canceled')"
              >
                Cancel Order
              </button>
            </div>
          </div>

        </div>
      </div>  
    </div>

    <div v-else class="container-notOrder">
      <div class="notOrder">
        <img src="@/assets/img/notOrder.png" alt="Not found order" class="notOrder__img">
        <span class="teste">
          No orders found.
          <RouterLink 
            to="/home" 
            class="notOrder__link text-dark text-decoration-none text-bold" 
            title="Make your burguer"
          > 
            Make your burguer here!
          </RouterLink>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import store from '@/store/index.js'
import BaseMessage from '@/common/BaseMessage.vue';
import BaseSearch from '@/common/BaseSearch.vue';

export default {
  name: 'BaseOrder',
  components: {
    BaseMessage,
    BaseSearch,
  },
  data() {
    return {
      search: null,
      orders: null,
      alert: {},
    }
  },
  computed: {
    filteredOrders() {
      if (!this.search || this.search == null) return this.orders;
        
      return this.orders.filter( order => {
        return order.name.match(this.search) || order.id.toString().match(this.search);
      });
    },
  },
  methods: {
    searchValue(info) {
      this.search = info;
    },
    limitText(string, maxLength) {
      if (string.length > maxLength) return string.substring(0, maxLength) + '...';
      
      return string;
    },
    handleStatus(id, status) {
      const orderFiltred = this.orders.find(order => order.id == id);
      
      if (orderFiltred) orderFiltred.status = status;
      
      store.dispatch('hadleStatus', orderFiltred).then(() => {
        this.alert = {
          type: 'success',
          message: `Order status changed to ${status.toLowerCase()}!`
        };
      });
    }  
  },
  created() {
    store.dispatch('getBurguers').then(() => {
      this.orders = store.state.burguers;
    });
  },
}
</script>

<style scoped>

.container-order {
  min-height: 100dvh;
}

.container-bar {
  max-width: 25rem;
  margin: 0 auto;
  padding: 1rem;
}

.container-grid {
  display: grid;
  max-width: 75rem;
  margin: 0 auto;
}

.grid-template-columns {
  grid-template-columns: repeat(3, 1fr);
}

.card {
  max-width: 22.5rem;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card__header {
  display: flex;
  justify-content: space-between;
}

.card__content {
  display: grid;
  width: 100%;
}

.card__content--split {
  grid-gap: .5rem 0;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: "item-1 item-2"
                       "item-3 item-4"
                       "item-5 item-5"
                       "item-6 item-6";
}

.item {
  height: 3.45rem;
}

.item-1 {
  grid-area: item-1;
}

.item-2 {
  grid-area: item-2;
}

.item-3 {
  grid-area: item-3;
}

.item-4 {
  grid-area: item-4;
}

.item-5 {
  grid-area: item-5;
}

.item-6 {
  grid-area: item-6;
}

.options {
  display: flex;
  flex-flow: column wrap;
}

.card__title {
  display: flex;
  align-items: center;
}

.icon__color {
  color: #FCBA03;
}

.container-btn {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.btn {
  cursor: pointer;
  border-radius: .25rem;
}

.btn__confirm {
  background-color: #ffffff;
  border: 1px solid #0b6520;
  color: #0b6520;
  -webkit-transition: all 0.2;
  transition: all 0.2;
  letter-spacing: 1px;
}

.btn__confirm:hover {
  -webkit-filter: brightness(1);
  filter: brightness(1);
  background: #D9F2DF;
}

.btn__cancel {
  background-color: #ffffff;
  border: 1px solid #d12c38;
  color: #d12c38;
  -webkit-transition: all 0.2;
  transition: all 0.2;
  letter-spacing: 1px;
}

.btn__cancel:hover {
  -webkit-filter: brightness(1);
  filter: brightness(1);
  background: #f5c6cb;
}

.container-notOrder {
  margin: 0 auto;
  height: 75vh;
}

.notOrder {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.notOrder__img {
  max-width: 30rem;
}

.notOrder__link {
  transition: .3s;
}

.notOrder__link:hover {
  background-color: hsla(53, 45%, 30%, 0.29);
}
@media screen and (max-width: 767px) {
  .container-bar {
    max-width: 25rem;
    margin: 0 1rem;
    padding: 1rem;
  }

  .grid-template-columns {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 425px) {
  .notOrder__img {
    width: 100%;
  } 
}

</style>