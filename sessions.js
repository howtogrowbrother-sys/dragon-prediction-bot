// Simple in-memory session management (replace with DB for production)
const sessions = {};

function getSession(userId) {
  if (!sessions[userId]) {
    sessions[userId] = {};
  }
  return sessions[userId];
}

function clearSession(userId) {
  delete sessions[userId];
}

module.exports = {
  getSession,
  clearSession,
};
