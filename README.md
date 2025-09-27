# Fantasy Hoops - NBA Fantasy Basketball App

A modern Next.js application for fantasy basketball rankings and projections, inspired by HashtagBasketball.

## 🏀 Features

- **Player Rankings & Projections**: View top NBA players with customizable fantasy scoring
- **Team Overview**: Browse players by NBA team
- **Interactive Tools**: Adjust scoring weights and projection parameters
- **Player Details**: Detailed player profiles with recent game logs and charts
- **Modern UI**: Built with Tailwind CSS and custom UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0+ (your current version 18.17.1 needs to be updated)
- npm or yarn

### Installation

1. Clone the repository (if not already done)
2. Install dependencies:
   ```bash
   npm install
   ```

3. Update Node.js to version 18.18.0 or higher:
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use a version manager like nvm

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
fantasy-nba/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── players/        # API endpoints
│   │   ├── player/[id]/       # Dynamic player pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   └── components/
│       └── ui/                # UI components
├── lib/                       # Utility functions and data
│   ├── types.ts              # TypeScript types
│   ├── mockPlayers.ts        # Sample player data
│   └── scoring.ts            # Fantasy scoring logic
└── public/                   # Static assets
```

## 🔧 Current Setup Status

### ✅ Completed
- [x] Project structure created
- [x] Basic Next.js configuration
- [x] TypeScript types defined
- [x] Mock player data
- [x] Fantasy scoring system
- [x] UI components library
- [x] API routes
- [x] Path aliases (@/* → ./src/*)

### 📝 Components Created
- Button, Card, Input, Label, Select
- Slider, Tabs, Dialog, Tooltip
- All components are lightweight implementations

### 🎯 Next Steps

#### Option 1: Start with Basic Version
1. Create a simple player rankings table
2. Add basic filtering by team/position
3. Implement search functionality
4. Add the full UI gradually

#### Option 2: Deploy Full Template
The template.txt file contains a complete implementation with:
- Full player rankings interface
- Team overview pages
- Interactive scoring weights
- Player detail dialogs with charts
- Responsive design

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📊 Fantasy Scoring

The app supports multiple fantasy basketball scoring systems:
- 9-category (standard)
- 8-category (no turnovers)
- Points leagues
- Custom weighted scoring

## 🎨 UI Components

All UI components are custom-built lightweight implementations that can be easily replaced with shadcn/ui or other component libraries later.

## 🚀 Deployment

Ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📝 Notes

- Node.js version needs to be updated to 18.18.0+ to run Next.js 15
- All mock data is currently stored in `lib/mockPlayers.ts`
- API endpoints are ready to be connected to real data sources
- UI components are functional but basic - can be enhanced later

## 🤝 Contributing

Feel free to enhance the application by:
1. Adding real NBA data integration
2. Improving UI components
3. Adding more fantasy features
4. Optimizing performance

---

**Ready to continue? Update your Node.js version and run `npm run dev` to see your Fantasy Hoops app in action!** 🏀
