# ZWS Courier - Next.js Web Application

A modern, SEO-friendly courier and logistics website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Firebase**.

## 🚀 Features

### Public Features
- **Home Page**: Hero section with shipment tracking, statistics, services showcase
- **Tracking System**: Advanced tracking modal to check shipment status in real-time
- **About Us**: Company history, mission, vision, and core values
- **Domestic Services**: Information about domestic courier services
- **Express Services**: Details about express and international services
- **Contact Page**: Contact form that saves messages to Firebase
- **Newsletter**: Subscribe to updates (emails saved to Firebase)
- **Responsive Design**: Fully mobile-responsive and optimized
- **SEO Optimized**: Meta tags, structured data, fast loading

### Admin Panel Features
- **Admin Login**: Secure login page (Email: admin@test.com, Password: 12345678)
- **Dashboard**: Complete admin panel for shipment management
- **Create Shipments**: Form to create new shipments with auto-generated tracking IDs
- **Manage Shipments**: View, update, and delete shipments
- **Automatic Tracking ID**: Unique tracking IDs generated for each shipment
- **Status Management**: Update shipment status (Pending, In Transit, Out for Delivery, Delivered)
- **Firebase Integration**: All data persisted to Firestore

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication ready)
- **Icons**: Font Awesome 6.5
- **Images**: Unsplash & Picsum photos

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js 16+ installed
- npm or yarn package manager
- Firebase project already created (using provided config)

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase
Firebase config is already set up in `lib/firebase.ts`. The provided credentials are:
- Project ID: `zcs-transport`
- Firebase API: Already configured

### 3. Firestore Rules
Set up your Firestore security rules as provided:
```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2026, 3, 11);
    }
  }
}
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages & Routes

### Public Pages
- `/` - Home page with tracking system
- `/about` - About the company
- `/domestic` - Domestic services
- `/express` - Express services
- `/contact` - Contact form

### Admin Pages
- `/admin` - Admin login page
  - Credentials: `admin@test.com` / `12345678`
- `/admin/dashboard` - Admin dashboard (shipment management)

## 📊 Firestore Collections

### 1. `shipments` Collection
```json
{
  "trackingId": "ZWS12345678",
  "senderName": "John Doe",
  "senderPhone": "+92XXXXXXXXXX",
  "recipientName": "Jane Smith",
  "recipientPhone": "+92XXXXXXXXXX",
  "recipientAddress": "123 Street, City",
  "weight": "2.5",
  "serviceType": "Express",
  "status": "In Transit",
  "estimatedDelivery": "2025-02-15",
  "createdAt": "timestamp"
}
```

### 2. `contacts` Collection
```json
{
  "name": "Customer Name",
  "email": "customer@email.com",
  "message": "Message content...",
  "createdAt": "timestamp"
}
```

### 3. `newsletter` Collection
```json
{
  "email": "subscriber@email.com",
  "subscribedAt": "timestamp"
}
```

## 🔐 Admin Credentials

Default admin credentials (for demo purposes):
- **Email**: `admin@test.com`
- **Password**: `12345678`

⚠️ **Change these credentials in production!**

## 🎨 Customization

### Colors
Primary color is set to `#e30613` (red). To change:
1. Update in `tailwind.config.js`:
   ```js
   colors: {
     primary: '#e30613',
   }
   ```
2. Update in `app/globals.css` if needed

### Logo & Branding
- Change logo text in `components/Navbar.tsx`
- Add your logo images in `public/` folder
- Update company name throughout the app

### Contact Information
Update in `components/Footer.tsx`:
- Address
- Phone numbers
- Social media links
- Email address

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms
This is a standard Next.js app, so it can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Google Cloud Run
- Any Node.js hosting

## 🔒 Security Notes

1. **Admin Credentials**: Must be changed in production
2. **Firebase Keys**: Currently embedded (fine for educational use, move to environment variables in production)
3. **Firestore Rules**: Current rules expire on March 11, 2026. Update before expiry
4. **Environment Variables**: Store sensitive data in `.env.local` (already gitignored)

## 📝 Features in Detail

### Tracking System
1. Users enter tracking ID in hero section
2. System fetches shipment from Firestore
3. Professional modal shows all details:
   - Tracking ID
   - Current status with color coding
   - Sender & recipient information
   - Shipment details (weight, service type, delivery date)
   - Order date and estimated delivery

### Admin Panel
1. Secure login with hardcoded credentials
2. Success popup on login
3. Dashboard shows all shipments in a table
4. Create new shipments with form validation
5. Automatic tracking ID generation (ZWS + timestamp)
6. Update shipment status
7. Delete shipments
8. Real-time data refresh

### Contact Form
- Saves name, email, message to Firebase
- Success/error feedback
- Validation built-in

### Newsletter
- Email subscription in footer
- Saves emails to Firebase
- Real-time success message

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify Firebase config in `lib/firebase.ts`
- Check Firestore rules aren't blocking read/write
- Ensure browser allows third-party scripts

### Tracking Not Working
- Make sure shipments exist in Firestore
- Check tracking ID format (ZWS + 8 digits)
- Verify Firestore rules allow read access

### Admin Login Issues
- Email must be exactly: `admin@test.com`
- Password must be exactly: `12345678`
- Clear localStorage to reset session

## 📞 Support

For issues or questions:
1. Check Firestore console for data
2. Review browser console for errors
3. Verify Firebase config
4. Check network activity in DevTools

## 📄 License

This project is for educational and commercial use.

## 🎯 Future Enhancements

- Email notifications
- SMS updates for shipments
- Payment integration
- Real-time tracking updates
- Mobile app
- Advanced admin analytics
- Automated email confirmations
- Multi-language support
- Dark mode

---

**Built with ❤️ using Next.js and Firebase**
