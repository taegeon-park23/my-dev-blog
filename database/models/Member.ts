/* eslint-disable import/no-cycle */
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'Members',
})
export class Member extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  githubId!: string;

  @Column(DataType.STRING)
  githubUsername!: string;

  @Column(DataType.STRING)
  email!: string;
}
