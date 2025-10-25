# Fraud Detection Model for Payment Transactions

A modern, real-time fraud detection dashboard built with Next.js that provides comprehensive monitoring and analytics for payment transaction fraud detection using machine learning.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 📋 Overview

This fraud detection system is a sophisticated web application that helps financial institutions and payment processors monitor, detect, and prevent fraudulent transactions in real-time. The dashboard provides actionable insights through visualizations, KPIs, and risk assessments.

## ✨ Features

### Core Functionality
- **Real-time Transaction Monitoring** - Track and analyze payment transactions as they occur
- **Machine Learning Model Integration** - Advanced ML-powered fraud detection with high accuracy
- **Risk Score Assessment** - Automatic risk scoring for each transaction
- **Transaction Classification** - Categorize transactions as legitimate, flagged, or blocked
- **Merchant Risk Analysis** - Identify high-risk merchant categories

### Dashboard Components
- **KPI Cards** - Display critical metrics including Model AUC, False Positive Rate, Recall Rate, and High-Risk Alerts
- **Fraud Trends Chart** - Visualize fraudulent vs legitimate transactions over time
- **Transaction Table** - Browse recent high-risk transactions with detailed information
- **Merchant Risk Chart** - Analyze average risk scores by merchant category
- **Model Performance Metrics** - Monitor ML model performance with Precision, Recall, F1 Score, Accuracy, and AUC-ROC

### Key Metrics Tracked
- **Model AUC**: 92.4% - Area Under the ROC Curve
- **False Positive Rate**: 18% with continuous reduction
- **Recall Rate**: 87.3% - Fraud detection accuracy
- **Precision**: 94.2%
- **F1 Score**: 90.6%
- **Overall Accuracy**: 96.8%

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.x** - Type-safe development

### Styling & UI Components
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - Re-usable component collection

### Data Visualization
- **Recharts** - Composable charting library for React
- **Custom Chart Components** - Area charts, bar charts with responsive design

### Form & State Management
- **React Hook Form 7.60.0** - Performant form validation
- **Zod 3.25.76** - TypeScript-first schema validation

### Additional Libraries
- **next-themes** - Dark mode support
- **date-fns** - Date utility library
- **class-variance-authority** - CSS class management
- **tailwind-merge** - Merge Tailwind classes efficiently

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- pnpm (recommended) or npm
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Fraud-Detection-Model-for-Payment-Transactions.git
   cd Fraud-Detection-Model-for-Payment-Transactions
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

### Building for Production

```bash
# Create optimized production build
pnpm build

# Preview production build locally
pnpm start
```

## 📁 Project Structure

```
.
├── app/                          # Next.js App Router directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main dashboard page
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── chart.tsx
│   │   └── ...                  # 40+ UI components
│   │
│   ├── dashboard-header.tsx     # Top navigation bar
│   ├── kpi-cards.tsx           # Key Performance Indicators display
│   ├── fraud-trends-chart.tsx  # Transaction trends visualization
│   ├── transaction-table.tsx   # Recent transactions table
│   ├── merchant-risk-chart.tsx # Merchant category risk analysis
│   ├── model-performance-card.tsx # ML model metrics
│   └── theme-provider.tsx      # Theme management
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
│
├── lib/                        # Utility functions
│   └── utils.ts                # Helper utilities (cn, etc.)
│
├── public/                     # Static assets
│
├── styles/                     # Additional styles
│   └── globals.css            # Global CSS variables
│
├── components.json             # shadcn/ui configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🧩 Component Documentation

### Dashboard Components

#### `DashboardHeader`
Top navigation bar with branding, notifications, settings, and user menu.
- Features: Bell notifications, settings dropdown, user profile menu
- Location: `components/dashboard-header.tsx`

#### `KpiCards`
Displays four key performance indicators in a grid layout:
- Model AUC (Area Under Curve)
- False Positive Rate
- Recall Rate (Fraud Detection Rate)
- High Risk Alerts count

#### `FraudTrendsChart`
Area chart showing the trend of fraudulent vs legitimate transactions over time.
- Uses Recharts for visualization
- Displays 12 days of transaction data
- Color-coded for easy distinction

#### `TransactionTable`
Interactive table showing recent high-risk transactions with:
- Transaction ID
- Merchant name
- Transaction amount
- Risk score (visual progress bar)
- Status badges (legitimate/flagged/blocked)
- Quick action buttons

#### `MerchantRiskChart`
Horizontal bar chart displaying average risk scores by merchant category:
- Electronics, Jewelry, Online Retail (high risk)
- Travel, Restaurants, Gas Stations (lower risk)
- Identifies categories requiring enhanced monitoring

#### `ModelPerformanceCard`
Displays ML model evaluation metrics:
- Precision: 94.2%
- Recall: 87.3%
- F1 Score: 90.6%
- Accuracy: 96.8%
- AUC-ROC Score: 92.4%

## 🎨 Styling & Theming

The application uses a dark theme by default with a comprehensive design system:

- **CSS Variables** - Defined in `styles/globals.css` for consistent theming
- **Tailwind CSS** - Utility-first approach for rapid UI development
- **Color Palette** - Semantic color tokens (primary, destructive, muted, etc.)
- **Responsive Design** - Mobile-first approach with breakpoints
- **Typography** - Geist and Geist Mono fonts

### Customizing Theme

Modify CSS variables in `app/globals.css` or `styles/globals.css`:

```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  /* ... more variables */
}
```

## 🔧 Configuration

### Next.js Configuration

The `next.config.mjs` file includes:
- TypeScript build error bypassing for development
- Unoptimized images for faster development builds

### TypeScript Configuration

`tsconfig.json` is configured with:
- Strict mode enabled
- Path aliases (`@/*` maps to root)
- Modern ES6+ target
- Bundler module resolution

## 📊 Data Management

Currently, the application uses mock data for demonstration purposes. The data structures include:

- **Transaction Data** - ID, amount, merchant, risk score, status, timestamp
- **KPI Metrics** - Model performance, alert counts, trend indicators
- **Chart Data** - Time-series transaction trends, merchant risk scores

### Integrating Real Data

To integrate with a real backend:

1. Replace mock data in component files with API calls
2. Use React hooks (e.g., `useEffect`, `useState`) for data fetching
3. Consider using SWR or React Query for data management
4. Implement WebSocket connections for real-time updates

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The application can also be deployed to:
- **Netlify** - Static hosting with serverless functions
- **AWS Amplify** - Full-stack hosting
- **Docker** - Containerized deployment
- **Traditional Hosting** - Build and serve static files

### Environment Variables

If your application requires environment variables:

1. Create `.env.local` file in root
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Configure in your deployment platform

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain component modularity
- Write descriptive commit messages
- Test thoroughly before submitting PRs
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

**johaankjis** - [GitHub Profile](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Inspired by modern fintech dashboards

## 📞 Support

For support, issues, or feature requests:
- Open an issue on [GitHub](https://github.com/johaankjis/Fraud-Detection-Model-for-Payment-Transactions/issues)
- Contact the maintainers

## 🔮 Future Enhancements

- [ ] Real-time WebSocket integration for live updates
- [ ] Backend API integration
- [ ] User authentication and authorization
- [ ] Advanced filtering and search capabilities
- [ ] Export functionality for reports
- [ ] Email notifications for high-risk transactions
- [ ] Mobile application
- [ ] Multi-language support
- [ ] Advanced analytics and reporting
- [ ] Model retraining interface
- [ ] A/B testing for model improvements

---

**Note**: This is a demonstration project showcasing a fraud detection dashboard interface. For production use, integrate with actual machine learning models and payment processing systems.
