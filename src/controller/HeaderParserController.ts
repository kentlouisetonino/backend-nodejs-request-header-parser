import { Request, Response } from 'express'

export const HeaderParserController = async (req: Request, res: Response) => {
  const ipAddress = req.socket.remoteAddress?.split(':').pop()
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']

  res.json({
    ipaddress: ipAddress ?? undefined,
    language: language,
    software: software,
  })
}
