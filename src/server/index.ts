import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite frontend
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Types
interface BookingRequest {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  numberOfGuests: number;
  specialRequests?: string;
  experienceSlug?: string;
  experienceName?: string;
}

// In-memory storage (replace with PostgreSQL later)
const bookings: any[] = [];

// Helper to format date nicely
const formatDate = (date: Date): string => {
  return date.toLocaleString('en-GB', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// POST /api/bookings - Main booking endpoint
app.post('/api/bookings', async (req: Request, res: Response) => {
  console.log('\n' + '='.repeat(90));
  console.log(`📝 NEW BOOKING RECEIVED - ${formatDate(new Date())}`);
  console.log('='.repeat(90));

  const bookingData: BookingRequest = req.body;

  // Validation
  if (!bookingData.fullName || !bookingData.phone || !bookingData.email || 
      !bookingData.preferredDate || !bookingData.numberOfGuests) {
    console.error('❌ Validation failed: Missing required fields');
    return res.status(400).json({
      success: false,
      message: 'Missing required fields',
      required: ['fullName', 'phone', 'email', 'preferredDate', 'numberOfGuests']
    });
  }

  // Log booking details beautifully
  console.log('✅ Booking Details:');
  console.log('─'.repeat(50));
  console.log(`👤 Name          : ${bookingData.fullName}`);
  console.log(`📞 Phone         : ${bookingData.phone}`);
  console.log(`📧 Email         : ${bookingData.email}`);
  console.log(`📅 Preferred Date: ${bookingData.preferredDate}`);
  console.log(`👥 Guests        : ${bookingData.numberOfGuests}`);
  
  if (bookingData.experienceName) {
    console.log(`🏝️  Experience   : ${bookingData.experienceName}`);
  }
  if (bookingData.experienceSlug) {
    console.log(`🔗 Slug          : ${bookingData.experienceSlug}`);
  }
  if (bookingData.specialRequests) {
    console.log(`💬 Special Requests: ${bookingData.specialRequests}`);
  }
  console.log('─'.repeat(50));

  // Save booking
  const bookingRecord = {
    id: `BK${Date.now()}`,
    ...bookingData,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  bookings.push(bookingRecord);

  console.log(`💾 Booking saved successfully! ID: ${bookingRecord.id}`);
  console.log(`📊 Total bookings in memory: ${bookings.length}`);
  console.log('='.repeat(90) + '\n');

  // Send response to frontend
  res.status(200).json({
    success: true,
    message: 'Booking enquiry received successfully!',
    data: {
      bookingId: bookingRecord.id,
      experienceName: bookingData.experienceName || 'Your selected experience',
      status: 'pending',
      estimatedResponse: 'within 24 hours'
    }
  });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    server: 'Nobel Sea Tours Booking API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    totalBookings: bookings.length,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Get all bookings (for debugging)
app.get('/api/bookings/all', (req: Request, res: Response) => {
  res.json({
    count: bookings.length,
    bookings: bookings
  });
});

// Clear all bookings (for development only)
app.delete('/api/bookings/clear', (req: Request, res: Response) => {
  const count = bookings.length;
  bookings.length = 0;
  console.log(`🗑️ Cleared all ${count} bookings`);
  res.json({ success: true, message: `Cleared ${count} bookings` });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.url} not found`
  });
});

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                    Nobel Sea Tours - Booking API Server                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  ✅ Server running on http://localhost:${PORT}                               ║
║  📍 Health check   → http://localhost:${PORT}/api/health                    ║
║  📝 Submit booking → POST http://localhost:${PORT}/api/bookings            ║
╚══════════════════════════════════════════════════════════════════════════════╝
  `);
});