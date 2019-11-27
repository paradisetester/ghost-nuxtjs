<template>
  <div>
<section class="tv-page-title-section tv-bg-theme-col tv-padd-tb-40">
                <div class="container">
                    <div class="flex-box-view-one">
                        <div class="tv-page-title"><h1>{{slug}}</h1></div>
                        <div class="tv-breadcrumb-box">
                            <ul class="breadcrumb">
                             <li class="breadcrumb-item">
								<a href="/">Home</a> /
								<a href="/tag">Tag</a> / 
								<a :href="'/tag/'+slug">{{slug}}</a>
							</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
			
<section class="tv-content-container tv-section-padding"> 
		<div class="container">
			<div class="row tv-blog-style-grid">
		
				
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="fpost in posts">
                            <article class="author-blog">
                                <div class="post-thumnail">
                                    <div class="post-thumnail-box">
                                        <div class="post-image" :style="{ backgroundImage: `url(${fpost.feature_image})` }" ></div>
                                    </div>
                                    <a class="tv-post-overlay" :href="'/posts/'+fpost.slug">
                                        <i class="ti-exchange-vertical"></i>
                                    </a>
                                </div>
                                <div class="post-extra-details">
                                    <div class="post-categories">
										<a :href="'/tag/'+tag.slug" v-for="tag in fpost.tags.slice(0,5)">{{tag.name}}, </a> 
										
									</div>
                                    <div class="post-title">
                                        <h4><a :href="'/posts/'+fpost.slug">{{fpost.title}}</a></h4>
                                    </div>
                                    <div class="post-meta">
                                        <span class="posts-date">
                                            <i class="ti-calendar"></i> {{ $moment(fpost.published_at).format('MM/DD/YYYY') }}</span>
                                        
                                         <span class="post-author" v-for="author in fpost.authors" >
											<a :href="'/author/'+author.slug">{{author.name}}</a>
									   </span>
                                    </div>
                                </div>
                            </article>
                        </div>						
		</div>				
		</div>				
    </section>
	
  </div>
</template>

<script>

import { ghostAPI, postIndexFields } from '@/utils/ghost'
import moment from 'moment'

 


export default {
data: () => ({   
    slug: '',
    posts: ''
  }),
   async asyncData ({route, params}) {  
		
		
		const slug = params.slug
		const posts = await ghostAPI().posts.browse({
				  order: 'published_at desc',
				  fields: postIndexFields,
				  formats:'html,plaintext',
				  include:'authors,tags',
				  filter:'tag:'+slug,
				  limit: 12				  	  
				});
				
	return {
     posts,slug
    }
   }
  
}
</script>


