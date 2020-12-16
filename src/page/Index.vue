<template>
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    > 
    <div>
      <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
    <main-btn-list />
    </div>
    </scroll>
</template>

<script src="../js/index.js"></script>
