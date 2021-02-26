import { NowRequest, NowResponse } from '@vercel/node'

interface ResponseBody {
  message: string
  number: number
}

function randomNumber(maximum: number) {
  return Math.floor(Math.random() * maximum) + 1
}

export default async function handler(
  request: NowRequest,
  response: NowResponse
) {
  const { name = 'World' } = request.query
  const body: ResponseBody = {
    message: `Hello ${name}`,
    number: randomNumber(100),
  }
  response.setHeader('content-type', 'application/json')
  response.status(200).send(JSON.stringify(body))
}
