var express = require("express");
require("express-group-routes");
const router = express.Router();
const userController = require("../userController/userController");
const blogController = require("../userController/blogController");
const authenticationMiddleware = require("../middleware/authMiddleware");

router.group("/user", (userRouter) => {
    userRouter.post("/signup", userController.createUser);
    userRouter.post("/login", userController.loginUser);
    // userRouter.get("/dashboard" ,userController.dashboard)
});

router.group("/blog", (blogRouter) => {
    // Authenticate routes
    // blogRouter.use(authenticationMiddleware);
    
    blogRouter.post("/addblog", blogController.createBlog);
    blogRouter.get("/viewblog/:blog_id", blogController.viewBlogById); 
    blogRouter.put("/edit" ,blogController.updateBlogByuserIDandBlogId);
    blogRouter.delete("/delete/:blog_id" , blogController.deleteBlogByID)
    blogRouter.get("/viewblogslist" , blogController.viewBlogs)
});


module.exports = router;
