<template lang="pug">
.containerSideBarLeft
  .sidebar
    .sidebar-backdrop(@click="closeSidebarPanel", v-if="isPanelOpen")
    transition(name="slide")
      .sidebar-panel(v-if="isPanelOpen")
        slot 
</template>

<script>
import { store, mutations } from "@/store.js";
export default {
  name: "SideBarLeft",
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
  methods: {
    closeSidebarPanel() {
      mutations.toggleNav;
    },
  },
};
</script>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: rgba(0,0,0, 1);
  /* background: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6); */
  position: fixed;
  left: 0;
  top: 0;
  height: 89vh;
  margin-top: 6.5vh;
  /* margin-left: 4vw; */
  z-index: 999;
  padding: 6rem 20px 2rem 20px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
}
.containerSideBarLeft{
  display: flex;
  justify-content: center;
}
</style>