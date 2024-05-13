import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '8nmfpsyxfq', 
  apiKey: process.env.API_KEY,
});