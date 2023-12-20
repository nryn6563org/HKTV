<template>
  <div class="accordion">
    <AccordionItem v-for="(item, index) in items" :key="index" :item="item" @toggle="toggleAccordion" >
      <!-- 내용을 슬롯으로 전달 -->
      {{ item.content }}
    </AccordionItem>
  </div>
</template>

<script>
import AccordionItem from '~/components/AccordionItem';

export default {
  components: {
    AccordionItem,
  },
  data() {
    return {
      items: [
        { title: 'Accordion 1', content: 'Content 1', isOpen: false },
        { title: 'Accordion 2', content: 'Content 2', isOpen: false },
        // Add more accordion items as needed
      ],
    };
  },
  methods: {
    toggleAccordion(clickedItem) {
      this.items.forEach((item) => {
        item.isOpen = item === clickedItem ? !item.isOpen : false;
      });
    },
  },
};
</script>

<style>
.accodion > div{
  @apply overflow-hidden
}
</style>
