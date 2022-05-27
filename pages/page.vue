<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="11" sm="8" md="6">
      <v-card>
        
        <v-card-title class="headline">
            <v-list>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Catalogue No.:&nbsp; </font>{{data_model.catalogue_number}}</v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Provenance</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Main find spot:&nbsp;</font> {{data_model.main_find_spot_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Specific find spot:&nbsp; </font>{{data_model.specific_find_spot_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Expedition or collection:&nbsp;</font> {{data_model.expedition_or_collection_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Site Mark or collection number:&nbsp;</font> {{data_model.site_mark_or_collection_number}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Current location:&nbsp;</font> {{data_model.current_location_name}}</v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Language and Script</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Language:&nbsp;</font> {{data_model.language_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Script:&nbsp;</font> {{data_model.script_name}}</v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Content</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Genre:&nbsp;</font> {{data_model.genre_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Subgenre:&nbsp;</font> {{data_model.subgenre_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Archive:&nbsp;</font> {{data_model.archive}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Title of the work:&nbsp;</font> {{data_model.title_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Summary:&nbsp;</font> {{data_model.content_summary}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Date1:&nbsp;</font> {{data_model.Date1}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Date2:&nbsp;</font> {{data_model.Date2}}</v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Materiality</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Writing surface:&nbsp;</font> {{data_model.writing_surface_name}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Number of folios:&nbsp;</font> {{data_model.number_of_folios}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Number of used sides:&nbsp;</font> {{data_model.number_of_used_sides}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Lines:&nbsp;</font> {{data_model.total_number_of_lines}}</v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline"><font color='#964f4c'>Shape and Size:&nbsp;</font> {{data_model.shape_and_dimensions}}</v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Images</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline" v-html="data_model.image"></v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Transcription</b></v-card-title></v-list-item>
              <v-list>
                <v-list-item v-for="(value, key) of data_model.alltext_text" :key="key">
                    <v-card-title class="headline">{{value[0]}} - {{value[1]}}</v-card-title>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Translation</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline" v-html="data_model.translation"></v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Commentary</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline" v-html="data_model.commentary"></v-card-title></v-list-item>
              <v-divider></v-divider>
              <v-list-item><v-card-title class="headline"><b>Bibliography</b></v-card-title></v-list-item>
              <v-list-item><v-card-title class="headline">{{data_model.bibliography}}</v-card-title></v-list-item>
            </v-list>
        </v-card-title>
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
      unique_id:""
    }
  },
  methods: {
    
  },
  beforeMount(){
    if (typeof this.$route.query.id !== 'undefined') {
      this.unique_id = this.$route.query.id;
      // console.log(this.unique_id);
      this.data_model = [];
      const query_url = global["url_search"] + "?id="+this.unique_id;
      let _this = this;
      console.log(query_url);
      axios.get(query_url)
      .then(function (response) {
        _this.data_model = response.data.data[0];
        // remove the code number before the code description
        _this.data_model.main_find_spot_name = _this.data_model.main_find_spot_name.split(" ").slice(1).join(" ");
        _this.data_model.specific_find_spot_name = _this.data_model.specific_find_spot_name.split(" ").slice(1).join(" ");
        _this.data_model.expedition_or_collection_name = _this.data_model.expedition_or_collection_name.split(" ").slice(1).join(" ");
        _this.data_model.current_location_name = _this.data_model.current_location_name.split(" ").slice(1).join(" ");
        _this.data_model.language_name = _this.data_model.language_name.split(" ").slice(1).join(" ");
        _this.data_model.script_name = _this.data_model.script_name.split(" ").slice(1).join(" ");
        _this.data_model.genre_name = _this.data_model.genre_name.split(" ").slice(1).join(" ");
        _this.data_model.subgenre_name = _this.data_model.subgenre_name.split(" ").slice(1).join(" ");
        _this.data_model.title_name = _this.data_model.title_name.split(" ").slice(1).join(" ");
        _this.data_model.writing_surface_name = _this.data_model.writing_surface_name.split(" ").slice(1).join(" ");
        _this.data_model.image = 'Please locate the folder that corresponds to this id:&nbsp;<i>'+_this.data_model.catalogue_number+'</i>&nbsp;on&nbsp;'+'<a href="'+_this.data_model.image+'" target="_blank">'+_this.data_model.image+'</a>';

        // remove code number for multiple values
        _this.data_model.language_name = _this.data_model.language_name.replace(/\|\d+ /g, " | ");
        _this.data_model.script_name = _this.data_model.script_name.replace(/\|\d+ /g, " | ");
        // console.log(_this.data_model);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

}

</script>