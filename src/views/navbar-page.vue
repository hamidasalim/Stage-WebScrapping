<template>
    <slot>
        <div id="openNav" class="nav-open" @click="toggleNavbar">
      <i class="bi bi-list text-white text-lg"></i>
    </div>
  
    <div class="navbar-container flex" id="navNav">
      <div class="emptynabar-section w-9/12"></div>
      <div class="navbar-content w-3/12 z-30 h-full">
        <div
          class="navbar-items w-[300px] h-full mt-4 ml-8 absolute border rounded-2xl bg-white shadow-xl p-4"
          id="navbaritems-id"
        >
          <i class="bi bi-x-lg nav-close" id="closeNav"></i>
  
          <h1 class="text-center text-3xl text-black-900 pt-3 font-bold">
            H<i class="bi bi-search text-indigo-500 text-3xl"></i>TELS
          </h1>
          <p class="text-center text-black-500 text-sm pb-9">www.hotels.com</p>
          <hr class="mb-2 custom-hr mx-auto w-4/5 border-gray-300 pb-4" />
  
          <a href="/home" class="navlink flex"
            ><p class="mr-6">الصفحة الرئيسية <i class="bi bi-house-door pl-2"></i></p>
          </a>
          <a href="/" class="navlink flex"
            ><p class="mr-6">اختياراتك المفضلة <i class="bi bi-heart-fill pl-2"></i></p>
          </a>
          <a href="/" class="navlink flex"
            ><p class="mr-6">إعدادات المستخدم <i class="bi bi-gear-fill pl-2"></i></p>
          </a>
        </div>
      </div>
    </div>
    </slot>
</template>

<script setup>
import { onMounted } from 'vue'

//  open the navbar
const openNavbar = () => {
  const nav = document.getElementById('navbaritems-id')
  nav.style.display = 'block'
  nav.classList.add('right-4')
  nav.classList.add('z-999')
}

// close the navbar
const closeNavbar = () => {
  const nav = document.getElementById('navbaritems-id')
  nav.style.display = 'none'
}

onMounted(() => {
  const open = document.getElementById('openNav')
  const close = document.getElementById('closeNav')

  if (open) {
    open.addEventListener('click', openNavbar)
  }

  if (close) {
    close.addEventListener('click', closeNavbar)
  }
})
</script>
<style scoped>

.navbar-items {
  position: fixed;
  top: 0;
  right: 10;
  height: 96%;
  background-color: white; 
  z-index: 999; 
 
}

.navlink {
  @apply block text-right  text-base  mt-6 py-2  border rounded-2xl text-gray-400 hover:bg-indigo-500 hover:text-white;
}
.nav-close {
  display: none;
}
@media (min-width: 768px) {
  .navbar-items {
    display: block !important;
  }
} 

@media (max-width: 768px) {

  .nav-open {
    @apply fixed top-6 right-6 flex items-center justify-center w-[40px] h-[40px] rounded-full bg-indigo-500 cursor-pointer z-10;
  }
  .nav-close {
    cursor: pointer;
    display: block;
  }

  .navbar-items {
    display: none;
  }

  .nav-open.active ~ .navbar-container .navbar-items {
    display: block;
    animation: slide-in 0.7s forwards;
  }
  .nav-close.active ~ .navbar-container .navbar-items {
    display: none;
    animation: slide-in 0.7s backwards;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
