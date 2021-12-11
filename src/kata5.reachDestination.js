const reachDestination = (distance, speed) => {
    let journeyTime = distance / speed; 
   let  journeyTime2 = Math.round(journeyTime * 2) / 2 
    return `I should be there in ${journeyTime2} hours.`
   
};

module.exports = reachDestination;
