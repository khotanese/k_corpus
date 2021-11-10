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
            <v-col><font color="black"><b>Basic</b></font></v-col>
          </v-row>
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
          <v-row>
            <v-col><font color="black"><b>Provenance</b></font></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
              label="Main find spot"
              :items="main_find_spot_list"
              v-model="main_find_spot"
              outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Specific find spot"
              :items="specific_find_spot_list"
              v-model="specific_find_spot"
              outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Expedition or collection"
              :items="expedition_or_collection_list"
              v-model="expedition_or_collection"
              outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Current location"
              :items="current_location_list"
              v-model="current_location"
              outlined
              ></v-select>
           </v-col>
          </v-row>
          <v-row>
            <v-col><font color="black"><b>Language and Script</b></font></v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-select
            label="Language"
            :items="language_list"
            v-model="language"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Linguistic stage"
            :items="linguistic_stage_list"
            v-model="linguistic_stage"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Script"
            :items="script_list"
            v-model="script"
            outlined
            ></v-select>
            </v-col><v-col>
            <v-select
            label="Script type"
            :items="script_type_list"
            v-model="script_type"
            outlined
            ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col><font color="black"><b>Content</b></font></v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-select
            label="Genre"
            :items="genre_list"
            v-model="genre"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Subgenre"
            :items="subgenre_list"
            v-model="subgenre"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Archive"
            :items="archive_list"
            v-model="archive"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Title of the work"
            :items="title_list"
            v-model="title"
            outlined
            ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-select
            label="Date1"
            :items="date1_list"
            v-model="date1"
            outlined
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Date2"
            :items="date2_list"
            v-model="date2"
            outlined
            ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-text-field
              label="Transcription"
              v-model="alltext_correspondance"
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col><font color="black"><b>Materiality</b></font></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
              label="Writing surface"
              :items="writing_surface_list"
              v-model="writing_surface"
              outlined
              ></v-select>
          </v-col>
          </v-row>
          <v-row><v-col>
          <v-btn
            class="mr-4"
            color="primary"
            v-on:click="submit_data"
            v-on:keyup.enter="submit_data"
          >
            Search
          </v-btn>
          <v-btn
            class="mr-4"
            color="primary"
            :href="'./advanced_search'"
          >
            Clear
          </v-btn>
          </v-col></v-row>
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions> -->
      </v-card>
        <v-card>
          <v-card-title><v-row><v-col>
            <span v-html="summarize_data_string"></span>
          </v-col></v-row></v-card-title>
          <v-card-text><v-row>
            <v-list>
              <v-list-item v-for="record in data_model" :key="record.unique_id">
                  <v-card-title class="headline"><a :href="'../page?id='+record.unique_id" target="_blank">{{record.catalogue_number_res.toLowerCase()}}</a>&nbsp;&nbsp;&nbsp;&nbsp;{{record.description}}</v-card-title>
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
      main_find_spot:"",
      main_find_spot_list:global["main_find_spot_list"],
      specific_find_spot:"",
      specific_find_spot_list:global["specific_find_spot_list"],
      expedition_or_collection:"",
      expedition_or_collection_list:global["expedition_or_collection_list"],
      current_location:"",
      current_location_list:global["current_location_list"],
      language:"",
      language_list:global["language_list"],
      linguistic_stage:"",
      linguistic_stage_list:global["linguistic_stage_list"],
      script:"",
      script_list:global["script_list"],
      script_type:"",
      script_type_list:global["script_type_list"],
      genre:"",
      genre_list:global["genre_list"],
      subgenre:"",
      subgenre_list:global["subgenre_list"],
      archive:"",
      archive_list:global["archive_list"],
      title:"",
      title_list:global["title_list"],
      date1:"",
      date1_list:global["date1_list"],
      date2:"",
      date2_list:global["date2_list"],
      writing_surface:"",
      writing_surface_list:global["writing_surface_list"],
      alltext_correspondance:"",
      data_model:[],
      summarize_data_string:"",
    }
  },
  methods: {
    submit_data: function() {
      this.data_model = [];
      this.summarize_data_string = "";
      let language_id = this.language.split("-")[0];
      let script_id = this.script.split("-")[0];
      const query_url = global["url_search"] 
        + "?catalogue_number=" + this.catalogue_number
        + "&site_mark_or_collection_number=" + this.site_mark_or_collection_number
        + "&main_find_spot=" + this.main_find_spot
        + "&specific_find_spot=" + this.specific_find_spot
        + "&expedition_or_collection=" + this.expedition_or_collection
        + "&current_location=" + this.current_location
        + "&language=" + language_id
        + "&linguistic_stage=" + this.linguistic_stage
        + "&script=" + script_id
        + "&script_type=" + this.script_type
        + "&genre=" + this.genre
        + "&subgenre=" + this.subgenre
        + "&archive=" + this.archive
        + "&title=" + this.title
        + "&date_a=" + this.date1
        + "&date_b=" + this.date2
        + "&writing_surface=" + this.writing_surface
        + "&alltext_correspondance=" + this.alltext_correspondance
      let _this = this;
      axios.get(query_url)
      .then(function (response) {
        let res_data = response.data.data;
        // console.log( _this.summarize_data_model);
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
        // console.log(response.data.summarize_data);
        _this.summarize_data_string = "<v-card-title>Results summarization</v-card-title><br /><hr /><br />"
        // for (const i of response.data.summarize_data){
        //   for (const j of i){
        //     for (const [k_key, k_value] of Object.entries(j)){
        //       _this.summarize_data_string += "<font color='#964f4c'>" + k_key + ":</font><font color='#160408'>"+ k_value + "a<br /></font>";
        //     }
        //     _this.summarize_data_string += "b<br />";
        //   }
        //   _this.summarize_data_string = _this.summarize_data_string.slice(0, -2); 
        //   _this.summarize_data_string+="c<br />";
        // }
        for (let i of response.data.summarize_data){
          if (i.length == 1){
            for (const [k_key, k_value] of Object.entries(i[0])){
              if (k_key!="Count"){
                k_key = "<u class='dotted'>" + k_key + "</u>";
              }else{
                k_key = "&nbsp;&nbsp;&nbsp;&nbsp;- " + k_key;
              }
              _this.summarize_data_string += "<font color='#964f4c'>" + k_key + ":&nbsp;</font><font color='#160408'>"+ k_value + "<br /></font>";
            }
            _this.summarize_data_string += "<br />";
          }else if(i.length>1){
            for (const j of i){
              for (const [k_key, k_value] of Object.entries(j)){
              if (k_key!="Count"){
                k_key = "<u class='dotted'>" + k_key + "</u>";
              }else{
                k_key = "&nbsp;&nbsp;&nbsp;&nbsp;- " + k_key;
              }
                _this.summarize_data_string += "<font color='#964f4c'>" + k_key + ":&nbsp;</font><font color='#160408'>"+ k_value + "<br /></font>";
              }
            }
            _this.summarize_data_string += "<br />";
          }
        }
        _this.summarize_data_string += "<br /><br />Results (" + res_data.length + " records):<hr /><br />"
        // console.log(query_url);
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
  },
  beforeMount(){
    console.log(global);
    if (typeof this.$route.query.id !== 'undefined') {
      let chapter_id = this.$route.query.id;
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
<style type="text/css">
u {    
    border-bottom: 3px dotted;
    text-decoration: none;
}
</style>