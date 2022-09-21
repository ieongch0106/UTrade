import mongoose from 'mongoose';

export const connectDB = async (key) => {
    try {
        const connection = await mongoose.connect(key);
        console.log(connection.mongoose.connection.db.collection("UTrade"));
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}