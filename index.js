import app from './src/app.js';
import { serve } from '@hono/node-server';

const port = process.env.PORT || 3030;

serve({
  fetch: app.fetch,
  port: port,
});

console.log(`🚀 Server running on port ${port}`);
