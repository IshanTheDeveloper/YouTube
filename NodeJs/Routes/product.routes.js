import { createVideos } from "../Controller/product.controller.js";
import { fetchVideos } from "../server.js";
import { fetchUserData } from "../server.js";
export function routes(app) {
  app.post("/videos", createVideos);
  app.get("/videos", fetchVideos);
  app.get("/userData", fetchUserData);
}
