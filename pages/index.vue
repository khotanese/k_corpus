<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="11" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"><b>
          Query Conditions
        </b></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col>
            <v-text-field
              label="Catalogue No."
              v-model="catalogue_number"
            ></v-text-field>
          </v-col>
            <v-col>
            <v-text-field
              label="Site mark"
              v-model="site_mark_or_collection_number"
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row><v-col>
          <v-btn
            class="mr-4"
            color="primary"
            v-on:click="submit_data"
          >
            Search
          </v-btn>
          </v-col></v-row>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text><v-row>
            <v-list>
              <v-list-item v-for="record in data_model" :key="record.unique_id">
                  <v-card-title class="headline"><a :href="'./page?id='+record.unique_id" target="_blank">{{record.catalogue_number_res.toLowerCase()}}</a>&nbsp;&nbsp;&nbsp;&nbsp;{{record.description}}</v-card-title>
              </v-list-item>
            </v-list>
          </v-row></v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
import global from './static_vars.vue'
export default {
  data () {
    return {
      catalogue_number:"",
      site_mark_or_collection_number:"",
      catalogue_number_res:[],
      data_model:[],
    }
  },
  methods: {
    submit_data: function() {
      this.data_model = [];
      const query_url = global["url_search"] + "?catalogue_number="+this.catalogue_number+"&site_mark_or_collection_number="+this.site_mark_or_collection_number;
      let _this = this;
      axios.get(query_url)
      .then(function (response) {
        let res_data = response.data.data;
        for (const row of res_data){
          let new_row = [];
          new_row["unique_id"] = row.id;
          new_row["catalogue_number_res"] = row.catalogue_number;
          if (row.content_summary!=""){
            new_row["description"] = row.content_summary;
          }
          else if(row.title!=""){
            new_row["description"] = row.title;
          }
          _this.data_model.push(new_row);
        }
        console.log(_this.data_model);
      }).catch(function (error) {
        console.log(error);
      });
    },
  },
  beforeMount(){
    if (typeof this.$route.query.id !== 'undefined') {
      // let chapter_id = this.$route.query.id;
      // this.chapter_id = chapter_id;
      // this.call_search_api();
    }
  },
  mounted() {
    let _this = this;
    window.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') { 
        _this.submit_data();
      }
    });
  }

}

</script>