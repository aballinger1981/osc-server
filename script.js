const OSC = require('osc-js');

const plugin = new OSC.WebsocketServerPlugin();
const osc = new OSC({ plugin: plugin });

// listen for invoing messages

osc.on('/test', (message) => {
  console.log(message.args);
  osc.send(new OSC.Message('/response', Math.random()));
});

// sent messages frequently when socket is ready

osc.on('open', () => {
  osc.send(new OSC.Message('/response', Math.random()));
});

osc.open(); // start server