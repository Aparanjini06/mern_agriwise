const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// Models & Routes
const plannerRoute = require('./routes/plannerRoute');
const Farmer = require('./models/FarmerModel');
const Crop = require('./models/CropModel'); // Needed for /get-crops
const organicRoutes = require('./routes/organicRoutes');
const productRoutes = require('./routes/productRoutes');

// ✅ Initialize app
const app = express();
const PORT = process.env.PORT || 7000;
const JWT_SECRET = process.env.JWT_SECRET || 's3cret';
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://aparanjinipallela1:appu0610@cluster0.curryg2.mongodb.net/agrisphere';
// ✅ Serve static images from /public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// ✅ MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// ✅ JWT Auth middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token missing', logout: true });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token', logout: true });
    req.userId = decoded.userId;
    next();
  });
}

// ✅ Farmer registration
app.post('/register', async (req, res) => {
  const { name, phone, password, role, location } = req.body;

  if (!name || !phone || !password || !role || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await Farmer.findOne({ phone });
    if (existingUser) {
      return res.status(409).json({ message: 'Farmer already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFarmer = new Farmer({
      name,
      phone,
      password: hashedPassword,
      role,
      location
    });

    await newFarmer.save();

    res.status(201).json({ message: 'Registration successful', farmer: newFarmer });
  } catch (err) {
    console.error('❌ Registration Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Farmer login
app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: 'Phone and password are required' });
  }

  try {
    const farmer = await Farmer.findOne({ phone });
    if (!farmer) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: farmer._id, phone: farmer.phone },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        name: farmer.name,
        phone: farmer.phone,
        role: farmer.role,
        location: farmer.location
      }
    });
  } catch (err) {
    console.error('❌ Login Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.use('/uploads', express.static('uploads'));

//  Use planner route
app.use('/api', plannerRoute);
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

app.use('/api/organic', organicRoutes);
const organicGuideRoutes = require('./routes/organicGuideRoutes');
app.use('/api/organic', organicGuideRoutes); 

const fertilizerRoutes = require('./routes/fertilizerRoutes');
app.use('/api/fertilizers', fertilizerRoutes);

app.use('/api/products', productRoutes);

//  Protected: Get crops
app.get('/get-crops', authenticateToken, async (req, res) => {
  try {
    const crops = await Crop.find({}); // Or filter based on req.userId if needed
    res.json({ crops });
  } catch (err) {
    console.error('❌ Get crops error:', err);
    res.status(500).json({ message: 'Error fetching crops' });
  }
});


// Health check
app.get('/', (req, res) => {
  res.send('🌿 AgriSphere backend is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
