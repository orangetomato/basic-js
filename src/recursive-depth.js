module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
    
        for (let i = 0; i < arr.length; i++) {
            if ( Array.isArray(arr[i]) ) {
                let nestedDepth = this.calculateDepth(arr[i]);
    
                if (depth < 1 + nestedDepth) {
                    depth = 1 + nestedDepth;
                }
            }
        }
    
        return depth;
    }
}