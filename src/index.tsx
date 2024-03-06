import { Hono } from 'hono';
import renderClient from '@/middleware/renderClient';

const app = new Hono();

app.get('*', renderClient);

export default app;
