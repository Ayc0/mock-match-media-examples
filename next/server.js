const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

require("mock-match-media/polyfill");

const { setMedia } = require("mock-match-media");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    setMedia({
      prefersColorScheme: "dark",
    });

    app.render(req, res, pathname, query);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
