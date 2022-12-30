import { NextApiResponse, NextApiRequest } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

	
	
  return res.status(201).json({})
}
