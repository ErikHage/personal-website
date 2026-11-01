import { cpSync } from 'node:fs';

// Copy all the view templates
cpSync('src/templates', 'dist/templates', { recursive: true, });
