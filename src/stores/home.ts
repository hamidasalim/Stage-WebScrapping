import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotel: '',
    checkin: '',
    checkout: '',
    guests: '',
  }),
});