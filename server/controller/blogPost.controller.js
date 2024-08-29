import BlogPost from '../model/blogPost.model.js';

export const createPost = async (req, res) => {
  try {
    const post = new BlogPost({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });

    await post.save();
    return res.status(201).json({ message: 'Blog post created successfully', post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate('author', 'name email');
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate('author', 'name email');
    console.log(post);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized action' });
    }
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    await post.save();
    return res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized action' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

