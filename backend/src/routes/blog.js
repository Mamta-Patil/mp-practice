const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const prisma = require('../config/db');

router.post('/create', auth, async (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Only admin can create blogs' });
  }

  const { title, content } = req.body;
  const blog = await prisma.blog.create({
    data: { title, content, authorId: req.user.userId },
  });

  res.json({ message: 'Blog created', blog });
});

router.get('/all', auth, async (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Only admin can view blogs' });
  }

  const blogs = await prisma.blog.findMany({ where: { authorId: req.user.userId } });
  res.json(blogs);
});

module.exports = router;



