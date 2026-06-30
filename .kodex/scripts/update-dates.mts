#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

const now = new Date();
const year = String(now.getFullYear());
const today = now.toISOString().slice(0, 10);

const changed: string[] = [];

function update(relPath: string, transform: (content: string) => string): void {
    const path = resolve(root, relPath);
    const original = readFileSync(path, 'utf8');
    const updated = transform(original);
    if (updated !== original) {
        writeFileSync(path, updated);
        changed.push(relPath);
    }
}

update('LICENSE', (content) => content.replace(/(©\s*)\d{4}/, `$1${year}`));

update('index.html', (content) =>
    content.replace(
        /(<meta\s+name="date"\s+content=")[^"]*(")/,
        `$1${today}$2`,
    ),
);

update('public/sitemap.xml', (content) =>
    content.replace(/(<lastmod>)[^<]*(<\/lastmod>)/g, `$1${today}$2`),
);

if (changed.length === 0) {
    process.exit(0);
}

console.log(`update-dates: updated ${changed.join(', ')}`);
execFileSync('git', ['add', ...changed], { cwd: root, stdio: 'inherit' });
