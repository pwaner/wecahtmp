import xhr from './xhr/http'
import ENV from 'services/xhr/config'
/**
 * estates获取
 */
class MineInfoService {
  loadEstateInfo (param) {
    // page=1&start=0&limit=25
    return xhr.fetch('/estates?' + param, {
      type: 'GET',
      needAuth: true
    })
  }
  /**
 * 订阅列表获取
 */
  loadSubscribleInfo (filter) {
    // http://localhost:1962/api/desktop/subscribes
    // ?_dc=1591607251730&page=1&start=0&limit=20
    // &filter=[{"property":"subjectId","value":8121,"exactMatch":true}]
    return xhr.fetch('/subscribes?' + filter, {
      type: 'GET',
      needAuth: true
    })
  }
  /*
   物业订阅
   */
  postSubscrible(estate) {
    return xhr.fetch('/subscribes/available', {
      type: 'POST',
      data: estate
    })
  }
   /*
   物业订阅信息
   */
  getSubscrible(filter) {
    return xhr.fetch('/subscribes/available?' + filter, {
      type: 'GET',
      needAuth: true
    })
  }
   /*
   取消物业订阅
   */
  cancelSubscribe(eid) {
    return xhr.fetch('/subscribes/' + eid, {
      type: 'DELETE'
    })
  }
  /** 切换场景 */
  changeToScene(bscene) {
    // http://cloud.zayutech.com/api/desktop/session/1
    // {"scene":{"id":10814,"crType":11301,"role":4194304,"roleAd1":0,"roleAd2":0,"eid":8100,"type":10300001,"name":"系统维护部","parentEId":1000,"parentName":"广东能兴科技发展有限公司","parentType":10211000}}
    var data = {
      scene: bscene
    }
    return xhr.fetch('/session/1', {
      type: 'PUT',
      data: data
    })
  }
  /**
   * 获取告警信息
   */
  getAlamList (param) {
    return xhr.fetch('/estates/alarms?' + param, {
      type: 'GET',
      needAuth: true
    })
  }
  /**
   * 获取警情信息
   */
  getPoliceList (openid) {
    return xhr.fetch('/estates/policeList', {
      type: 'POST',
      needAuth: true,
      data: {
        openid: openid,
        appid: ENV.appid
      }
    })
  }
  /**
   * 保存或修改账户信息
   * @param
   */
  updateAccount ({name, gender, telephone, birthday, idCard, socialSecurityNo, areaId, address}) {
    return xhr.fetch('/userinfo/updateAccount', {
      type: 'POST',
      needAuth: true,
      data: {
        name: name,
        gender: gender,
        telephone: telephone,
        birthday: birthday,
        idcard: idCard,
        socialSecurityNo: socialSecurityNo,
        areaId: areaId,
        address: address
      }
    })
  }

    /**
   * 物业调查表获取
   */
  loadEstateSurvey (filter) {
    // filter :[{'property': 'estateId', 'value': ezEid, 'exactMatch': true}, {'property': 'appType', 'operator': '=', 'value': 201}]
    return xhr.fetch('/appEstates?' + filter, {
      type: 'GET',
      needAuth: true
    })
  }

}

// 实例化后导出，全局单例
export default new MineInfoService()
