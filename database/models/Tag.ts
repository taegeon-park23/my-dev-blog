/* eslint-disable import/no-cycle */
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { Article } from './Article';
import { ArticleTag } from './ArticleTag';

@Table({
  tableName: 'Tags',
})
export class Tag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @BelongsToMany(() => Article, () => ArticleTag)
  articles!: Article[];
}
