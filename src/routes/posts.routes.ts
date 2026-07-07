import { Router } from "express";
import {
  listPosts,
  patchPostById,
  removePost,
  showPost,
  storePost,
  updatePostById,
  searchPostsByTerm,
} from "../controllers/posts.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  createPostSchema,
  updatePartialPostSchema,
} from "../schemas/posts.schema";

const postsRoutes = Router();

postsRoutes.get("/", listPosts);
postsRoutes.get("/search", searchPostsByTerm);
postsRoutes.get("/:id", showPost);
postsRoutes.post("/", validate(createPostSchema), storePost);
postsRoutes.put("/:id", validate(createPostSchema), updatePostById);
postsRoutes.patch("/:id", validate(updatePartialPostSchema), patchPostById);
postsRoutes.delete("/:id", removePost);

export default postsRoutes;
