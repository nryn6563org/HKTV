<template>
  <Transition
    name="modal-fade"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
    @before-enter="beforeEnter"
    @before-leave="beforeLeave"
  >
    <div v-if="showModal" class="modal animate__animated" @click="closeModal">
      <div
        class="modal-content animate__animated animate__faster"
        :class="contentClass"
        @click.stop
      >
      <div v-if="hasHeader" class="modal-header">
          <slot name="header"></slot>
        </div>
        <div v-if="hasBody" class="modal-body">
          <slot name="body"></slot>
        </div>
        <div v-if="hasFooter" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
const ANIMATE_SLIDE_IN = 'animate__slideInDown';
const ANIMATE_BOUNCE_OUT = 'animate__bounceOutUp';

export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    hasHeader: {
      type: Boolean,
      default: true,
    },
    hasBody: {
      type: Boolean,
      default: true,
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      contentClass: ANIMATE_SLIDE_IN,
    };
  },
  methods: {
    toggleClass(el, add, remove) {
      const content = el.querySelector('.modal-content');
      content.classList.remove(remove);
      content.classList.add(add);
    },
    beforeEnter(el) {
      this.toggleClass(el, ANIMATE_SLIDE_IN, ANIMATE_BOUNCE_OUT);
    },
    beforeLeave(el) {
      this.toggleClass(el, ANIMATE_BOUNCE_OUT, ANIMATE_SLIDE_IN);
    },
  },
};
</script>