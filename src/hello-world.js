const helloHttp = (req, res) => {
  res.send(`Hello ${req.body.name || ' d World'}!`);
};

export default helloHttp;