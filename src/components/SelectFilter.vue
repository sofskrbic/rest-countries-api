<template>
  <div class="custom-select" :tabindex="tabIndex" @blur="open = false" @keydown="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{selected}}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, index) in options" :key="index"
        @click="makeSelection(option)">{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectFilter',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabIndex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  methods: {
    filterSelected(){
      this.$store.commit('makeRegionSelection', {
        region: this.selected
      })
    },
    makeSelection(option) {
      this.selected = option
      this.open = false
      this.filterSelected()
      this.$emit('filterActive')
    }
  }
}
</script>

<style scoped>
  .custom-select {
    position: relative;
    width: 60%;
    color: var(--clr-text);
    background-color: var(--clr-elements);
    margin-top: 2rem;
    margin-inline: 1.5rem;
    padding: .8rem 1.5rem;
    box-shadow: 0 1px 3px var(--clr-box-shadow);
    border-radius: 10px;
    text-align: left;
    outline: none;
    line-height: 1.5rem;
  }

.custom-select .selected {
  background-color: var(--clr-elements);
  color: var(--clr-lm-text);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-weight: var(--fw-semi-bold);
  font-size: 0.875rem;
}

/* .custom-select .selected.open {
  border: 1px solid var(--clr-lm-input);
} */

.custom-select .selected::after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--clr-input) transparent transparent transparent;
}

.custom-select .items {
  color: var(--clr-text);
  border-radius: 6px;
  overflow: hidden;
  /* border-right: 1px solid var(--clr-lm-input);
  border-left: 1px solid var(--clr-lm-input);
  border-bottom: 1px solid var(--clr-lm-input); */
  position: absolute;
  background-color: var(--clr-elements);
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: var(--clr-text);
  line-height: 2rem;
  padding-left: 2em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--clr-input-hover);
}

.selectHide {
  display: none;
}
</style>