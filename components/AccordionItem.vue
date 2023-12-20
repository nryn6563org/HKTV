<template>
  <div>
    <div class="accordion-item" @click="toggleAccordion">
      {{ item.title }}
    </div>
    <Transition
      name="ac-items"
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOutUp"
    >
      <div v-if="item.isOpen" class="accordion-content animate__animated animate__faster">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleAccordion() {
      this.$emit("toggle", this.item);
    },
  },
};
</script>

<style>
.accordion-item{
  @apply w-full p-1 bg-white relative z-20
}
.accordion-content{
  @apply bg-gray-200 relative z-10 h-10
}

.slide-down {
  animation: slide-down 0.5s linear ;
  overflow: hidden;
}

.slide-up {
  animation: slide-up 0.5s linear ;
  overflow: hidden;
}

@keyframes slide-down {
  0% {
    visibility: hidden;
    height: 0;
  }
  70% {
    visibility: visible;
    height:70px;
  }
  /* Set height to 'auto' after animation for spacing showing form-invalid feedback message */
  100% {
    visibility: visible;
    height: auto;
  }
}

@keyframes slide-up {
  from {
    visibility: visible;
    height: 70px;
  }

  to {
    visibility: hidden;
    height: 0;
  }
}
</style>
