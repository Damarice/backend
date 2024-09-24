const Invite = require('../models/Invite');

// Dummy function to simulate link generation
const generateShareLink = (email) => {
    return `http://example.com/register?ref=${encodeURIComponent(email)}`;
};

exports.registerEmail = async (req, res) => {
    const { email } = req.body;

    // Validate the email (simple check)
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    try {
        // Create a new Invite document
        const newInvite = new Invite({ email });
        await newInvite.save();

        const registrationLink = generateShareLink(email);
        return res.status(200).json({ registrationLink });
    } catch (error) {
        console.error('Error saving invite:', error);
        return res.status(500).json({ message: 'Server error.' });
    }
};
