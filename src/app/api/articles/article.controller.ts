import { NextApiRequest, NextApiResponse } from 'next';
import { ArticleService } from './article.service';

const articleService = new ArticleService();

export async function getAllArticles(req: NextApiRequest, res: NextApiResponse) {
  const articles = await articleService.getAllArticles();
  res.status(200).json(articles);
}

export async function createArticle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const article = await articleService.createArticle(data);
  res.status(201).json(article);
}

export async function getArticleById(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const article = await articleService.getArticleById(Number(id));
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
}

export async function updateArticle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const data = req.body;
  const [affectedRows] = await articleService.updateArticle(Number(id), data);
  if (affectedRows > 0) {
    res.status(200).json({ message: 'Article updated successfully' });
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
}

export async function deleteArticle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const affectedRows = await articleService.deleteArticle(Number(id));
  if (affectedRows > 0) {
    res.status(200).json({ message: 'Article deleted successfully' });
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
}
