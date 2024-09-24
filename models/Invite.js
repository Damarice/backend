const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Invite = mongoose.model('Invite', inviteSchema);

module.exports = Invite;
