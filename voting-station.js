const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  const stationsArray = [];
  for (let i = 0; i < stations.length; i ++){
    let tempArray = stations[i];
    if ((tempArray[1] >= 20) && (tempArray[2] === 'school' || tempArray[2] === 'community centre')){
      stationsArray.push(tempArray[0]);
    }
  }
  return stationsArray;
}


console.log(chooseStations (stations));