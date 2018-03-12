const helloHttp = (req, res) => {
  res.send(`Hello ${req.body.name || 'World'}!`);
};

export default helloHttp;
