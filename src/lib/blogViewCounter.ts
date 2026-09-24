import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const COUNTS_FILE = path.join(DATA_DIR, 'blog-views.json');
const SEEN_FILE = path.join(DATA_DIR, 'blog-view-seen.json');

function readJson(filePath: string): Record<string, unknown> {
  if (!existsSync(filePath)) return {};
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch {
    return {};
  }
}

function writeJson(filePath: string, data: Record<string, unknown>): void {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function getViewCount(slug: string): number {
  const counts = readJson(COUNTS_FILE) as Record<string, number>;
  return counts[slug] ?? 0;
}

export function getAllViewCounts(): Record<string, number> {
  return readJson(COUNTS_FILE) as Record<string, number>;
}

// Increments the count only the first time a given IP is seen for this slug -
// refreshing or revisiting from the same IP returns the existing count
// unchanged, so only genuinely different visitors grow the number.
export function recordView(slug: string, ip: string): number {
  const counts = readJson(COUNTS_FILE) as Record<string, number>;
  const seen = readJson(SEEN_FILE) as Record<string, string[]>;

  const seenIps = seen[slug] ?? [];
  if (seenIps.includes(ip)) {
    return counts[slug] ?? 0;
  }

  seen[slug] = [...seenIps, ip];
  counts[slug] = (counts[slug] ?? 0) + 1;

  writeJson(SEEN_FILE, seen);
  writeJson(COUNTS_FILE, counts);
  return counts[slug];
}
