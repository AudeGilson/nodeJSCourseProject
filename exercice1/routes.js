
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    return rootPath(res);
  }
  if (url === '/users') {
   return usersPath(res);
  }
  if (url === '/create-user' && method === 'POST') {
   return createUserPath(req, res);
  }
};

function rootPath (res) {
  res.write('<html>');
  res.write('<head><title>Hello there</title></head>');
  res.write('<body><h1>Greeting old friend</h1>');
  res.write('<form action="/create-user" method="POST">');
  res.write('<label for="username">Enter your username</label><br>');
  res.write('<input type="text" name="username"><button type="submit">Ok</button></form></body>');
  res.write('</html>');
  return res.end();
}

function usersPath (res){
  res.write('<html>');
  res.write('<head><title>users</title></head>');
  res.write('<body><ul>');
  res.write('<li>General Kenobi</li>');
  res.write('<li>Anakin</li>');
  res.write('<li>Luke</li>');
  res.write('</ul></body>');
  res.write('</html>');
  return res.end();
}

function createUserPath (req, res){
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const username = parsedBody.split('=')[1];
    console.log(username);
    res.writeHead(302, {location: '/users'});
    return res.end();
  });
}

exports.handler = requestHandler;
