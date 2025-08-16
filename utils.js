function isAdmin(token) {
  return token === process.env.ADMIN_TOKEN;
}

function formatPredictionResult(result) {
  return `Prediction: ${result.prediction}\nInput: ${result.input}\nTime: ${new Date(result.timestamp).toLocaleString()}`;
}

module.exports = {
  isAdmin,
  formatPredictionResult,
};
