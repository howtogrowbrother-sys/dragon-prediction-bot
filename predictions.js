// Simple prediction logic stub (replace with real logic/model)
function makePrediction(input) {
  // Implement actual prediction logic here
  const options = ['Dragon', 'Tiger'];
  const prediction = options[Math.floor(Math.random() * options.length)];
  return { prediction, input, timestamp: Date.now() };
}

module.exports = { makePrediction };