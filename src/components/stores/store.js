
import { defineStore } from 'pinia'

export const useClicker = defineStore('clicker', {
  state: () => {
    return {
      gold: parseInt(localStorage.getItem('clicker_gold')) || 0,
      money: parseInt(localStorage.getItem('clicker_money')) || 0,
      exchangeRate: 1,
      upgrades: {
        axe: parseInt(localStorage.getItem('clicker_upgrades_axe')) || 0,
        jackhammer: parseInt(localStorage.getItem('clicker_upgrades_jackhammer')) || 0,
        workerWithAxe: parseInt(localStorage.getItem('clicker_upgrades_workerWithAxe')) || 0,
        workerWithJackhammer: parseInt(localStorage.getItem('clicker_upgrades_workerWithJackhammer')) || 0,
      }
    }
  },
  actions: {
    increment() {
      this.gold += (1 + this.upgrades.axe + (this.upgrades.jackhammer * 10))
      localStorage.setItem('clicker_gold', this.gold);
    },
    random(){
      this.exchangeRate = Math.floor(Math.random() * 10)
      console.log("minutový Cyklus se provedl");
    },
    exchange(inputGold){
      if(inputGold > this.gold ){
        alert("Nemůžeš směnit víc zlata než máš.")
      }else if(inputGold < 0){
        alert("Nemůžeš směnit záporné číslo.")
      }else{
        console.log("Směna provedena!")
        this.money += (inputGold * this.exchangeRate);
        localStorage.setItem('clicker_money', this.money)
        this.gold -= inputGold
        localStorage.setItem('clicker_gold', this.gold);
      }
    },
    plusAxe(){
      if(this.money < 50){
        alert("Nemáš dostatek money.")
      }else{
        this.upgrades.axe++;
        localStorage.setItem('clicker_upgrades_axe', this.upgrades.axe);
        this.money -= 50
        localStorage.setItem('clicker_money', this.money)
      }
    },
    plusJackhammer(){
      if(this.money < 200){
        alert("Nemáš dostatek money.")
      }else{
        this.upgrades.jackhammer++;
        localStorage.setItem('clicker_upgrades_jackhammer', this.upgrades.jackhammer);
        this.money -= 200
        localStorage.setItem('clicker_money', this.money)
      }
    },
    plusWorkerWithJackhammer(){
      if(this.money < 5000){
        alert("Nemáš dostatek money.")
      }else{
        this.upgrades.workerWithJackhammer++;
        localStorage.setItem('clicker_upgrades_workerWithJackhammer', this.upgrades.workerWithJackhammer);
        this.money -= 5000
        localStorage.setItem('clicker_money', this.money)
      }
    },
    plusWorkerWithAxe(){
      if(this.money < 500){
        alert("Nemáš dostatek money.")
      }else{
        this.upgrades.workerWithAxe++;
        localStorage.setItem('clicker_upgrades_workerWithAxe', this.upgrades.workerWithAxe);
        this.money -= 500
        localStorage.setItem('clicker_money', this.money)
      }
    },
    passivePeriod(){
      this.gold += (this.upgrades.workerWithAxe + (this.upgrades.workerWithJackhammer * 10))
      localStorage.setItem('clicker_gold', this.gold);
      console.log("vteriny")
    }
  }
})