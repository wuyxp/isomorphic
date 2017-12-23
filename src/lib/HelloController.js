//重新封装controller方法
import nunjucks from 'nunjucks';

import { getName } from './Utils.js';
import Controller from './Controller';
export default class HolleController extends Controller{
  toString(callback){
    nunjucks.render('./dist/index.html', getName(this.context), (err, html) => {
      if(err){
        return callback(err, null);
      }
      callback(null, html);
    })
  }
}