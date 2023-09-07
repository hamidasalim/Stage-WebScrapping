// Import necessary modules
import axios from 'axios';

import { defineStore } from 'pinia'
// Define a type for a hotel object (adjust the type structure as per your actual data structure)
type Hotel = {
  hotelName: string
  price: string
  webSite: string
  Location: string
  review: string
  meals: string
  _id: string
}

type Search = {
  hotel: string
  checkin: string
  checkout: string
  guests: string
}

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotel: '',
    checkin: '',
    checkout: '',
    guests: '',
    hotelList: [] 
  }),
  actions: {
    async fetchHotelList(params: Search) {
      try {
        // Construct the API URL with the provided parameters
        const apiUrl = `http://localhost:3000/hotels?location=${params.hotel}&checkInDate=${params.checkin}&checkOutDate=${params.checkout}&adultNum=${params.guests}`

       // Make the API call
       const response = await axios.get(apiUrl);

       // Type assertion to specify the expected structure
       this.hotelList = (response.data.hotels) ;
       console.log("el list ",this.hotelList)


       // Log the fetched hotels to the console
      } catch (error) {
        console.error('Error fetching hotel list:', error)
        throw error
      }
    }
  }
})
