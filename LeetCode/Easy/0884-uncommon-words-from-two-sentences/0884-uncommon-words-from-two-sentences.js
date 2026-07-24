/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let ss =s1+" "+s2
  let obj={}
  let s=ss.split(' ')
  let arr=[]
  for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1
        }else{
            obj[s[i]]=obj[s[i]]+1
        }
  }
    for(i in obj){
        if(obj[i]==1){
            arr.push(i)
        }
    }
    return arr
  
};