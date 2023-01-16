<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- Drawer List Item Starts here -->
      <v-list-item>
        <v-list-item-content>
          <div style="border: 2px solid #000000">
            <v-text-field
              v-model="search"
              @input="searchCars"
              prepend-icon="mdi-magnify"
              label="REG NO"
              single-line
              hide-details
              style="padding-top: 0px"
            ></v-text-field>
          </div>
        </v-list-item-content>
      </v-list-item>

      <div style="height: 100vh; border: 2px solid #000000; margin: 15px">
        <v-list-item
          v-for="car in carList"
          @click="changeSelectedCar(car)"
          :key="car.reg_no"
        >
          <v-list-item-content>
            {{ car.reg_no }}
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title v-if="selectedCar">{{
        selectedCar.reg_no
      }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- Main Section Starts Here-->
      <MoreInfo />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { faker } from "@faker-js/faker";

export default {
  components: {
    MoreInfo: () => import("./components/CarInfo.vue"),
  },
  data: () => ({
    drawer: null,
    search: null,
    carList: [],
  }),
  computed: {
    ...mapState({
      cars: (state) => state.cars,
      selectedCar: (state) => state.selectedCar,
    }),
  },
  mounted() {
    this.carList = this.cars;
    this.setSelectedCar(
      this.cars[Math.floor(Math.random() * this.cars.length)]
    );
    let rentalHistory = [];
    for (let i = 0; i < 500; i++) {
      rentalHistory.push({
        id: i + 5,
        driver: faker.name.fullName(),
        agency: faker.company.name(),
        start_date: faker.date.past(),
        end_date: faker.date.future(),
        active: faker.datatype.boolean(),
      });
    }
    this.setRentalHistory(rentalHistory);
  },
  methods: {
    ...mapActions(["setSelectedCar", "setRentalHistory"]),
    changeSelectedCar(car) {
      this.setSelectedCar(car);
    },
    searchCars() {
      this.carList = this.cars.filter((car) =>
        car.reg_no.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
