<template>
<div class="header-section" id="page">
   <header class="tv-header-area">
               
                <div class="tv-middle-header">
                    <div class="container">
                        <div class="tv-logo text-center">
                            <a href="/"><img src="~assets/images/logo.png" data-src="~assets/images/logo.png" alt="logo" width="208px" ></a>
                        </div>
                    </div>
                </div>

             
			    <div>
				  <b-navbar toggleable="lg" type="light" variant="info">
					<b-navbar-brand href="#"></b-navbar-brand>
					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
					  <b-navbar-nav class="navbar-nav tv-reset-navbar">
						<b-nav-item class="nav-item" :href="navs.url"  v-for="navs in navigation">{{navs.label}}</b-nav-item>
						<b-nav-item class="nav-item" href="/search"><i class="ti-search"></i></b-nav-item>
					  </b-navbar-nav>

					  
					</b-collapse>
				  </b-navbar>
				</div>              
                
            </header>
			</div>
</template>


<script>
import Vue from 'vue'

import axios from 'axios'
import moment from 'moment'
import backgroundUrl from '~/assets/images/footer-bg.jpg'


import {  API_KEY, HOST_URL } from '../../config/constants'

import { BNavbar, BNavbarToggle } from 'bootstrap-vue'

Vue.component('b-navbar', BNavbar, 'b-navbar-toggle', BNavbarToggle)

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
