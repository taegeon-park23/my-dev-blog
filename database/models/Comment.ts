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
  CreatedAt,
} from 'sequelize-typescript';
import { Article } from './Article';
import { Author } from './Author';

@Table({
  tableName: 'Comments',
})
export class Comment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.TEXT)
  content!: string;

  @ForeignKey(() => Author)
  @Column(DataType.INTEGER)
  authorId!: number;

  @ForeignKey(() => Article)
  @Column(DataType.INTEGER)
  articleId!: number;

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  parentId!: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @BelongsTo(() => Author)
  author!: Author;

  @BelongsTo(() => Article)
  article!: Article;

  @BelongsTo(() => Comment)
  parent!: Comment;
}
