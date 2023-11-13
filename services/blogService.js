const blogs = require('../models/blogModel');

async function fetchAllBlog () {
    return await blogs.find();
}

async function fetchBlogById (blogId) {
    return await blogs.findById(blogId);
}

module.exports = {fetchAllBlog, fetchBlogById};