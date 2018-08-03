<!-- CarDimension.vue -->
<template>
  <!-- grid management -->
  <v-container grid-list-md text-xs-center>
  <v-layout row wrap>
  <v-flex xs12 sm6 offset-sm3>
  <!-- main content -->
  <div class="CarDimension">
  <!-- Table for Dimensions-->
  <div class="table-responsive">
    <h1 class="text-dark">{{year}}
    {{dimensionData.make}}
    {{dimensionData.model}}
    Car dimension</h1>
    <router-link :to="{name: 'CarSelection'}" class="btn btn-outline-success">Back to Car Selection</router-link>
    <table class="table-hover table table-striped ">
        <thead>
            <tr class="align-center bg-dark text-light">
                    <!--Column-->
                <th>Variant</th>
                <th>HxWxL</th>
                <th>Kerb Weight (kg)</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dimension,i) in dimensionData.dimensions">
                <td>{{dimension.variant}}</td>
                <td>{{dimension.height}}x{{dimension.width}}x{{dimension.length}}</td>
                <td>{{dimension.kerb_weight}}</td>
            </tr>
        </tbody>
    </table>
    <!-- end table -->
  </div>
  </div>
  <!-- endgrid management -->
  </v-flex>
  </v-layout>
  </v-container>
  </template>

<script>
import router from '../router'
export default{
  name: "CarDimension",
  data () {
            return {
                makeName: '',
                modelName: '',
                year: 0,
                dimensionData: [],
            }
        },
        created() {
            // receive parameter from CarSelection component
            this.makeName = this.$route.params.makeName;
            this.modelName = this.$route.params.modelName;
            this.year = this.$route.params.year;
            // get dimension data using variables makeName, modelName, and year
            this.$http.get('https://vehicles.staging.autotraderau.io/api/v1/dimensions?make='+this.makeName+'&model='+this.modelName+'&make_seo='+this.makeName+'&model_seo='+this.modelName+'&year='+this.year+'&cleanse=true')
            .then(response => {
              console.log(response)
              this.dimensionData = response.data.data;
            });
        },

}
</script>
<style>
</style>
