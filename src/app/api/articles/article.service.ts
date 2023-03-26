import { Article } from '@/database/models/Article';

export class ArticleService {
  async createArticle(data: Partial<Article>): Promise<Article> {
    const article = await Article.create(data);
    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    const articles = await Article.findAll();
    return articles;
  }

  async getArticleById(id: number): Promise<Article | null> {
    const article = await Article.findByPk(id);
    return article;
  }

  async updateArticle(id: number, data: Partial<Article>): Promise<[number, Article[]]> {
    const [affectedRows, updatedArticles] = await Article.update(data, {
      where: { id },
      returning: true,
    });
    return [affectedRows, updatedArticles];
  }

  async deleteArticle(id: number): Promise<number> {
    const affectedRows = await Article.destroy({ where: { id } });
    return affectedRows;
  }
}
