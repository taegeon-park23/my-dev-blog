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

@Table({
  tableName: 'MenuItems',
})
export class MenuItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  url!: string;

  @ForeignKey(() => MenuItem)
  @Column(DataType.INTEGER)
  parentId!: number;

  @Column(DataType.INTEGER)
  displayOrder!: number;

  @BelongsTo(() => MenuItem)
  parent!: MenuItem;
}
