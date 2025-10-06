# School Fee Payment App - Twalumbu Education Centre

A mobile-first React application for paying school fees, built with TypeScript and Tailwind CSS. This app provides a complete payment flow from user authentication through payment processing and receipt generation.

## 🚀 Features

- **User Authentication**: Login with phone number, email, or student ID
- **Balance Management**: View current outstanding balances and payment history
- **Flexible Payments**: Full payment or partial payment options
- **Receipt System**: Digital receipts delivered via WhatsApp and email
- **Mobile-First Design**: Optimized for 393px mobile viewport with responsive scaling
- **Input Validation**: Robust validation for all user inputs
- **Smooth Animations**: Page transitions and loading states

## 📁 Project Structure

```
├── App.tsx                 # Main app component with navigation logic
├── components/            # React components
│   ├── LoginPage.tsx      # User authentication page
│   ├── ServicesPage.tsx   # Main dashboard after login
│   ├── BalancesPage.tsx   # View outstanding balances
│   ├── PaymentHistoryPage.tsx # Payment history viewer
│   ├── PartialPaymentPage.tsx # Custom amount entry
│   ├── PaymentDetailsPage.tsx # Contact info for receipts
│   ├── CheckoutPage.tsx   # Payment confirmation
│   ├── CompletionPage.tsx # Payment processing status
│   ├── ViewReceiptPage.tsx # Receipt viewer
│   ├── DownloadReceiptPage.tsx # Receipt download
│   └── PageTransition.tsx # Animation components
├── lib/                   # Business logic and utilities
│   ├── data-types.ts      # TypeScript interfaces
│   ├── mock-data.ts       # Sample data for development
│   ├── data-store.ts      # Data management (replace with API)
│   └── input-validation.ts # Input validation utilities
└── styles/
    └── globals.css        # Tailwind CSS configuration
```

## 🔧 Input Validation System

The app includes comprehensive input validation to ensure data integrity:

### Phone Numbers
- **Format**: Zambian mobile numbers (9-10 digits)
- **Validation**: Only numeric input, valid prefixes (96, 97, 95, 76, 77, 75)
- **Auto-formatting**: Spaces added as user types

### Email Addresses
- **Format**: Standard email validation
- **Optional**: Email is not required for payment
- **Sanitization**: HTML characters removed

### Payment Amounts
- **Format**: Decimal numbers with up to 2 decimal places
- **Range**: Must be greater than 0, maximum K10,000
- **Input Mode**: Numeric keyboard on mobile devices

### Student IDs
- **Format**: Letters followed by numbers (e.g., C20012)
- **Case**: Automatically converted to uppercase

## 🎨 Styling Guidelines

### Tailwind Configuration
- Uses Tailwind v4 with custom CSS variables
- Mobile-first responsive design (393px base width)
- Custom color scheme for school branding

### Typography
- **Primary Font**: IBM Plex Sans Devanagari
- **Secondary Font**: Inter
- **No Manual Font Sizing**: Uses default typography from globals.css

### Design Principles
- Figma design imports preserved exactly
- Consistent button animations and hover states
- Smooth page transitions with Motion/React
- Accessibility features included

## 🚦 Navigation Flow

```
Login → Services → [Balances|History|Pay Fees]
                ↓
         Services Selection → Add Services → View Services
                                        ↓
         Checkout → Partial Payment → Payment Details → Completion → Receipt
```

### Page States
Each page is managed through the `currentPage` state in App.tsx:
- `"login"` - Authentication page
- `"services"` - Main dashboard
- `"balances"` - Outstanding balances
- `"history"` - Payment history
- `"payFees"` - Payment options
- `"checkout"` - Payment confirmation
- `"completion"` - Payment processing
- `"viewReceipt"` - Receipt display

## 🔐 Data Management

### Current Implementation (Development)
- **Mock Data**: Located in `/lib/mock-data.ts`
- **In-Memory Storage**: DataStore singleton pattern
- **Simulated API Calls**: Async functions with delays

### Production Considerations
Replace the DataStore with:
- REST API endpoints
- GraphQL queries
- State management (Redux/Zustand)
- Real authentication service
- Payment gateway integration

## 🛠️ Customization Guide

### Adding New Input Fields

1. **Create validation function** in `/lib/input-validation.ts`:
```typescript
export function validateNewField(input: string): { isValid: boolean; error?: string } {
  // Add validation logic
  return { isValid: true };
}
```

2. **Use in component** with proper input restrictions:
```typescript
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  // Apply validation rules
  if (isValidInput(value)) {
    setValue(value);
  }
};
```

### Adding New Pages

1. **Create component** in `/components/NewPage.tsx`
2. **Add page state** to App.tsx `currentPage` type
3. **Create navigation handlers** in App.tsx
4. **Add route** in the render section

### Modifying Payment Flow

1. **Update handlers** in App.tsx for new payment logic
2. **Modify DataStore** methods for new data requirements
3. **Update mock data** to reflect new payment structure
4. **Add validation** for new payment fields

## 🎯 Key Components Explained

### LoginPage.tsx
- **Purpose**: User authentication
- **Inputs**: Phone/Email/Student ID (flexible)
- **Validation**: Multi-format input validation
- **Output**: Authenticated user data

### PartialPaymentPage.tsx
- **Purpose**: Custom payment amounts
- **Inputs**: Numeric amounts for different fees
- **Validation**: Decimal number validation
- **Features**: Real-time total calculation

### PaymentDetailsPage.tsx
- **Purpose**: Contact information collection
- **Inputs**: WhatsApp number (required), Email (optional)
- **Validation**: Phone and email format validation
- **Security**: Input sanitization

## 🔄 State Management

### Global State (App.tsx)
```typescript
const [currentPage, setCurrentPage] = useState("login");
const [userName, setUserName] = useState("");
const [servicesTotal, setServicesTotal] = useState(0);
const [isLoading, setIsLoading] = useState(false);
```

### Local State (Components)
Each component manages its own form state and validation.

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 393px (primary target)
- **Desktop**: Scales to larger screens while maintaining mobile design

### Testing
- Chrome DevTools mobile emulation
- iOS Safari and Android Chrome
- Various screen sizes and orientations

## 🐛 Error Handling

### User Input Errors
- Real-time validation feedback
- Clear error messages
- Prevention of invalid submissions

### Network Errors (Simulated)
- Loading states during processing
- Error alerts for failed operations
- Graceful degradation

## 🔄 Future Enhancements

### Backend Integration
- Replace mock data with real API
- Implement proper authentication
- Add payment gateway integration
- Real-time data synchronization

### Features
- Multiple payment methods
- Installment plans
- Parent/guardian notifications
- Multi-language support

### Technical
- Unit tests with Jest/Vitest
- E2E testing with Playwright
- Performance optimization
- Offline support with PWA

## 📞 Support

For questions about customizing or extending this application:
1. Check the validation utilities in `/lib/input-validation.ts`
2. Review component structure and props
3. Follow the established patterns for new features
4. Maintain mobile-first responsive design principles

## 🔒 Security Notes

This is a demonstration app with mock data. For production use:
- Implement proper authentication
- Add HTTPS enforcement
- Validate all inputs server-side
- Use secure payment processing
- Add rate limiting and CSRF protection