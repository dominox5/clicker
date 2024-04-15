
import { defineStore } from 'pinia'

export const useClicker = defineStore('clicker', {
  state: () => {
    return {
      balance: parseInt(localStorage.getItem('clicker_balance')) || 0
    }
  }
})