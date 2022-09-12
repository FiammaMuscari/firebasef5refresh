import { next, rewrite } from '@vercel/edge'

// Run `vercel dev`
// Navigate to localhost:3000/other
// `rewrite` has no effect

export default function middleware (request) {
  const url = new URL(request.url)
  const before = url.toString()

  // New path
  url.pathname = '/'

  const after = url.toString()
  console.log(`rewriting ${before} to ${after}`)

  // Uncommenting this works
  // return Response.redirect(url)

  // Uncommenting this also works
  // return next()

  // Nothing happens
  return rewrite(url)
}

export const config = {
  matcher: ['/other']
}