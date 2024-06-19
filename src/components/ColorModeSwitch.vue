<script setup lang="ts">
interface Props {
  iconName: string
}

interface Emits {
  (event: 'toggle'): void
}

defineProps<Props>()

defineEmits<Emits>()
</script>

<template>
  <button
    class="inline-flex p-2"
    @click="$emit('toggle')"
  >
    <ColorScheme>
      <Icon
        :name="iconName"
        class="w-5 h-5"
      />
    </ColorScheme>
  </button>
</template>
