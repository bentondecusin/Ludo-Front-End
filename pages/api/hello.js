// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var last_update = "s"
var last_board =({board : {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, d: 6, p: 0}})
export default function handler(req, res) {
  // if (req.headers.last_update != null) 
  last_update = req.headers.last_update

  if (req.body != "" && JSON.parse(req.body) != null) 
    last_board = JSON.parse(req.body)
  res.status(200).json({
    last_update:last_update,
    last_board : last_board
    })
}
