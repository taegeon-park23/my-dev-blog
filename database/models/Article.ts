/* eslint-disable import/no-cycle */
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  CreatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Author } from './Author';
import { Tag } from './Tag';
import { ArticleTag } from './ArticleTag';
import { Comment } from './Comment';
import { Category } from './Category';

@Table({
  tableName: 'Articles',
})
export class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.TEXT)
  content!: string;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  categoryId!: number;

  @ForeignKey(() => Author)
  @Column(DataType.INTEGER)
  authorId!: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @BelongsTo(() => Category)
  category!: Category;

  @BelongsTo(() => Author)
  author!: Author;

  @BelongsToMany(() => Tag, () => ArticleTag)
  tags!: Tag[];

  @HasMany(() => Comment)
  comments!: Comment[];
}
