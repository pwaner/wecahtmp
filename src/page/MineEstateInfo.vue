<template>
  <div>
    <br>
    <div class="mine-info-submit text-center">
      基本信息
    </div>
    <div class="mine-men-container">
        <div class="mine-01">行政区划 </div>
        <div class="mine-01">物业名称 <div class="mine-02">{{this.items.name}}</div></div>
        <div class="mine-01">物业地址 <div class="mine-02">{{this.items.address}}</div></div>
        <div class="mine-01">补充说明 <div class="mine-02">{{this.items.postScript}}</div></div>
        <div class="mine-03">备    注 <div class="mine-02">{{this.items.note}}</div></div>
    </div>
    <div class="mine-info-submit text-center">
      <div class="flex-1">
        <img src="../assets/mineEstateInfo.png" @click="goMineEstateSurvey()" class="img-box" >
        <div class="txt-name" style="margin: 20px">物业调查表</div>
      </div>
    </div>
    <!--container end-->
    <end-footer></end-footer>
  </div>
</template>
<script src="../js/mineEstateInfo"></script>
<style>
 .mine-01{
    font:300 16px/18px 'Microsoft YaHei';
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-family: "Microsoft YaHei";
    /* margin-top:5px; */
    padding: 10px ;
    position: relative
    
     
 }
 .mine-02{
    font:500 16px/18px 'Microsoft YaHei';
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-family: "Microsoft YaHei";
    margin-left :16px;
    padding: 0px ; 
    width:72%;
    display: inline-block
  
 }
 .mine-03 {
   font:300 16px/18px 'Microsoft YaHei';
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-family: "Microsoft YaHei";
    /* margin-top:5px; */
    margin-left: 28px;
    padding: 10px ;
    position: relative;
 }
</style>

