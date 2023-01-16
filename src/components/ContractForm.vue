<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-card-text style="color: blue">
            <v-icon color="blue">mdi-card-account-details-outline</v-icon>
            Create New Rental Contract
          </v-card-text>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="2">
          <v-btn elevation="4">Print Contract</v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-btn elevation="4">Add Document</v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="1">
          <v-btn elevation="4" width="100%" color="error">Cancel</v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="1">
          <v-btn elevation="4" class="mr-10">Save</v-btn>
        </v-col>
      </v-row>
      <hr />

      <div>
        <v-card-text style="color: blue">Contract Details</v-card-text>
        <v-row style="margin: 10px">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.client"
              label="Client (Search an existing client)"
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.start_date"
              label="Start Date"
              type="date"
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.end_date"
              label="End Date"
              type="date"
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="form.insurance"
              label="Client Contact Reference(Insurance)"
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="form.internal_reference"
              label="Internal Reference"
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="form.pickup_location"
              label="Pickup Location"
              dense
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-checkbox
              v-model="delivery_equals_pickup"
              label="Same as Pickup"
              dense
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.delivery_location"
              label="Delivery Location"
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </div>

      <div>
        <v-card-text style="color: blue">Driver</v-card-text>
        <v-row>
            <v-col cols="14" sm="7" md="2">
                <v-select
                v-model="form.private_client"
                label="Private Client"
                dense
                required
                ></v-select>
            </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      delivery_equals_pickup: false,
      form: {
        client: "",
        start_date: "",
        end_date: "",
      },
    };
  },
};
</script>
