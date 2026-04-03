const axios = require("axios");

module.exports = {
  name: "advice",
  description: "Get random advice",

  handler: async (req, res) => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");

      res.json({
        status: true,
        advice: response.data.slip.advice
      });
    } catch (e) {
      res.json({ error: "API failed" });
    }
  }
};
