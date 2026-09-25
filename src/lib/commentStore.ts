import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { COMMENT_SEEDS, type CommentEntry, type CommentReply } from '../data/commentSeeds';

// User-submitted comments/replies are stored here (gitignored, outside
// public/), layered on top of the static COMMENT_SEEDS that ship with the
// code. Replies are keyed by comment id rather than nested under a slug's
// comment list, so a visitor can reply to a seed comment (which has no
// entry of its own in this file) just as easily as to a submitted one.
const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'blog-comments.json');

interface SlugStore {
  comments: CommentEntry[];
  replies: Record<string, CommentReply[]>;
}

type Store = Record<string, SlugStore>;

function readStore(): Store {
  if (!existsSync(STORE_FILE)) return {};
  try {
    return JSON.parse(readFileSync(STORE_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

function writeStore(store: Store): void {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(STORE_FILE, JSON.stringify(store, null, 2));
}

function emptySlugStore(): SlugStore {
  return { comments: [], replies: {} };
}

export function getComments(slug: string): CommentEntry[] {
  const seedComments = COMMENT_SEEDS[slug] ?? [];
  const slugStore = readStore()[slug] ?? emptySlugStore();

  const allTopLevel = [...seedComments, ...slugStore.comments];
  return allTopLevel
    .map((c) => ({
      ...c,
      replies: [...(c.replies ?? []), ...(slugStore.replies[c.id] ?? [])].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      ),
    }))
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}

export function getRatingSummary(slug: string): { average: number; count: number } {
  const rated = getComments(slug).filter((c): c is CommentEntry & { rating: number } => typeof c.rating === 'number');
  if (rated.length === 0) return { average: 0, count: 0 };
  const sum = rated.reduce((acc, c) => acc + c.rating, 0);
  return { average: Math.round((sum / rated.length) * 10) / 10, count: rated.length };
}

export function addComment(slug: string, input: { name: string; text: string; rating?: number }): CommentEntry {
  const store = readStore();
  const slugStore = store[slug] ?? emptySlugStore();

  const entry: CommentEntry = {
    id: randomUUID(),
    name: input.name,
    text: input.text,
    rating: input.rating,
    createdAt: new Date().toISOString(),
    replies: [],
  };

  slugStore.comments.push(entry);
  store[slug] = slugStore;
  writeStore(store);
  return entry;
}

// Works for replying to a seed comment or a previously-submitted one - the
// parent doesn't need to already exist in this file, since replies are
// stored independently, keyed by the comment id they're attached to.
export function addReply(slug: string, commentId: string, input: { name: string; text: string }): CommentReply {
  const store = readStore();
  const slugStore = store[slug] ?? emptySlugStore();

  const reply: CommentReply = {
    id: randomUUID(),
    name: input.name,
    text: input.text,
    createdAt: new Date().toISOString(),
  };

  slugStore.replies[commentId] = [...(slugStore.replies[commentId] ?? []), reply];
  store[slug] = slugStore;
  writeStore(store);
  return reply;
}

export function commentExists(slug: string, commentId: string): boolean {
  return getComments(slug).some((c) => c.id === commentId);
}
