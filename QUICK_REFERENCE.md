# 🚀 ZWS Courier Quick Reference

## Start Development
```bash
npm install
npm run dev
# Open: http://localhost:3000
```

## Admin Access
- **URL**: http://localhost:3000/admin
- **Email**: admin@test.com
- **Password**: 12345678

## Important Files
| File | Purpose |
|------|---------|
| `lib/firebase.ts` | Firebase config |
| `components/Navbar.tsx` | Header/navigation |
| `components/Footer.tsx` | Footer + newsletter |
| `app/page.tsx` | Home page |
| `app/admin/page.tsx` | Admin login |
| `app/admin/dashboard/page.tsx` | Shipment management |
| `tailwind.config.js` | Color/theme settings |

## Key Commands
```bash
npm run dev          # Start dev server
npm run build        # Build production
npm start            # Run production build
npm run lint         # Check code style
```

## Customize
### Change Color
`tailwind.config.js` line 11:
```js
primary: '#e30613',  // Change this
```

### Change Company Name
- `components/Navbar.tsx` line 7
- `components/Footer.tsx` line 10
- `app/layout.tsx` line 3

### Update Social Links
`components/Footer.tsx` line ~95-119

## Database Collections
```
shipments {
  trackingId, senderName, recipientName, 
  status, weight, estimatedDelivery, ...
}

contacts {
  name, email, message, createdAt
}

newsletter {
  email, subscribedAt
}
```

## Tracking Flow
1. User enters tracking ID on home page hero
2. System queries Firestore `shipments` collection
3. Shows modal with shipment details
4. Color-coded status (Green=Delivered, Blue=Transit, etc)

## Admin Workflow
1. Login: admin@test.com / 12345678
2. Click "Create New Shipment"
3. Fill form → "Create Shipment"
4. Tracking ID auto-generated
5. View in table below
6. Delete with button if needed

## Firebase Setup (Already Done)
```js
Project: zcs-transport
Config: lib/firebase.ts (lines 5-15)
Rules: Expires March 11, 2026
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## File Structure
```
app/              → Pages & layouts
├── page.tsx      → Home page
├── admin/        → Admin panel
├── contact/      → Contact page
├── about/        → About page
└── api/          → API routes

components/       → Reusable components
lib/              → Firebase & helpers
package.json      → Dependencies
```

## Troubleshooting
| Issue | Solution |
|-------|----------|
| Modules not found | `npm install` |
| Port in use | `npm run dev -- -p 3001` |
| Tracking not working | Create shipment first |
| Admin login fails | Check email/password exactly |
| Firebase error | Check config in `lib/firebase.ts` |

## Before Production
```bash
⚠️ Change admin email/password in app/admin/page.tsx
⚠️ Update Firestore security rules (expire March 2026)
⚠️ Move Firebase config to .env.local
⚠️ Replace demo images with your own
⚠️ Update company contact info in Footer.tsx
```

## URLs
- Home: http://localhost:3000
- Admin: http://localhost:3000/admin
- Dashboard: http://localhost:3000/admin/dashboard
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact
- Domestic: http://localhost:3000/domestic
- Express: http://localhost:3000/express

## React Hooks Used
- `useState` - State management
- `useEffect` - Side effects
- `useRouter` - Navigation (admin)

## Firestore Collections Available
✓ shipments
✓ contacts
✓ newsletter

## Admin Panel Features
✓ Secure login
✓ Create shipments
✓ Auto-generate tracking IDs
✓ Update status
✓ Delete shipments
✓ View all shipments
✓ Logout

## Public Features
✓ Home with hero tracking
✓ Track shipments real-time
✓ Contact form (→ DB)
✓ Newsletter (→ DB)
✓ About company
✓ Services pages
✓ Social links
✓ Mobile responsive
✓ SEO optimized

---

**Need help?** See README.md or SETUP_GUIDE.md
