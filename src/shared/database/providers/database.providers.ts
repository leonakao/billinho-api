import { createConnection, getConnectionOptions } from 'typeorm';

console.log(__dirname);

export const databaseProviders = [
  {
    provide: 'DatabaseConnection',
    useFactory: async () => {
      const connectionOptions = await getConnectionOptions();

      Object.assign(connectionOptions, {
        entities: [
          __dirname + '/../../../modules/**/entities/*.entity{.ts,.js}',
        ],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      });

      return await createConnection(connectionOptions);
    },
  },
];
