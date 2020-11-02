const config = require('./config/config.json');
const drpc = require('discord-rpc');
const rpc = new drpc.Client({
    transport: "ipc" // ipc 
});

// YOU NEED TO PUT YOUR PRESENCES ID AND CLIENT SECRET IN config/config.json OR ELSE IT WONT WORK

try { 
    
    rpc.on("ready", () => {
    rpc.setActivity({ //put what ever you want here

        details: "doing nothing", 
        state: "test",
        startTimestamp: new Date(),
        largeImageKey: "img", //your own images name 
        largeImageText: "Custom", // any text 
        smallImageKey: "small", // your small images name
        smallImageText: "02" // any text
    });

    console.log("RPC is online!");
})

let id = config.id
let token = config.token

rpc.login({
    clientId: id,
    accessToken: token
});

} catch(e) {
    console.log(e);
}