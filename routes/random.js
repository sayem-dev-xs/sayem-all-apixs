module.exports = {
  name: "random",
  description: "Random Number",

  handler: async (req, res) => {
    const num = Math.floor(Math.random() * 1000);

    res.json({
      status: true,
      number: num
    });
  }
};
