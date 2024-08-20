const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 6.923076923076923, value: "B" },
  { minDegree: 6.923076923076924, maxDegree: 20.76923076923077, value: "A" },
  { minDegree: 20.76923076923078, maxDegree: 34.61538461538462, value: "Z" },
  { minDegree: 34.61538461538463, maxDegree: 48.46153846153847, value: "Y" },
  { minDegree: 48.46153846153848, maxDegree: 62.30769230769232, value: "X" },
  { minDegree: 62.30769230769233, maxDegree: 76.15384615384617, value: "W" },
  { minDegree: 76.15384615384618, maxDegree: 90.00000000000002, value: "V" },
  { minDegree: 90.00000000000003, maxDegree: 103.8461538461539, value: "U" },
  { minDegree: 103.8461538461540, maxDegree: 117.6923076923077, value: "T" },
  { minDegree: 117.6923076923078, maxDegree: 131.5384615384616, value: "S" },
  { minDegree: 131.5384615384617, maxDegree: 145.3846153846154, value: "R" },
  { minDegree: 145.3846153846155, maxDegree: 159.2307692307693, value: "Q" },
  { minDegree: 159.2307692307694, maxDegree: 173.0769230769231, value: "P" },
  { minDegree: 173.0769230769232, maxDegree: 186.923076923077, value: "O" },
  { minDegree: 186.923076923078, maxDegree: 200.7692307692308, value: "N" },
  { minDegree: 200.7692307692309, maxDegree: 214.6153846153847, value: "M" },
  { minDegree: 214.6153846153848, maxDegree: 228.4615384615385, value: "L" },
  { minDegree: 228.4615384615386, maxDegree: 242.3076923076924, value: "K" },
  { minDegree: 242.3076923076925, maxDegree: 256.1538461538462, value: "J" },
  { minDegree: 256.1538461538463, maxDegree: 270, value: "I" },
  { minDegree: 270.0000000000002, maxDegree: 283.8461538461539, value: "H" },
  { minDegree: 283.8461538461540, maxDegree: 297.6923076923078, value: "G" },
  { minDegree: 297.6923076923079, maxDegree: 311.5384615384616, value: "F" },
  { minDegree: 311.5384615384617, maxDegree: 325.3846153846155, value: "E" },
  { minDegree: 325.3846153846156, maxDegree: 339.2307692307693, value: "D" },
  { minDegree: 339.2307692307694, maxDegree: 353.0769230769232, value: "C" },
  { minDegree: 353.0769230769233, maxDegree: 360, value: "B" },
];
//Size of each piece
const data = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      spinBtn.disabled = false;
      finalValue.innerHTML = `<p style="color:purple;font-size: 2em;">${i.value}</p>`;
      const soundPath = `sound/${i.value}.wav`;
      const audio = new Audio(soundPath);
      audio.play();
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});