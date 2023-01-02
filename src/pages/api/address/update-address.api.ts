import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '../../../services/prisma'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'

type Body = {
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
  addressId: string
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

  const address: Body = req.body

  await prisma.address.update({
    where: {
      id: address.addressId,
    },

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
    },
  })

  return res.status(201).end()
}
