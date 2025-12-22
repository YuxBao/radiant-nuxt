---
title: "Vue 3 组合式 API 深入理解"
description: "探索 Vue 3 组合式 API 的强大功能和最佳实践"
date: "2024-03-10"
author: "Minimal Blog"
tags: ["Vue", "JavaScript", "Frontend"]
---

Vue 3 引入的组合式 API 为我们提供了一种更灵活的方式来组织和复用组件逻辑。

## 为什么使用组合式 API？

组合式 API 解决了选项式 API 在大型组件中的一些限制：

- **更好的逻辑复用** - 通过组合式函数
- **更灵活的代码组织** - 按功能组织而不是选项
- **更好的类型推导** - TypeScript 支持更完善

## 基础示例

```vue
<script setup>
  import { ref, computed } from "vue";

  const count = ref(0);
  const doubled = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }
</script>

<template>
  <button @click="increment">
    Count: {{ count }} (doubled: {{ doubled }})
  </button>
</template>
```

## 响应式基础

### ref 和 reactive

- `ref` - 用于基本类型和对象
- `reactive` - 仅用于对象

```javascript
const count = ref(0);
const state = reactive({ name: "John" });
```

## 组合式函数

创建可复用的逻辑：

```javascript
// useCounter.js
export function useCounter() {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
}
```

## 生命周期钩子

```javascript
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("Component mounted");
});

onUnmounted(() => {
  console.log("Component unmounted");
});
```

## 最佳实践

1. 使用 `<script setup>` 语法糖
2. 合理使用 `ref` 和 `reactive`
3. 将可复用逻辑提取为组合式函数
4. 保持组件简洁

## 总结

组合式 API 提供了更灵活的代码组织方式，让大型应用的开发变得更加可维护。
