type CacheEntry = {
  data: any;
  timestamp: number;
};

const cache: Record<string, CacheEntry> = {};
const CACHE_TTL = 60 * 1000;

export function getCache(key: string) {
  const entry = cache[key];
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data;
  }
  return null;
}

export function setCache(key: string, data: any) {
  cache[key] = { data, timestamp: Date.now() };
}

export function clearCache() {
  Object.keys(cache).forEach((key) => delete cache[key]);
}
