<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" sm="12" md="6">
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
      <div style="padding: 10px">
        <div>
          <v-card-text style="color: blue">Contract Details</v-card-text>
          <v-row>
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
          <v-card-text style="color: blue; font-size: larger"
            >Driver</v-card-text
          >
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-select
                v-model="form.private_client"
                label="Private Client"
                dense
                outlined
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field
                v-model="form.driver.first_name"
                label="First Name"
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field
                v-model="form.driver.last_name"
                label="Last Name"
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field
                v-model="form.driver.driving_license"
                label="Driving Lic."
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field
                v-model="form.driver.gsm"
                label="GSM"
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="1">
              <v-text-field
                v-model="form.driver.phone"
                label="Phone"
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="1">
              <v-text-field
                v-model="form.driver.email"
                label="Email"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="form.driver.address"
                label="Address"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea
                v-model="form.note"
                label="Note"
                outlined
                height="100"
                dense
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="12" md="12">
              <hr class="hr-text" data-content="Attachments" />
            </v-col>
            <v-col> <v-icon>mdi-file-pdf-box</v-icon> Prise en charge </v-col>
            <v-col>
              <v-icon>mdi-smart-card</v-icon> Driving License Recto
            </v-col>

            <v-col>
              <v-icon>mdi-smart-card</v-icon> Driving License Verso
            </v-col>

            <v-col> <v-icon>mdi-file-pdf-box</v-icon> Contract Signed </v-col>
          </v-row>
        </div>
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
        driver: {
          first_name: "",
          last_name: "",
          driving_license: "",
          gsm: "",
          phone: "",
          email: "",
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: "";
    background: black;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
}
</style>
