module.exports = {
  name: "hello",
  description: "Hello API",

  handler: async (req, res) => {
    res.json({
      status: true,
      message: "Hello World 👋"
    });
  }
};
