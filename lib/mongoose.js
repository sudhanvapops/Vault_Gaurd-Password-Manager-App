import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

const connection = {}

async function dbconnect() {
    
    // To check is already connected
    if (connection.isConnected) {
        console.log("Alreday connected");
        return
    }

    try {
       const db = await mongoose.connect(URI || "");
       connection.isConnected = db.connections[0]._readyState
       console.log("Connection established");
       
    } catch (error) {
        console.log("Db connection failed");
        process.exit(1)
    }
}

export default dbconnect