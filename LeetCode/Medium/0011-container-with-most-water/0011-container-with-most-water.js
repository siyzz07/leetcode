/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length -1
    maxx = 0
    while(left<right){
        let max = height[left] > height[right] ? height[right] :height[left]
        let distance = right-left
        area = max*distance 
        if(area >maxx){
            maxx = area
        }  
        if( height[left] > height[right]){
            right-=1
        }else{
            left+=1
        }
    }
    return maxx
};