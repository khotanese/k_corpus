(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{386:function(t,e,r){"use strict";r.r(e);var n={url_search:"https://oopus.info/k_corpus/query_main.php",main_find_spot_list:["Khotan","Dunhuang",""],specific_find_spot_list:["Dandan-Uiliq","Domoko","Dunhuang",""],expedition_or_collection_list:["Hedin","Hoernle",""],current_location_list:["BL","BNF","St. Peterburg","Stockholm",""],language_list:["1-New Persian","2-Arabic","3-Bactrian","4-Sogdian","5-Middle Persian","6-Khotanese","7-Bilingual (name languages) ","8-Trilingual (name languages)","9-Chinese",""],linguistic_stage_list:["Middle Khotanese",""],script_list:["1-Arabic","2-Hebrew","3-Pahlavi","4-Greek","5-Sogdian","6-Brahmī","7-Chinese","8-Tibetan",""],script_type_list:["cursive",""],genre_list:["secular",""],subgenre_list:["contract",""],archive_list:["2",""],title_list:["Aparimitāyuḥ-sūtra","Vajracchedikā- prajñāpāramitā-sūtra","Aparimitāyuḥ-sūtra","Jātakastava","Vajracchedikā- prajñāpāramitā-sūtra","Jīvakapustaka","Siddhasāra","Kauśika-sūtra","Chinese Vajracchedikā in Khotanese cursive ","Triśaraṇa","Mañjuśrīnairātmyāvatāra-sūtra","Hṛdayasūtra","Preface to the Hṛdayasūtra",""],date1_list:["Year 17, 5th day, Skarhvara month","Year 11. 8th days. Cvataja month","7th month; 22th day","7th month 10th day","5th month. 6th day","Year 22. 23rd days. Skarihvara month","Year 17. 17th days. Rrahaja month","Year 20. 20th days. Rrahaja month (Line 1-8) 26th days. Rrahaja month (Line 9-11)","Year 19. 29th days. Bramkhaysja month","Year 20. 13rd days. Cvataja month","Year 20. 10thdays. Kaja month","R: Year 36. 11st days. Raruya month","Year 35. ","Year 21. 18th days. Raruya month.","17th days. Ttymjara month","11th days. Hamdyaja month.","Year 35. 21st days. Rrahaja month","Year 35. 28th days. Rrahaji month","Year 33. 29th days. Ttumjara month","22nd days. Kaja month","Year 7. 14th days. Bryamkhayaja month.","Year 13. 9th days, Manamja month","3rd month 7th day","b: 12th month 30th day","4th month 20 day","11th month 3th day","Year 10. 4th month. 20th day","Horse year, 9th year of Thin Hina (= Tianxing), 6/19","Tianzun 4","3rd year of Thyaina śīva (= Tianshou), 6th month, 10th day","24th regnal year, 3th month, 10th day ","4th year of Thyenä tcūnä (= Tianzun), the first month, the 9th day","Tiger year, 7th month, 3rd day","Thin hīni (= Tianxing) horse year, 10th month",""],date2_list:["958","965","970","971","982","942-943","955/966","967-78","967-977","10th century","10th century, a hare year","Chinese date = 7 (?) June 746",""],writing_surface_list:["Cloth","Paper","Wood",""]},o=r(92),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);r(50),r(5),r(32),r(61),r(52),r(24),r(11),r(64),r(68),r(53);var n=r(390),o=r.n(n),l=r(386);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,h=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){h=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(h)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={data:function(){return{catalogue_number:"",site_mark_or_collection_number:"",catalogue_number_res:[],data_model:[]}},methods:{submit_data:function(){this.data_model=[];var t=l.default.url_search+"?catalogue_number="+this.catalogue_number+"&site_mark_or_collection_number="+this.site_mark_or_collection_number,e=this;o.a.get(t).then((function(t){var r,n=h(t.data.data);try{for(n.s();!(r=n.n()).done;){var o=r.value,l=[];l.unique_id=o.id,l.catalogue_number_res=o.catalogue_number,""!=o.content_summary?l.description=o.content_summary:""!=o.title&&(l.description=o.title),e.data_model.push(l)}}catch(t){n.e(t)}finally{n.f()}console.log(e.data_model)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.$route.query.id},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){"Enter"===e.key&&t.submit_data()}))}},m=r(92),_=r(122),y=r.n(_),v=r(367),f=r(403),k=r(371),j=r(434),w=r(404),T=r(179),C=r(117),Y=r(437),x=r(463),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",lg:"11",sm:"8",md:"6"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[r("b",[t._v("\n        Query Conditions\n      ")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Catalogue No."},model:{value:t.catalogue_number,callback:function(e){t.catalogue_number=e},expression:"catalogue_number"}})],1),t._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"Site mark"},model:{value:t.site_mark_or_collection_number,callback:function(e){t.site_mark_or_collection_number=e},expression:"site_mark_or_collection_number"}})],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.submit_data}},[t._v("\n          Search\n        ")])],1)],1)],1)],1),t._v(" "),r("v-card",[r("v-card-text",[r("v-row",[r("v-list",t._l(t.data_model,(function(e){return r("v-list-item",{key:e.unique_id},[r("v-card-title",{staticClass:"headline"},[r("a",{attrs:{href:"./page?id="+e.unique_id,target:"_blank"}},[t._v(t._s(e.catalogue_number_res.toLowerCase()))]),t._v("    "+t._s(e.description))])],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:v.a,VCard:f.a,VCardText:k.a,VCardTitle:k.b,VCol:j.a,VDivider:w.a,VList:T.a,VListItem:C.a,VRow:Y.a,VTextField:x.a})}}]);