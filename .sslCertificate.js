const fs = require("fs");
const sslCertificate = {
  port: 443,
  host: "0.0.0.0",
  https: true,
  https: {
    key: fs.readFileSync(
      "/Users/nryn6563/workspace/WILD.thinkpool.com/newkey.pem"
    ),
    cert: fs.readFileSync(
      "/Users/nryn6563/workspace/WILD.thinkpool.com/cert.pem"
    ),
    ca: fs.readFileSync(
      "/Users/nryn6563/workspace/WILD.thinkpool.com/DigiCertCA.pem"
    )
  }
};
module.exports = sslCertificate;