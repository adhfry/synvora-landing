// One free-consultation submission per IP address.
//
// Stored as a small JSON file under data/ (gitignored, outside public/ so
// it's never web-accessible) rather than a database - this project has no
// database, and traffic for a single consultation form doesn't need one.
// The Node server is a long-running process (not serverless), so
// synchronous file I/O per request is fine at this scale.

import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'consultation-submissions.json');

function readStore(): Record<string, string> {
  try {
    return JSON.parse(fs.readFileSync(STORE_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, string>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2));
}

export function hasSubmittedConsultation(ip: string): boolean {
  if (!ip) return false;
  return Boolean(readStore()[ip]);
}

export function recordConsultationSubmission(ip: string): void {
  if (!ip) return;
  const store = readStore();
  store[ip] = new Date().toISOString();
  writeStore(store);
}
