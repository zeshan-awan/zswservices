# ZWS Courier Next.js Setup Guide

## 🎉 What Has Been Created

Your ZWS Courier website has been completely converted from static HTML to a modern **Next.js** application with the following:

### ✅ Completed Features

#### 1. **Core Pages**

- ✓ Home page with hero slider and tracking system
- ✓ About Us page with company mission and values
- ✓ Domestic Services page
- ✓ Express Services page
- ✓ Contact page with form (saves to Firebase)
- ✓ Professional, responsive design

#### 2. **Admin Panel**

- ✓ Secure admin login page
  - Email: `admin@test.com`
  - Password: `12345678`
- ✓ Success popup on login
- ✓ Admin dashboard with shipment management
- ✓ Create new shipments with auto-generated tracking IDs
- ✓ View all shipments in a table
- ✓ Update shipment status
- ✓ Delete shipments

#### 3. **Firebase Integration**

- ✓ Firestore database setup
- ✓ Real-time data storage
- ✓ Three main collections:
  - `shipments` - Courier shipments
  - `contacts` - Contact form messages
  - `newsletter` - Email subscriptions

#### 4. **Advanced Features**

- ✓ Shipment tracking modal in hero section
- ✓ Professional tracking details display
- ✓ Contact form with validation (saves to Firebase)
- ✓ Newsletter subscription in footer (saves emails to Firebase)
- ✓ Admin panel with full CRUD operations
- ✓ Auto-generated tracking IDs (ZWS format)
- ✓ Responsive mobile navigation
- ✓ Scroll-to-top button
- ✓ SEO optimizations

## 📁 Project Structure

```
zswprojectfile/
├── app/
│   ├── api/                    # API routes
│   │   ├── route.ts           # Main API
│   │   └── track/
│   │       └── route.ts       # Tracking API
│   ├── admin/
│   │   ├── page.tsx           # Admin login
│   │   ├── dashboard/
│   │   │   └── page.tsx       # Admin dashboard
│   │   └── layout.tsx         # Admin layout
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── domestic/
│   │   └── page.tsx           # Domestic services
│   ├── express/
│   │   └── page.tsx           # Express services
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.tsx             # Navigation
│   ├── Footer.tsx             # Footer with newsletter
│   ├── TrackingModal.tsx      # Tracking details modal
│   └── ScrollToTop.tsx        # Scroll to top button
├── lib/
│   └── firebase.ts            # Firebase configuration
├── public/                    # Static files
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── next.config.js            # Next.js config
├── postcss.config.js         # PostCSS config
└── README.md                 # Documentation
```

## 🚀 Installation & Running

### Step 1: Install Dependencies

```bash
cd d:\zswprojectfile
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

## 🔑 Admin Panel Access

### Login Details

- **URL**: http://localhost:3000/admin
- **Email**: `admin@test.com`
- **Password**: `12345678`

### What You Can Do

1. **Create Shipments**
   - Click "Create New Shipment" button
   - Fill in sender & recipient details
   - Choose service type and status
   - System auto-generates unique tracking ID
   - Click "Create Shipment"

2. **View Shipments**
   - All shipments displayed in a table
   - Shows tracking ID, recipient, service, status, and estimated delivery
   - Search functionality by scrolling

3. **Delete Shipments**
   - Click "Delete" button on any shipment row
   - Confirm deletion

4. **Logout**
   - Click "Logout" button in top-right
   - Returns to home page

## 📊 Firestore Setup

### Collections Created

When you use the app, the following collections will be created:

#### 1. **shipments**

Storage for all shipments created in admin panel

- Unique tracking ID
- Sender & recipient info
- Shipment details
- Current status
- Timestamps

#### 2. **contacts**

Storage for messages from contact form

- Customer name
- Email
- Message content
- Timestamp

#### 3. **newsletter**

Storage for newsletter subscriptions

- Email address
- Subscription timestamp

## 🛠️ Key Files to Know

### Important Files

1. **lib/firebase.ts** - Firebase configuration (don't modify unless you have a new Firebase project)
2. **components/Navbar.tsx** - Navigation menu, add admin link here if needed
3. **components/Footer.tsx** - Newsletter subscription, update social links
4. **app/page.tsx** - Home page with tracking
5. **app/admin/dashboard/page.tsx** - Admin shipment management

### Configuration Files

- `tailwind.config.js` - Change primary color (#e30613) here
- `next.config.js` - Image and Next.js settings
- `.env.local` - Environment variables (already has admin credentials)

## 🎨 Customization

### Change Primary Color

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#e30613',  // Change this to your color
}
```

### Change Company Name

Search for "ZWS Courier" and replace with your company name in:

- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Update Contact Information

Edit `components/Footer.tsx`:

- Address
- Social media links
- Email

### Change Hero Images

Edit `app/page.tsx` - replace image URLs

## 📱 Testing Tracking Feature

### How to Test

1. Login to admin panel
2. Create a shipment
3. Note the tracking ID (shown in success message)
4. Go to home page
5. Enter tracking ID in hero section
6. Click "Track Shipment"
7. See shipment details in modal

## ✨ SEO Features

The site is optimized for SEO:

- ✓ Meta tags and descriptions
- ✓ Open Graph tags
- ✓ Semantic HTML
- ✓ Fast loading with Next.js
- ✓ Mobile responsive
- ✓ Proper image optimization
- ✓ Clean URL structure

## 🔒 Security Note

⚠️ **Before deploying to production:**

1. Change admin credentials in `app/admin/page.tsx`
2. Move Firebase config to environment variables
3. Update Firestore security rules
4. Enable proper authentication
5. Add rate limiting to API routes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment Options

### Deploy to Vercel (Easiest)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

- Netlify
- AWS Amplify
- Railway
- Render
- Heroku

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module 'firebase'"

**Solution**: Run `npm install` again

```bash
npm install firebase
```

### Issue: Admin login not working

**Solution**:

- Clear browser cache
- Check email is exactly: `admin@test.com`
- Check password is exactly: `12345678`
- Check browser console for errors

### Issue: Tracking not working

**Solution**:

- Create a shipment first in admin panel
- Use the tracking ID from success message
- Check Firestore has the shipment data

### Issue: Images not loading

**Solution**:

- Check internet connection
- Unsplash/Picsum might be blocked in your region
- Replace URLs in code with local images

## 📞 Quick Reference

### Important URLs

- Home: http://localhost:3000
- Admin Login: http://localhost:3000/admin
- Admin Dashboard: http://localhost:3000/admin/dashboard (after login)
- Contact: http://localhost:3000/contact
- About: http://localhost:3000/about
- Domestic: http://localhost:3000/domestic
- Express: http://localhost:3000/express

### Important Terminal Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Check code style
```

## 🎓 Learning Resources

### Next.js

- [Official Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### Firebase

- [Firestore Docs](https://firebase.google.com/docs/firestore)

### Tailwind CSS

- [Official Docs](https://tailwindcss.com/docs)

## ✅ Checklist for First Use

- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Test home page tracking (create shipment first)
- [ ] Login to admin: admin@test.com / 12345678
- [ ] Create a test shipment
- [ ] Track it from home page
- [ ] Submit contact form
- [ ] Subscribe to newsletter
- [ ] Check Firestore Console for data

## 🎉 You're Ready!

Your ZWS Courier website is now a modern, professional Next.js application with:

- Fast performance
- SEO optimization
- Real-time database
- Admin panel
- Professional UI/UX
- Mobile responsive design

Start using it and customize it to your needs!

---

**Need Help?** Check the README.md file for more detailed information.
