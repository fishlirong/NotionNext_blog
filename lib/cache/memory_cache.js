import cache from 'memory-cache'
import BLOG from '@/blog.config'

const cacheTime = BLOG.isProd ? 30 * 60 : 180 * 60 // 180 minutes for dev, 30 minutes for prod - 增加緩存時間以提升速度

export async function getCache(key, options) {
  return await cache.get(key)
}

export async function setCache(key, data, customCacheTime) {
  await cache.put(key, data, (customCacheTime || cacheTime) * 1000)
}

export async function delCache(key) {
  await cache.del(key)
}

export default { getCache, setCache, delCache }
