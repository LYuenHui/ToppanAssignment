import config from "./jest-mysql-config.js";
import createServer from "./server.js";

const {
  app: { port: PORT },
} = config;

const app = createServer();

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

export default app;
