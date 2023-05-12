<template>
  <div class="home">
    <SlidePage />
    <SectionPartner />
    <SectionCollections />
    <SectionTeam :datas="dataTeams" title="Our Team"/>
    <SectionTeam :datas="dataProvides" title="We Provide"/>
    <SectionTestimonials />
    <SectionAskedQuestions />
    <BannerFooter />
    <FooterPage />
    
  </div>
</template>

<script>
import SlidePage from '@/components/SlidePage.vue'
import SectionPartner from '@/components/SectionPartner.vue'
import SectionCollections from '@/components/SectionCollections.vue'
import SectionTeam from '@/components/SectionTeam.vue'
import SectionTestimonials from '@/components/SectionTestimonials.vue'
import SectionAskedQuestions from '@/components/SectionAskedQuestions.vue'
import BannerFooter from '@/components/BannerFooter.vue'
import FooterPage from '@/components/FooterPage.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    SlidePage,
    SectionPartner,
    SectionCollections,
    SectionTeam,
    SectionTestimonials,
    SectionAskedQuestions,
    BannerFooter,
    FooterPage,
  },
  computed:{
    ...mapGetters(['dataTeams', 'dataProvides'])
  },

}
</script>
