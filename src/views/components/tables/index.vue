<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from 'radix-vue'

const stages = {
  initial: { opacity: 0, scale: 0, y: -100 }, // Bắt đầu từ bên trái
  enter: { opacity: 1, scale: 1, y: 0 }, // Di chuyển đến vị trí ban đầu
  leave: { opacity: 0, scale: 0.6, y: -100 } // Di chuyển ra ngoài bên phải
}

const transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
  mass: 0.5,
  delay: 0
}

const handle = (val: string) => {
  console.log(val)
}
</script>

<template>
  <NavigationMenuRoot orientation="vertical" v-on:update:model-value="handle">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent">
          <div v-motion :initial="stages.initial" :enter="stages.enter" :leave="stages.leave">
            Item one content
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuList>
            <NavigationMenuItem
              v-motion
              :initial="stages.initial"
              :enter="stages.enter"
              :leave="stages.leave"
              :transition="transition"
            >
              Item 2.1 content
            </NavigationMenuItem>
            <NavigationMenuItem
              v-motion
              :initial="stages.initial"
              :enter="stages.enter"
              :leave="stages.leave"
              :transition="{
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay: 1 * 1000
              }"
            >
              Item 2.2 content
            </NavigationMenuItem>
            <NavigationMenuItem
              v-motion
              :initial="stages.initial"
              :enter="stages.enter"
              :leave="stages.leave"
              :transition="{
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay: 2 * 1000
              }"
            >
              Item 2.3 content
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Item three</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuList>
            <NavigationMenuItem v-motion-slide-visible-left :delay="0">
              Item 3.1 content
            </NavigationMenuItem>
            <NavigationMenuItem v-motion-slide-visible-left :delay="0.1 * 1000">
              Item 3.2 content
            </NavigationMenuItem>
            <NavigationMenuItem v-motion-slide-visible-left :delay="0.2 * 1000">
              Item 3.3 content
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuViewport class="NavigationMenuViewport" />
  </NavigationMenuRoot>
</template>

<style scoped>
/* styles.css */
.NavigationMenuContent {
  /* position: absolute;
  top: 0;
  left: 0; */
  animation-duration: 250ms;
  animation-timing-function: ease;
}
.NavigationMenuContent[data-motion='from-start'] {
  animation-name: enterFromLeft;
}
/* .NavigationMenuContent[data-motion='from-end'] {
  animation-name: enterFromRight;
}
.NavigationMenuContent[data-motion='to-start'] {
  animation-name: exitToLeft;
}
.NavigationMenuContent[data-motion='to-end'] {
  animation-name: exitToRight;
} */

.NavigationMenuViewport {
  /* position: relative;
  width: var(--radix-navigation-menu-viewport-width);
  height: var(--radix-navigation-menu-viewport-height); */
  transition:
    width,
    height,
    250ms ease;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
    scale: 1;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    scale: 2;
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}
</style>
