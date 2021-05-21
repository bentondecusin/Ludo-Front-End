// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  console.log("roger")
  fetch('http://0.0.0.0:2333').then(res => res.json())
  .then(data => res.status(200).json(data));
}
