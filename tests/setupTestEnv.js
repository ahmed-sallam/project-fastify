if (!process.env.POSTGRES_URI) {
  process.env.POSTGRES_URI = 'postgres://app:passwords@localhost:5432/db';
}
