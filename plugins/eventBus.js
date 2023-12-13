import Vue from 'vue'

export default (context, inject) => {
  const EventBus = new Vue()
  inject('eventBus', EventBus)
}
