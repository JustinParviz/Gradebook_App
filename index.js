
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let average = sum / scores.length;
      return average
  }

// console.log(getAverage([65, 88, 73, 97, 85, 81, 92, 78]))