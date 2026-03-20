<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="11" sm="8" md="6">
      <v-card>
        <v-card-title class="text-h6"><b>
          Advanced Search
        </b></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col><span class="text-black font-weight-bold">Basic</span></v-col>
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
            <v-col><span class="text-black font-weight-bold">Provenance</span></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
              label="Main find spot"
              :items="main_find_spot_list"
              v-model="main_find_spot"
              variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Specific find spot"
              :items="specific_find_spot_list"
              v-model="specific_find_spot"
              variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Expedition or collection"
              :items="expedition_or_collection_list"
              v-model="expedition_or_collection"
              variant="outlined"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
              label="Current location"
              :items="current_location_list"
              v-model="current_location"
              variant="outlined"
              ></v-select>
           </v-col>
          </v-row>
          <v-row>
            <v-col><span class="text-black font-weight-bold">Language and Script</span></v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-select
            label="Language"
            :items="language_list"
            v-model="language"
            variant="outlined"
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Script"
            :items="script_list"
            v-model="script"
            variant="outlined"
            ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col><span class="text-black font-weight-bold">Content</span></v-col>
          </v-row>
          <v-row>
            <v-col>
            <v-select
            label="Genre"
            :items="genre_list"
            v-model="genre"
            variant="outlined"
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Subgenre"
            :items="subgenre_list"
            v-model="subgenre"
            variant="outlined"
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Archive"
            :items="archive_list"
            v-model="archive"
            variant="outlined"
            ></v-select>
            </v-col>
            <v-col>
            <v-select
            label="Title of the work"
            :items="title_list"
            v-model="title"
            variant="outlined"
            ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col><span class="text-black font-weight-bold">Materiality</span></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
              label="Writing surface"
              :items="writing_surface_list"
              v-model="writing_surface"
              variant="outlined"
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
          <v-row><v-col>
          <v-btn
            class="mr-4"
            color="primary"
            @click="submit_data"
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
      </v-card>
        <v-card>
          <v-card-title><v-row><v-col>
            <span v-html="summarize_data_string"></span>
          </v-col></v-row></v-card-title>
          <v-card-text><v-row>
            <v-list>
              <v-list-item v-for="record in data_model" :key="record.unique_id">
                  <v-card-title class="text-h6"><a :href="'../page?id='+record.unique_id" target="_blank">{{record.catalogue_number_res}}</a>&nbsp;&nbsp;&nbsp;&nbsp;{{record.description}}</v-card-title>
              </v-list-item>
            </v-list>
          </v-row></v-card-text>
        </v-card>

    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
import * as staticVars from '~/utils/static_vars'
export default {
  data () {
    return {
      catalogue_number:"",
      site_mark_or_collection_number:"",
      main_find_spot:"",
      main_find_spot_list: staticVars.main_find_spot_list,
      specific_find_spot:"",
      specific_find_spot_list: staticVars.specific_find_spot_list,
      expedition_or_collection:"",
      expedition_or_collection_list: staticVars.expedition_or_collection_list,
      current_location:"",
      current_location_list: staticVars.current_location_list,
      language:"",
      language_list: staticVars.language_list,
      script:"",
      script_list: staticVars.script_list,
      genre:"",
      genre_list: staticVars.genre_list,
      subgenre:"",
      subgenre_list: staticVars.subgenre_list,
      archive:"",
      archive_list: staticVars.archive_list,
      title:"",
      title_list: staticVars.title_list,
      date1:"",
      date2:"",
      writing_surface:"",
      writing_surface_list: staticVars.writing_surface_list,
      alltext_correspondance:"",
      data_model:[],
      summarize_data_string:"",
    }
  },
  methods: {
    submit_data: function() {
      this.data_model = [];
      this.summarize_data_string = "Searching...";
      let main_find_spot_id = this.main_find_spot.split(" ")[0];
      let specific_find_spot_id = this.specific_find_spot.split(" ")[0];
      let expedition_or_collection_id = this.expedition_or_collection.split(" ")[0];
      let current_location_id = this.current_location.split(" ")[0];
      let language_id = this.language.split(" ")[0];
      let script_id = this.script.split(" ")[0];
      let genre_id = this.genre.split(" ")[0];
      let subgenre_id = this.subgenre.split(" ")[0];
      let title_id = this.title.split(" ")[0];
      let writing_surface_id = this.writing_surface.split(" ")[0];
      const query_url = staticVars.url_search
        + "?catalogue_number=" + this.catalogue_number
        + "&site_mark_or_collection_number=" + this.site_mark_or_collection_number
        + "&main_find_spot=" + main_find_spot_id
        + "&specific_find_spot=" + specific_find_spot_id
        + "&expedition_or_collection=" + expedition_or_collection_id
        + "&current_location=" + current_location_id
        + "&language=" + language_id
        + "&script=" + script_id
        + "&genre=" + genre_id
        + "&subgenre=" + subgenre_id
        + "&archive=" + this.archive
        + "&title=" + title_id
        + "&writing_surface=" + writing_surface_id
        + "&alltext_correspondance=" + this.alltext_correspondance

      let _this = this;
      axios.get(query_url)
      .then(function (response) {
        let res_data = response.data.data;
        console.log(res_data)
        if (!res_data){
          _this.summarize_data_string = "No results";
          throw "no results";
        }
        console.log(res_data);
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

        _this.summarize_data_string = "<b>Results summarization</b><br /><hr /><br />"
        for (let i of response.data.summarize_data){
          if (i.length == 1){
            for (const [k_key, k_value] of Object.entries(i[0])){
              let display_key = k_key;
              if (k_key!="Count"){
                display_key = "<u class='dotted'>" + k_key + "</u>";
              }else{
                display_key = "&nbsp;&nbsp;&nbsp;&nbsp;- " + k_key;
              }
              _this.summarize_data_string += "<font color='#964f4c'>" + display_key + ":&nbsp;</font><font color='#160408'>"+ k_value + "<br /></font>";
            }
            _this.summarize_data_string += "<br />";
          }else if(i.length>1){
            for (const j of i){
              for (const [k_key, k_value] of Object.entries(j)){
              let display_key = k_key;
              if (k_key!="Count"){
                display_key = "<u class='dotted'>" + k_key + "</u>";
              }else{
                display_key = "&nbsp;&nbsp;&nbsp;&nbsp;- " + k_key;
              }
                _this.summarize_data_string += "<font color='#964f4c'>" + display_key + ":&nbsp;</font><font color='#160408'>"+ k_value + "<br /></font>";
              }
            }
            _this.summarize_data_string += "<br />";
          }
        }
        _this.summarize_data_string += "<br /><br />Results (" + res_data.length + " records):<hr /><br />"
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
  },
  beforeMount(){
    if (typeof this.$route.query.id !== 'undefined') {
      let chapter_id = this.$route.query.id;
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
