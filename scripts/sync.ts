import { sequelize } from '../database/sequelize';

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database schema created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error syncing database schema:', error);
    sequelize.close();
    process.exit(1);
  }
})();
