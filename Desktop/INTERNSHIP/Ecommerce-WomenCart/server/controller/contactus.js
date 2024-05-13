const ContactUsModel = require("../models/contactus");

class cantactus {
  async contactUs(req, res) {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const contact = new ContactUsModel({ name, email, message });
      await contact.save();
      return res.json({ success: "Your message has been received" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

const contactusController = new cantactus();
module.exports = contactusController;
