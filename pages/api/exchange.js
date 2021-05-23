// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  var cmd = req.headers.cmd;
  var reqOpt = {
    method : 'POST',
    body : cmd
  }
  fetch('http://0.0.0.0:2333', reqOpt).then(res => res.json())
  .then(data => res.status(200).json(data)).catch(e => console.error(e + "server not connected"));
  console.log("Exchange.js rogers");
}
