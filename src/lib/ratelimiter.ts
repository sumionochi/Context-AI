import { redis } from '@/lib/redis'
import { Ratelimit } from '@upstash/ratelimit'

// ratelimiter, that allows 10 requests per 10 seconds
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(4, '10 s'),
  prefix: '@upstash/ratelimit',
})