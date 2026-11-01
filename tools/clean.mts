import { rmSync } from 'node:fs';

// Remove all previous build output
rmSync('dist', { recursive: true, force: true, });
