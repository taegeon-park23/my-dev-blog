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
} from 'sequelize-typescript';
import { Member } from './Member';

@Table({
  tableName: 'Authors',
})
export class Author extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.TEXT)
  bio!: string;

  @Column(DataType.STRING)
  profileImage!: string;

  @Column(DataType.INTEGER)
  @ForeignKey(() => Member)
  memberId!: number;

  @BelongsTo(() => Member)
  member!: Member;
}
