//EXAMPLE 1

require('dotenv').config()
const { ethers, providers } = require("ethers");


console.log()

async function main() {
    /**
     * The WebSocketProvider connects to a JSON-RPC WebSocket compatible
     *  backend which allows for a persistent connection, multiplexing requests 
     * and pub-sub events for a more immediate event dispatching.
     */

    const provider = new ethers.providers.WebSocketProvider(process.env.ETH_RPC) //replace the Param with your endpoint 

    /**
     * provider.on( eventName , listener )
     * Add a listener to be triggered for each eventName event.     
     */

    provider.on('pending', async (tx) => {
        //prints out pending transactions aka the mempool
        // console.log(tx);

        const txInfo = await provider.getTransaction(tx);
        //print the transaction info a bit more useful! 
        console.log(txInfo);

        //in the next article we'll set up a filter to listen for
        //specific tx using the function signature.

    })

}
main();


//For a deeper dive into how exactly the methods work
//check out the Ether.js Docs.