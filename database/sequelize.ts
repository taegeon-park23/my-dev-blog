/* eslint-disable no-underscore-dangle */
import { Model, ModelCtor, Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { configData } from '../config/config';
import { models } from './models';

const env = process.env.NODE_ENV || 'development';
const dbConfig = configData[env as keyof typeof configData];

export const sequelize = new Sequelize(
  dbConfig.database ?? '',
  dbConfig.username ?? '',
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect as Dialect,
    models: models as ModelCtor<Model>[],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
);
