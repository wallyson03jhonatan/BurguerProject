<template>
    <div v-for="(order, index) in orders" :key="index">
      <div class="card padding-medium margin-medium">

        <div class="card__header bottom-border-gray bottom-padding-x-small">
          <span class="text-small">
            ID:
            <span class="text-bold">{{ order.Id }}</span>
          </span>

          <span class="text-small">
            Status:
            <span class="text-bold">{{ order.Status }}</span>
          </span>
        </div>

        <div class="card__content card__content--split text-small top-padding-small">

          <div class="item-1">
            <div class="card__title">
              <i class="fa-regular fa-user icon__color right-padding-small"></i>
              <span>Name:</span>
            </div>
            <span class="text-bold">{{ order.Name }}</span>
          </div>

          <div class="item-2">
            <div class="card__title">
              <i class="fa-regular fa-calendar icon__color right-padding-small"></i>
              <span>Date:</span>
            </div>
            <span class="text-bold">{{ order.Date }}</span>
          </div>

          <div class="item-3">
            <div class="card__title">
              <i class="fa-solid fa-bread-slice icon__color right-padding-small"></i>
              <span>Bread:</span>
            </div>
            <span class="text-bold">{{ order.Bread }}</span>
          </div>

          <div class="item-4">
            <div class="card__title">
              <i class="fa-solid fa-drumstick-bite icon__color right-padding-small"></i>
              <span>Steak:</span>
            </div>
            <span class="text-bold">{{ order.Steak }}</span>
          </div>

          <div class="item-5">
            <div class="card__title">
              <i class="fa-solid fa-bacon icon__color right-padding-small"></i>
              <span>Optionals:</span>
            </div>

            <template v-if="order.Optionals.length != []">
              <span v-for="option, idx in order.Optionals" :key="idx" class="text-bold options">
                • {{ option }}
              </span>
            </template>
            <template v-else>
              <span class="text-bold"> • None</span>
            </template>
          </div>

          <div class="item-6 container-btn top-padding-x-small">
            <button class="padding-small btn btn__confirm" title="Confirm Order">Confirm receipt</button>
            <button class="padding-small btn btn__cancel" title="Cancel Order">Cancel Order</button>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'BaseOrder',
  data() {
    return {
      orders: null,
    }
  },
  methods: {
    async getBurguers() {
      try {
        const request = await fetch("//localhost:3000/burguers");

        if (!request.ok) throw new Error('Something was wrong!');

        const response = await request.json()
        const orders = this.formatData(response);
        this.orders = orders

      } catch (error) {
        console.error('Something was wrong!');
      }
    },
    formatData(data) {
      return data.map(item => {
        const updatedItem = {};
        Object.keys(item).map(key => {
          updatedItem[key.charAt(0).toUpperCase() + key.slice(1)] = item[key];
        });
        return updatedItem;
      });
    }
  },
  created() {
    this.getBurguers();
  },
}
</script>

<style scoped>
.card {
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

.options {
  display: flex;
  flex-flow: column wrap;
}
</style>