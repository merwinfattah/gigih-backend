const {fetchAllBlog, fetchBlogById} = require('../services/blogService');

async function getAllBlog(req, res) {
    try {
    const blogs = await fetchAllBlog();
    res.status(200).json(blogs)
    }
    catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

async function getOneBlog(req, res) {
    try {
        const blogId = req.params.blogId;
        const blog = await fetchBlogById(blogId);
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {getAllBlog, getOneBlog};