import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 })
  }
}

// POST create post
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, content, authorId, published = false } = body

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: parseInt(authorId),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 })
  }
} 