import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllArticles, createArticle, updateArticle, deleteArticle } from './article.controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getAllArticles(req, res);
      break;
    case 'POST':
      await createArticle(req, res);
      break;
    case 'PUT':
      await updateArticle(req, res);
    case 'DELETE':
      await deleteArticle(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
