const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    }

    const sample = parseFloat(sampleActivity);
    if (sample > 0 && sample <= MODERN_ACTIVITY) {
        return Math.ceil((Math.log(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD) / 0.693);
    }
    
    return false;
}