import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { prisma } from '../../../services/prisma'
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

  const { sessionId } = req.body

  await prisma.purchase.create({
    data: {
      checkout_id: sessionId,
      userId: session.user.id,
    },
  })

  return res.status(201).end()
}
