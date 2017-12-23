//重新封装controller方法
import nunjucks from 'nunjucks';

import { getName } from './Utils.js';
import Controller from './Controller';
export default class HolleController extends Controller{
  toString(callback){
    nunjucks.renderString('<p>hello {{fname}} {{lname}} </p>', getName(this.context), (err, html) => {
      //将生成后的body字符串，传入application的addRouter方法中
      if(err){
        return callback(err, null);
      }
      callback(null, html);
    })
  }
}