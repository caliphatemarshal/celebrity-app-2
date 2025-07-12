import { Preferences } from "@capacitor/preferences";

const memoryCache: Record<string, any> = {};

export const storage = {
  async set(key: string, value: any) {
    memoryCache[key] = value;
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  },

  async get(key: string) {
    if (key in memoryCache) {
      return memoryCache[key];
    }
    const item = await Preferences.get({ key });
    if (item.value) {
      const parsed = JSON.parse(item.value);
      memoryCache[key] = parsed;
      return parsed;
    }
    return null;
  },

  // This allows direct synchronous access (only works if it's already cached)
  getSync(key: string) {
    return memoryCache[key] ?? null;
  },

  async remove(key: string) {
    delete memoryCache[key];
    await Preferences.remove({ key });
  },

  async clear() {
    for (const key in memoryCache) {
      delete memoryCache[key];
    }
    await Preferences.clear();
  },
};
