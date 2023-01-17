<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.reg_no"
          outlined
          dense
          flat
          filled
          label="REG NO"
          style="margin-top: 10px"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.brand_name"
          label="Brand name"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.model_name"
          label="Model Name"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.engine_size"
          label="Engine Size"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.fuel_type"
          label="Fuel Type"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="1" class="remove-space-around">
        <v-text-field
          v-model="currentCar.gear_type"
          label="Gear Type"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="1" class="remove-space-around">
        <v-text-field
          v-model="currentCar.vit_capacity"
          label="Vit Capacity"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field v-model="currentCar.vin" label="VIN"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.date_immatriculation"
          label="Date Immatriculation"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="remove-space-around">
        <v-text-field
          v-model="currentCar.contract_no"
          label="Contract Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="remove-space-around">
        <v-text-field
          v-model="currentCar.date_fin_contract"
          label="Date Fin Contract"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    search: null,
    currentCar: {},
  }),
  computed: {
    ...mapState({
      car: (state) => state.selectedCar,
    }),
  },
  mounted() {
    this.currentCar = this.car;
  },
  watch: {
    car: function (newCar) {
      this.currentCar = newCar;
    },
  },
};
</script>
<style scoped>
.remove-space-around {
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 10px;
  padding-top: 0px;
}
</style>
