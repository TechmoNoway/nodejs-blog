module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
