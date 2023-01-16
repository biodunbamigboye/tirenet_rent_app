<template>
  <v-container fluid>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab v-for="tab in tabs" :key="tab.tab">
          {{ tab.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-row class="pt-3 pb-3">
              <v-col cols="12" sm="6" md="3">
                <div style="border: 2px solid #000000" class="ml-3">
                  <v-text-field
                    v-model="search"
                    rounded
                    prepend-icon="mdi-magnify"
                    label="Search for Registration No, Client, Driver, Agency, etc."
                    single-line
                    hide-details
                    style="padding-top: 0px"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="1">
                <v-btn rounded color="primary" @click="searchHistory()"
                  ><v-icon>mdi-magnify</v-icon>Search</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="3">
                <v-btn color="secondary" :to="{ name: 'create-contract' }"
                  >New Rent</v-btn
                >
              </v-col>
            </v-row>
            <div>
              <v-data-table
                :headers="headers"
                :items="items"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
              >
                <template v-slot:[`item.active`]="{ item }">
                  <v-checkbox
                    v-model="item.active"
                    color="primary"
                  ></v-checkbox>
                </template>

                <template v-slot:[`item.action`]="{ item }">
                  <v-btn icon @click="editHistory(item.id)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>Documents</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      items: [],
      page: 1,
      itemsPerPage: 10,
      search: null,
      tab: null,
      tabs: [{ title: "Rental History" }, { title: "Documents" }],
      headers: [
        {
          text: "#",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Driver",
          value: "driver",
        },
        {
          text: "Agency",
          value: "agency",
        },
        {
          text: "Start Date",
          value: "start_date",
        },
        {
          text: "End Date",
          value: "end_date",
        },
        {
          text: "Active",
          value: "active",
        },
        {
          text: "Action",
          value: "action",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(["rentalHistory"]),
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.items = this.rentalHistory;
  },
  methods: {
    editHistory(id) {
      this.$router.push({ name: "EditHistory", params: { id: id } });
    },
    searchHistory() {
      let searchKey = this.search.toLowerCase();
      this.items = this.rentalHistory.filter((item) => {
        return (
          item.driver.toLowerCase().includes(searchKey) ||
          item.agency.toLowerCase().includes(searchKey)
        );
      });
    },
  },
};
</script>
