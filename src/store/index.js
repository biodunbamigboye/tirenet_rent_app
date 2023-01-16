import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [
      {
        reg_no: "1BMR234",
        brand_name: "Opel",
        model_name: "Corsa",
        engine_size: "14.CC",
        fuel_type: "Diesel",
        gear_type: "Manual",
        vit_capacity: "6 Vits",
        vin: "123456789",
        date_immatriculation: "2020-01-01",
        contract_no: "1234",
        date_fin_contract: "2020-01-01",
      },
      {
        reg_no: "2232",
        brand_name: "Toyota",
        model_name: "Corolla",
        engine_size: "12.CC",
        fuel_type: "Petrol",
        gear_type: "Automatic",
        vit_capacity: "4 Vits",
        vin: "123456389",
        date_immatriculation: "2020",
        contract_no: "1235",
        date_fin_contract: "2020-01-04",
      },
      {
        reg_no: "RA10000",
        brand_name: "Tesla",
        model_name: "Model S",
        engine_size: "12.CC",
        fuel_type: "Electric",
        gear_type: "Automatic",
        vit_capacity: "4 Vits",
        vin: "456456789",
        date_immatriculation: "2020",
        contract_no: "1236",
        date_fin_contract: "2020-02-04",
      },
      {
        reg_no: "HQ21112",
        brand_name: "Kia",
        model_name: "Rio",
        engine_size: "16.CC",
        fuel_type: "Diesel",
        gear_type: "Manual",
        vit_capacity: "4 Vits",
        vin: "4564906789",
        date_immatriculation: "2020",
        contract_no: "1237",
        date_fin_contract: "2020-03-04",
      },
      {
        reg_no: "FAT4E4",
        brand_name: "Ford",
        model_name: "Fiesta",
        engine_size: "16.CC",
        fuel_type: "Petrol",
        gear_type: "Automatic",
        vit_capacity: "6 Vits",
        vin: "4564567878",
        date_immatriculation: "2020",
        contract_no: "1238",
        date_fin_contract: "2020-04-04",
      },
    ],
    rentalHistory: [],
    selectedCar: null,
  },
  getters: {},
  mutations: {
    SET_SELECTED_CAR(state, contract) {
      state.selectedCar = contract;
    },
    SET_RENTAL_HISTORY(state, history) {
      state.rentalHistory = history;
    },
  },
  actions: {
    setSelectedCar({ commit }, contract) {
      commit("SET_SELECTED_CAR", contract);
    },
    setRentalHistory({ commit }, history) {
      commit("SET_RENTAL_HISTORY", history);
    },
  },
  modules: {},
});
