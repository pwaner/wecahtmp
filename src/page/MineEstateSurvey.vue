<template>
  <div>
    <br>
    <div class="mine-info-submit text-center">
      当前物业报告
    </div>
      <div class="mine-info-container"></div>
    <div class="mine-men-container">
      <!-- 取消了默认循环框calss -->
        <div v-for="item in myitems" :key='item'>
          <!-- 第一个框 物业表 -->
          <div class="mine-01">
            <div class="mine-01">名称      <div class="mine-02" style="margin-left: 48px;">{{item.title}}</div></div>
            <div class="mine-01">地址      <div class="mine-02" style="margin-left: 48px;">{{item.address}}</div></div>
            <div class="mine-01">调查情况  <div class="mine-02">{{item.surveyCase}}</div></div>
            <div class="mine-01">调查状态  <div class="mine-02">{{item.surveyState}}</div></div>
            <div class="mine-01">调查结论  <div class="mine-02">{{item.result}}</div></div>
          </div>
        </div> 
    </div>
    <no-data :items="myitems || []"></no-data>
    <!--container end-->
  </div>
</template>
<script src="../js/mineEstateSurvey"></script>
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
    padding: 0px ;
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
    /* margin-top :5px; */
    padding: 0px ; 
    width:72%;
    display: inline-block
  
 }
 .mine-03 {
    font:500 16px/18px 'Microsoft YaHei';
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-family: "Microsoft YaHei";
    /* margin-top :5px; */
    padding: 0px ; 
    width:72%;
    display: inline-block;
    margin-left: 90px;

 }
</style>

