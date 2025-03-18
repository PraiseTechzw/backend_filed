import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET single user
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(params.id),
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        posts: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 })
  }
}

// PUT update user
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, email } = body

    const user = await prisma.user.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name,
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 })
  }
}

// DELETE user
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(params.id),
      },
    })

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' }, { status: 500 })
  }
} 