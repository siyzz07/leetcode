/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  let year = date.split('-')[0]
  let startYear  = new Date(`${year}`)
  let endYear = new Date(date)
  let milliSeconds = endYear - startYear
   return (milliSeconds/(24*60*60*1000))+1
  
  



};