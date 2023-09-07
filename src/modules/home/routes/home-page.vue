<template>
  <div class="container flex font-changa">
    <div class="title-form-img w-9/12 flex mt-12">
      <div class="title-and-form flex-1 pr-10 w-4/12">
        <h2 class="text-gray-700 font-bold text-base mt-8 text-right title-1">
          عروض و صفقات بأسعار
        </h2>
        <h1 class="text-indigo-600 text-[58px] font-bold text-right mt-[-5px] title-2">
          لا تقبل المنافسة
        </h1>
        <p class="paragraph text-black-700 text-lg text-right ml-2">
          استعد لتجربة مذهلة في عالم حجوزات الفنادق! اكتشف منصتنا الرائعة التي تقدم لك أفضل الأسعار
          على غرف الفنادق. استمتع بالإقامة اللاّ تُنسى بأسعار لا تُقاوم. اختر الفندق المثالي بأفضل
          سعر بنقرة واحدة. اكتشف المستوى الجديد من الراحة والاقتصاد في حجز الفنادق
        </p>
        <form @submit.prevent="submitForm" class="search-form" id="search*form">
          <router-link
            :to="{ path: '/home/search', query: queryParams }"
            class="submit-button flex flex-col"
          >
            <div
              class="border-radius-200 rounded-2xl w-[40px] h-[40px] flex bg-indigo-600 p-2 mt-2"
            >
              <i class="bi bi-search text-white flex ml-1 mt-1"></i>
            </div>
          </router-link>
          <div class="search-input">
            الضيوف
            <input v-model="guests" placeholder="عدد النزلاء" class="the-input" type="text" />
          </div>

          <div class="search-input">
            المغادرة
            <input v-model="checkout" placeholder="أضف تاريخ" class="the-input" type="text" />
          </div>

          <div class="search-input">
            الوصول
            <input v-model="checkin" placeholder="أضف تاريخ" class="the-input" type="text" />
          </div>

          <div class="search-input">
            الفندق
            <input v-model="hotel" placeholder="إسم الفندق" class="the-input" type="text" />
          </div>
        </form>
      </div>
      <div class="w-5/12 text-center ml-3 mr-3">
        <img src="../../../assets/hotel.jpg" alt=" image" class="header-image" />
      </div>
    </div>
  </div>

  <div class="info-container w-8/12 mt-9 bg-gray-100 rounded-3xl ml-[115px] font-changa">
    <div class="info text-right flex flex-wrap py-4 pr-12 items-end pb-3">
      <div class="info-item w-4/12 flex items-center justify-end py-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">جودة عالية</h3>
          <span class="info-item-sub-title text-sm"> نوفر الفنادق الأعلى تقييماً </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-yellow-500 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-star-fill text-white"></i>
        </div>
      </div>

      <div class="info-item w-4/12 flex items-center justify-end py-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">خيارات متعددة</h3>
          <span class="info-item-sub-title text-sm"> ابحث عن فندقك المثالي </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-blue-800 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-card-checklist text-white"></i>
        </div>
      </div>

      <div class="info-item w-4/12 flex items-center justify-end py-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">أفضل الأسعار</h3>
          <span class="info-item-sub-title text-sm"> أسعارنا لا تقبل المنافسة </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-green-500 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-tag-fill text-white"></i>
        </div>
      </div>

      <div class="info-item w-4/12 flex items-center justify-end pt-10 pb-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">موقع مركزي</h3>
          <span class="info-item-sub-title text-sm"> فنادق بمواقع إستراتيجية </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-blue-400 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-geo-alt-fill text-white"></i>
        </div>
      </div>

      <div class="info-item w-4/12 flex items-center justify-end pt-10 pb-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">الدعم التقني</h3>
          <span class="info-item-sub-title text-sm"> مساعدة في أي وقت 24/7 </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-orange-500 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-headset text-white"></i>
        </div>
      </div>

      <div class="info-item w-4/12 flex items-center justify-end pt-10 pb-2">
        <div class="info-title text-base mr-2">
          <h3 class="info-item-title text-base font-bold">حجز سهل وسريع</h3>
          <span class="info-item-sub-title text-sm"> احجز بكل سهولة. تأكيد فوري </span>
        </div>
        <div
          class="info-item-icon rounded-2xl bg-red-600 inline-flex justify-center items-center w-12 h-12"
        >
          <i class="bi bi-clock-fill text-white"></i>
        </div>
      </div>
    </div>
    <div class="mb-10 w-9/12">
      <!--       empty space 
   -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const hotel = ref('');
const checkin = ref('');
const checkout = ref('');
const guests = ref('');

// Define queryParams as a ref or reactive object
const queryParams = ref({
  hotel: '',
  checkin: '',
  checkout: '',
  guests: '',
});

const submitForm = () => {
  // Update the queryParams object
  queryParams.value.hotel = hotel.value;
  queryParams.value.checkin = checkin.value;
  queryParams.value.checkout = checkout.value;
  queryParams.value.guests = guests.value;

  // Navigate to the search page with the query parameters
  router.push({ path: '/home/search', query: queryParams.value });
};
</script>

<style scoped>
.container {
  position: relative;
}
.title-and-form {
  @apply z-10 mt-12;
}

.header-image {
  @apply h-auto object-cover rounded-3xl mt-8 mr-3 z-0 mt-16;
}

.search-form {
  @apply mt-14 flex ml-32 border-2 border-gray-50  rounded-3xl shadow-lg space-y-1 p-2  w-[700px] z-10 bg-white mr-10;
}
.search-input {
  @apply text-right flex-col;
  transform: translate(60px, -5px);
}

.search-input:not(:first-child, :nth-child(2))::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  bottom: 0;
  width: 1px;
  background-color: #e7e0e0;
}

.the-input {
  @apply bg-transparent block w-32 mr-3 text-right flex flex-col;
  transform: translate(25px, 0px);
}
</style>
