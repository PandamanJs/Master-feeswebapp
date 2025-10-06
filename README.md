# Master-Fees - School Fee Payment System

A modern, pure frontend school fee payment application built with React, TypeScript, and Vite. This application uses mock data to provide a complete demonstration of school fee payment functionality without requiring any backend services.

## 🚀 Features

### Core Functionality
- **Multi-Student Support**: Manage payments for multiple students under one guardian account
- **Service Selection**: Add school fees and other services for each student
- **Flexible Payment Options**: 
  - Full payment
  - Partial payment with custom amounts
- **Payment Processing**: Mock payment flow simulation with receipt generation
- **Payment History**: View and download past payment receipts
- **Dynamic Data Flow**: All pages share consistent data across the application

### User Experience
- **Responsive Design**: Mobile-first design optimized for all devices
- **Smooth Animations**: Page transitions and interactive elements
- **Real-time Validation**: Form validation with helpful error messages
- **Country Code Selection**: Support for multiple country codes for WhatsApp numbers
- **Receipt Management**: Download and view payment receipts

## 📁 Project Structure

```
Master-Fees/
├── src/
│   ├── components/          # React components
│   │   ├── LoginPage.tsx           # User authentication
│   │   ├── ServicesPage.tsx        # Services overview
│   │   ├── ServicesSelectPage.tsx  # Service selection for students
│   │   ├── CheckoutPage.tsx        # Payment summary
│   │   ├── PartialPaymentPage.tsx  # Custom payment amounts
│   │   ├── PaymentDetailsPage.tsx  # Payment information collection
│   │   ├── CompletionPage.tsx      # Payment confirmation
│   │   ├── DownloadReceiptPage.tsx # Receipt download
│   │   ├── ViewReceiptPage.tsx     # Receipt viewing
│   │   ├── BalancesPage.tsx        # Student balances
│   │   └── PaymentHistoryPage.tsx  # Payment history
│   ├── lib/                 # Utilities and data management
│   │   ├── data-store.ts          # Centralized data store
│   │   ├── data-types.ts          # TypeScript interfaces
│   │   └── mock-data.ts           # Sample data for testing
│   ├── imports/             # SVG and asset imports
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🛠️ Technology Stack

- **React 18.3.1**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Smooth animations
- **TailwindCSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives

## 📦 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

**No backend setup required!** This is a pure frontend application with mock data.

## 🔐 Test Credentials

The application includes test data for development:

### Stephen Kapambwe's Account
- **Students**: Talitha Kapambwe (C20012), Isaiah Kapambwe (C30013), Isaac Kapambwe (Isaac001)
- **Phone**: +260977123456 or 0977123456
- **Email**: stephen.k@example.com

### Mary Mwansa's Account
- **Student**: Grace Mwansa (C40014)
- **Phone**: +260966987654 or 0966987654
- **Email**: mary.m@example.com

### John Phiri's Account
- **Student**: Daniel Phiri (C50015)
- **Phone**: +260955876543 or 0955876543
- **Email**: john.p@example.com

## 🔄 Data Flow

The application maintains consistent data flow across all pages:

1. **Login** → User authentication with student database lookup
2. **Services Selection** → Select students and add school fees
3. **Checkout** → Review services and total amount
4. **Payment Options** → Choose full or partial payment
5. **Payment Details** → Enter WhatsApp number and email
6. **Completion** → Payment processing confirmation
7. **Receipt** → Download or view payment receipts

### State Management
- `servicesTotal`: Total payment amount
- `studentServices`: Simple breakdown for checkout
- `detailedStudentServices`: Detailed breakdown for partial payment
- `selectedStudentIds`: Currently selected students
- All state persisted in localStorage for session continuity

## 🎨 Design System

### Colors
- **Primary**: #003630 (Dark Green)
- **Secondary**: #95E36C (Light Green)
- **Background**: #F5F4F7 (Light Gray)
- **Success**: #E0F7D4 (Pale Green)

### Typography
- **Primary Font**: IBM Plex Sans Devanagari
- **Secondary Font**: Inter

## 🔧 Configuration

### TypeScript
- Modern JSX transform (`react-jsx`)
- Strict mode enabled
- Path aliases configured (`@/*`)

### Vite
- React SWC plugin for fast refresh
- Optimized build configuration

## 📱 Supported Payment Methods

- Visa
- Mastercard
- PayPal
- MTN Mobile Money
- Airtel Money

## 🚦 Production Readiness

### Code Quality
- ✅ TypeScript for type safety
- ✅ Comprehensive JSDoc comments
- ✅ No console.log statements in production code
- ✅ Unused imports removed
- ✅ Proper error handling
- ✅ Form validation

### Performance
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized bundle size
- ✅ Fast development server

### User Experience
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error messages
- ✅ Accessibility features

## 📄 License

This project is based on the Figma design available at: https://www.figma.com/design/eraAEHQQQFJZX1sS80GdL2/Master-Fees

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions, please refer to the project documentation or contact the development team.