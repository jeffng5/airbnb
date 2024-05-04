<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Make Reservation</template>

    
    <a href="reservation.html/" target="_blank" rel="noopener">Reservation</a>
    Book date now 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Lodging Amenities</template>

    Self check-in, fireplace, full kitchen, dining, gameroom, living room, 3 bed / 2 bath, property close to Plattekill Mt and Bellayre Mt for skiing, hiking, and many <a href='amenities.html'>more</a>.   

    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Gallery</template>

Please visit <a href="/gallery">Gallery</a> to view what Black Diamond Esacpe has to offer
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Reviews</template>

Please see guest <a href='reviews.html'>Reviews</a> about Black Diamond Escape
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>

Questions? We will respond via email promptly!
  </WelcomeItem>
</template>
