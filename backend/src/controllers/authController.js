const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).json({ error: 'User already exists' });

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      role: role || 'user',
    },
  });

  res.json({ message: 'User registered', user: { id: user.id, email: user.email, role: user.role } });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ error: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ message: 'Login successful', token });
};

exports.assignRole = async (req, res) => {
  const { userId, role } = req.body;
  const validRoles = ['SUPERADMIN', 'ADMIN', 'MANAGER', 'USER'];

  if (req.user.role !== 'SUPERADMIN') {
    return res.status(403).json({ error: 'Only superadmin can assign roles' });
  }

  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
    });
    res.json({ message: 'Role assigned', user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};




exports.createUser = async (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Only admin can create users' });
  }

  const { name, email, password, role } = req.body;
  const validRoles = ['SUPERADMIN', 'ADMIN', 'MANAGER', 'USER'];

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) return res.status(400).json({ error: 'User already exists' });

  if (role && !validRoles.includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      role: role || 'USER',
    },
  });

  res.json({ message: 'User created', user: { id: user.id, email: user.email, role: user.role } });
  
};