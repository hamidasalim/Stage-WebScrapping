<template>

    <div class="searchList w-9/12 mt-14">
      <div class="searchList-container w-full">
        <h1 class="title text-3xl text-right p-2 font-bold">فنادق متوفرة</h1>
        <ul class="hotelList flex flex-wrap justify-end text-right mt-4">
          <li
            v-for="hotel in homeStore.hotelList"
            :key="hotel._id"
            class="hotelElementContainer border rounded-2xl bg-white shadow-xl relative h-[522px] items-center m-2 flex flex-col justify-start lg:w-[300px] md:w-4/12 sm:w-6/12"
          >
            <div class="flex justify-center items-start w-full flex-col">
              <div class="hotel-room-img relative block">
                <!-- <img
                  :src="hotel.image" 
                  :alt="hotel.hotelName"
                  class="room-img lg:w-[280px] md:w-[210px] sm:w-[210px] h-[170px] rounded-3xl mt-2 ml-[9px]"
                /> -->
                <img
                  src="../../../assets/hotelRoom.jpg"
                  alt="hotel-room"
                  class="room-img lg:w-[280px] md:w-[210px] sm:w-[210px] h-[170px] rounded-3xl mt-2 ml-[9px]"
                />
                <i
                  class="bi bi-heart text-white text-xl absolute top-3 right-3 m-2 rounded-xl w-10 h-10 bg-gray-600 text-center flex items-center justify-center"
                ></i>
              </div>
  
              <div class="hotel-room-info ml-auto p-2">
                <h2 class="room-name text-base py-1">{{ hotel.hotelName }}</h2>
                <h3 class="room-location pb-1 text-base">
                  {{ hotel.Location }} <i class="bi bi-geo-alt"></i>
                </h3>
                <div class="room-ratings pb-4 text-base">
                  <p class="rating-word mr-2 pb-1 text-base inline-flex">
                    rating
                  </p>
                  <p
                    class="rating-number rounded bg-yellow-400 items-center justify-center flex w-8 h-8 text-white pb-1 text-base inline-flex"
                  >
                    {{ hotel.review }}
                  </p>
                </div>
  
                <hr
                  class="custom-hr w-12/13 border-gray-200 absolute left-2 right-2"
                />
  
                <h3 class="room-food pt-4 pb-1 text-base">
                  {{ hotel.meals }} <i class="fa-solid fa-utensils pl-1"></i>
                </h3>
                <!-- <h3 class="room-view pb-4 text-base">
                  {{ hotel.view }} <i class="bi bi-brightness-high"></i>
                </h3> -->
  
                <hr
                  class="custom-hr w-12/13 border-gray-200 absolute left-2 right-2"
                />
  
                <div class="room-price pt-4">
                  <p
                    class="hotel-room-name font-bold text-sm text-black-900 inline-flex p-1"
                  >
                    {{ hotel.webSite }}
                  </p>
                  <p class="text-sm inline-flex">الليلة عن طريق</p>
                  <p
                    class="price pt-1 text-sm font-bold text-green-600 mb-3 px-1 inline-flex"
                  >
                    {{ hotel.price }}
                  </p>
  
                  <!-- <img
                    :src="hotel.siteLogo" 
                    :alt="hotel.siteName"
                    class="site-logo w-8 h-8 inline-flex"
                  /> -->
                  <img
                    src="../../../assets/booking.png"
                    alt=""
                    class="site-logo w-8 h-8 inline-flex"
                  />
                </div> 
  
                <button
                  class="see-more-room w-11/12 h-10 rounded-xl bg-indigo-600 text-white text-base text-center absolute left-3 mt-6 block"
                >
                  رؤية العرض
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useHomeStore } from '../../../stores/home';
  import { useRoute } from 'vue-router';
  
  const homeStore = useHomeStore();
  const route = useRoute(); // Use the 'useRoute' function to access the route
  
  // Fetch hotel data when the component is mounted
  onMounted(async () => {
    try {
      // Get the query parameters from the route
      const { hotel, checkin, checkout, guests } = route.query;
    
      // Call the store's fetchHotelList action with the parameters
      await homeStore.fetchHotelList({ hotel, checkin, checkout, guests });
      console.log("hedhi mel search page :", homeStore.hotelList )
    } catch (error) {
      console.error('Error fetching hotel list:', error);
    }
  });
  </script>
  
  
  
  