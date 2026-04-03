const fs = require("fs");
const path = require("path");

function loadRoutes(app) {
  const routesPath = path.join(__dirname, "../routes");
  const apiList = [];

  fs.readdirSync(routesPath).forEach(file => {
    if (file.endsWith(".js")) {
      const route = require(`../routes/${file}`);

      if (route.name && route.handler) {
        app.get(`/api/${route.name}`, route.handler);

        apiList.push({
          name: route.name,
          description: route.description || "No description"
        });

        console.log("✅ Loaded API:", route.name);
      }
    }
  });

  return apiList;
}

module.exports = loadRoutes;
