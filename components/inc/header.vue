<template>
<div class="header-section" id="page">
   <header class="tv-header-area">
               
                <div class="tv-middle-header">
                    <div class="container">
                        <div class="tv-logo text-center">
                            <a href="/"><img :src="setting.logo" alt="logo" width="208px" :title="setting.title"></a>
                        </div>
                    </div>
                </div>

              <!-----------Navigation----------------->
                <div class="tv-main-menu tv-sticky-header bg-light">
                    <div class="navbar-default container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                                <span class="ti-menu"></span>
                            </button>
                            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">							
                                <ul class="navbar-nav tv-reset-navbar"> 								
                                    <li class="nav-item" v-for="navs in navigation">
                                        <a class="nav-link"  :href="navs.url">{{navs.label}}</a>
                                    </li> 
									 <li class="nav-item search-list"><a href="/search" class="tv-search-btn"><i class="ti-search"></i></a></li>	
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
                <!-----------End----------------->
                
            </header>
			</div>
</template>


<script>
import axios from 'axios'
import moment from 'moment'
import backgroundUrl from '~/assets/images/footer-bg.jpg'

const HOST_URL = 'https://knowzone.ghostzones.ml/ghost/api/v2/content/';
const API_KEY = '688d1a6cb10c9e8456723dd679';
			 
export default {
  name: 'branch',
  data: () => ({   
    navigation: '',
    setting: ''
  }),
  methods: {
	 
	  getSettings: function(){		
		  
			  axios.
			  get(HOST_URL+'/settings/?key='+API_KEY)
			.then(response => {
				
			  this.setting = response.data.settings
			  this.navigation = response.data.settings.navigation
			  this.loading = false
			 
			})
			.catch(error => {
			  console.log(error)
			})
		}
    },
  beforeMount(){
    
    this.getSettings();
   
	
  }
}
</script>
