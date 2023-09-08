const { PurgeCSS } = require('purgecss');
const fs = require('fs');

(async () => {
  const purgecss = await new PurgeCSS().purge({
    content: ['index.html'],
    css: ['./assets/bootstrap/bootstrap.css'],
  });

  fs.writeFileSync('./assets/bootstrap/bootstrap.css', purgecss[0].css);
})();