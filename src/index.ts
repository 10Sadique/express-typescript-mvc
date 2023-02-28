import ExpressAPP from "./app";
import http from "http";

//const app = express();
const PORT = 5000;
const TestApp = new ExpressAPP();

const server = http.createServer(TestApp.app);

server.listen(PORT);
server.on('listening', () => {
    let addr: any = server.address();

    console.log(`Server listening on http://localhost:${addr.port}`);
})
