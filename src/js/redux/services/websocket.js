const Nes = require('nes');

export function subscribeToLiveUpdates(callback) {
  console.log('tracking', 'start');
  const client = new Nes.Client('ws://localhost:8008');
  const start = async () => {

    await client.connect();
    const handler = (update, flags) => {
      callback(update);
      console.log('tracking', update)
    };

    client.subscribe('/tracking', handler);
  };

  start();

  return client;
}
