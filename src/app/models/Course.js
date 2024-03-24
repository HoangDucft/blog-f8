const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');

const Course = new mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });

module.exports = mongoose.model('Course', Course);
