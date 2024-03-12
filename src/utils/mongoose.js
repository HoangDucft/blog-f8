module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: (moongoose) => {
        return moongoose ? mongoose.toObject() : moongoose;
    },
};
