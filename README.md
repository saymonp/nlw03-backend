Criar migration
npx typeorm migration:create -n create_orphanages

Run migrations
npm run typeorm migration:run

Revert Migrations
npm run typeorm migration:revert