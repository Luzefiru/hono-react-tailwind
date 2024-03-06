import { Context } from 'hono';
import { renderToString } from 'react-dom/server';

export default function renderClient(c: Context) {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {import.meta.env.PROD ? (
            <link rel="stylesheet" href="/static/assets/style.css" />
          ) : (
            <link rel="stylesheet" href="/src/style.css" />
          )}
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.tsx"></script>
          )}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          />
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    )
  );
}
