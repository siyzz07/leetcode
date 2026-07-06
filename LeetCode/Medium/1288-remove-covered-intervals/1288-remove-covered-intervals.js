/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    
    for(let i = 0 ; i < intervals.length ; i++){
        for(let j = 0 ; j < intervals.length ; j++){
            if(i === j) continue;
            if(intervals[j][0] >= intervals[i][0] && intervals[j][1] <= intervals[i][1]){
                intervals.splice(j, 1);
                
                if (j < i) i--; 
                j--;
            }
        }
    }

    return intervals.length;
};