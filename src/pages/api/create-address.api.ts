import { NextApiResponse, NextApiRequest } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { prisma } from '../../services/prisma'
import { authOptions } from './auth/[...nextauth].api'

type AddressBody = {
  city: string
  client: string
  complement: string
  district: string
  fone: string
  number: string
  state: string
  street: string
  type: 'work' | 'house'
  zip: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const address: AddressBody = req.body

  const response = await prisma.address.create({
    data: {
      city: address.city,
      client: address.client,
      complement: address.complement,
      district: address.district,
      fone: address.fone,
      number: address.number,
      state: address.state,
      street: address.street,
      type: address.type,
      zip: address.zip,
      userId: session.user.id,
    },
  })

  return res.status(201).json({ response })
}
