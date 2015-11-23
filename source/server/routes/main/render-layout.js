export default (rootMarkup) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React App</title>
      </head>
      <body>
        <div id='root'>${ rootMarkup }</div>
        <script src="/static/index.js"></script>
      </body>
    </html>
  `;
};