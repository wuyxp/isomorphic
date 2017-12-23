//此处放工具方法


//获取参数的方式
//1 路径参数
//2 查询参数
//3 默认值
export const getName = request => {
  let names = request.params.name ? request.params.name.split('/') : [];
  let nameObj = {};
  if(names.length>0){
    nameObj = {
      fname : names[0],
      lname : names[1]
    }
  }
  return Object.assign({
    fname: 'www',
    lname: 'yyy'
  }, request.query, nameObj);
}
