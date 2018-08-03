<!-- CarSelection.vue -->
<template>
  <!-- grid management -->
  <v-container grid-list-md text-xs-center>
  <v-layout row wrap>
  <v-flex xs12 sm6 offset-sm3>
  <!-- main content -->
  <div class="CarSelection">
    <!-- Cars information-->
    <h1 class="text-dark">Make</h1>
    <select class="btn btn-outline-info dropdown-toggle-split" v-on:change="makeChanged" v-model="makeId">
      <option v-bind:value="makeName.id" v-for="makeName in makeData">{{makeName.name}}</option>
    </select>

    <h1 class="text-dark">Model</h1>
    <select class="btn btn-outline-info dropdown-toggle-split" v-on:change="modelChanged" v-model="modelId">
      <option v-bind:value="modelName.id" v-for="modelName in modelData">{{modelName.name}}</option>
    </select>

    <h1 class="text-dark">Year</h1>
    <select class="btn btn-outline-info dropdown-toggle-split" v-on:change="modelChanged"  v-model="year">
      <option v-bind:value="year" v-for="year in yearData">{{year}}</option>
    </select>

    </br></br></br>
    <!-- button for Searching dimension -->
    <router-link :to="{name: 'CarDimension', params: { makeName: makeName.name, modelName: modelName.name, year: year}}" class="btn btn-outline-info">Search Dimension</router-link>
    <hr>
      <!-- end CarSelection -->
    </div>
    <!-- endgrid management -->
  </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default{
  name: "CarSelection",
  // initial get mark data from API
  created: function(){
    this.$http.get('https://vehicles.staging.autotraderau.io/api/v1/vehicles/makes')
    .then(response => {
      console.log(response)
      this.makeData = response.data.data;
    });
  },
  // variables
  data(){
    return{
      makeData: [],
      makeName: '',
      makeId: 0,

      modelData: [],
      modelName: '',
      modelId: 0,

      yearData: [],
      year: ''
    }
  },
  methods: {
    // assign make data to dropdown menu
    makeChanged: function(e){
      for (var i = 0; i < this.makeData.length; i++){
        if (this.makeData[i].id == e.target.value){
          this.makeName = this.makeData[i];
        }
      };
      // get model data from makeId variable
      this.$http.get('https://vehicles.staging.autotraderau.io/api/v1/vehicles/makes/'+this.makeId+'/models')
      .then(response => {
        console.log(response)
        this.modelData = response.data.data;
      });
    },
    // assign model data to dropdown menu
    modelChanged: function(e){
      for (var i = 0; i < this.modelData.length; i++){
        if (this.modelData[i].id == e.target.value){
          this.modelName = this.modelData[i];
        }
      };
      // get year data from makeId and modelId variable
      this.$http.get('https://vehicles.staging.autotraderau.io/api/v1/vehicles/makes/'+this.makeId+'/models/'+this.modelId+'/years')
      .then(response => {
        console.log(response)
        this.yearData = response.data.data;
      });
      }
  }
}
</script>

<style scoped>
</style>
