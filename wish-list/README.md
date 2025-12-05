# 🎄 Santa's Great Wish List 🎄

A festive, interactive Christmas wish list application where you can write your wishes and let Santa decide if you've been naughty or nice! Built with Next.js and featuring beautiful animations and a magical Christmas-themed UI.

![Christmas Wish List](https://img.shields.io/badge/Holiday-Magic-red?style=for-the-badge&logo=santa)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **Interactive Wish List**: Add multiple wishes to your Christmas list
- **Typewriter Animation**: Watch your wishes being written with a smooth typing effect
- **Santa's Rating**: Each wish gets automatically rated as "Nice" ⭐ or "Naughty" 😈
- **Wax Seal Animation**: Complete your list and seal it with an animated wax seal stamp
- **Beautiful UI**: 
  - Parchment paper aesthetic with aged texture
  - Snowflake animations falling in the background
  - Candle glow effects
  - Serif fonts for that classic, handwritten feel
  - Responsive design that works on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd wish-list
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app

## 📁 Project Structure

```
wish-list/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with snowfall background
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── wish-list-generator.tsx  # Main wish list component
│   ├── wish-item.tsx            # Individual wish item with animations
│   └── wax-seal.tsx            # Wax seal stamp component
├── public/                 # Static assets
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS v4
  - Custom animations (snowflakes, fade-in, slide-up, stamp)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives via shadcn/ui
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans and Geist Mono

## 🎨 Key Components

### WishListGenerator
The main component that manages the wish list state, handles adding wishes, and displays the complete UI with parchment paper styling.

### WishItem
Individual wish items with:
- Typewriter animation effect
- Nice/Naughty rating badges
- Smooth fade-in and slide-up animations

### WaxSeal
An animated wax seal stamp that appears when you complete your wish list, featuring a gradient red seal with Santa emoji.

## 🎯 Usage

1. **Add Wishes**: Type your Christmas wish in the input field and press Enter or click the arrow button
2. **Watch Animation**: See your wish being written out with a typewriter effect
3. **Get Rating**: Santa will automatically rate each wish as "Nice" or "Naughty"
4. **Complete List**: Click "Complete My List & Seal It!" when you're done
5. **Seal**: Watch the wax seal animation stamp your completed list

## 🎭 Customization

### Colors
The app uses a Christmas color palette defined in the components:
- Parchment: `#f4e4c1`
- Dark red: `#8b0000`, `#c41e3a`
- Green (Nice list): `#165b33`
- Brown (borders): `#8b7355`

### Animations
Custom animations defined in `globals.css`:
- `fall`: Snowflake falling animation
- `fade-in`: Smooth entrance animation
- `slide-up`: Slide up with fade for ratings
- `stamp`: Wax seal stamping animation

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed and live!

## 🎄 Features in Detail

### Snowfall Background
The main page features 50 animated snowflakes falling at random speeds and positions for a magical winter atmosphere.

### Parchment Paper Effect
The wish list is displayed on a beautifully styled parchment paper with:
- Aged paper texture overlay
- Candle glow effects in the corners
- Border styling that mimics a scroll

### Interactive Ratings
Each wish receives a random rating after the typewriter animation completes, with a 70% chance of being "Nice" and 30% chance of being "Naughty".

## 📝 License

See the [LICENSE](../LICENSE) file for details.

## 🎅 Happy Holidays!

May all your wishes come true this Christmas! 🎄✨
