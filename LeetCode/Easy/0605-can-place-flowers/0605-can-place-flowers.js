/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let num =0
    if(flowerbed.length == 1  && flowerbed[0]==0 && (n==0||n==1))return true
    for (let i = 0 ; i< flowerbed.length ; i++){
        if(flowerbed[i]==1)continue
        if(flowerbed[i]==0){
            if(i ==0){
                if(flowerbed[i+1] ==0){
                    num++
                    i++
                }
            }else if(i== flowerbed.length-1){
                if(flowerbed[i-1]==0){
                    num++
                    i++
                }
            }
            
            else{
                if(flowerbed[i+1]==0 && flowerbed[i-1]==0){
                    num++
                    i++
                }
            }
        }
    }
    return num>=n
};