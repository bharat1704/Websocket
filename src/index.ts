import { WebSocketServer } from 'ws';
// import {}

const wss = new WebSocketServer({ port: 8080 });

//event handler similar to app.use("/", => req, res)
wss.on("connection", function(socket) {
    
    setInterval(()=> { socket.send(`the CURRENT solana prices is  = ${ Math.random() }`) }, 3000)
        
        

} )
