'use strict';
var { QuestionsList } = require('./quizData');

const Hapi = require('hapi');
const Nes = require('nes');

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8008,
  routes: {
    cors: {
      origin: ['http://localhost:8080'],
      additionalHeaders: ['x-token-token']
    }
  }
});

// Add the route
server.route({
  method: 'GET',
  path: '/questions',
  handler: function (request, h) {
    return QuestionsList;
  }
});

// Add the route
server.route({
  method: 'GET',
  path: '/testtracking',
  handler: function (request, h) {
    setTimeout(() => {
      sendTrackingData({
        id: 6,
        date: new Date()
      })
    }, 1);
    return true;
  }
});

// Add the route
server.route({
  method: 'POST',
  path: '/trackpage',
  handler: function (request, h) {
    setTimeout(() => {
      sendTrackingData({
        id: request.params.id,
        page: request.params.page,
        date: new Date()
      })
    }, 1);
    return true;
  }
});

function broadcastData() {
  setInterval(() => {
    sendTrackingData({
      id: Math.floor(Math.random() * 5) + 1,
      date: new Date()
    });
  }, 5000);
}

function sendTrackingData(data) {
  server.publish('/tracking', data);
}

// Start the server
async function start() {

  try {
    await server.register(Nes);
    server.subscription('/tracking');
    await server.start();
    broadcastData();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();