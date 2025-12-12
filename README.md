# Gaspard Hassenforder - Digital Portfolio

A modern, interactive digital CV/portfolio built with Next.js 16, featuring an AI-powered chatbot assistant that answers questions about professional experience, skills, and projects.

## 🚀 Features

- **Interactive AI Assistant**: Chat with "Buddy", an OpenAI-powered assistant that can answer questions about professional background
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark Mode Support**: Automatic dark/light mode based on system preferences
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **Type-Safe**: Full TypeScript implementation
- **Performance Optimized**: Static generation where possible for fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI Integration**: OpenAI GPT-4o-mini via Vercel AI SDK
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CV_project_ts
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_actual_api_key_here
```

## 🏃 Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 🚀 Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add your environment variable:
```bash
vercel env add OPENAI_API_KEY
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add `OPENAI_API_KEY` to Environment Variables in project settings
4. Deploy!

## 📝 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `src/lib/data.ts` with your own details
2. **Replace Images**: Add your profile picture and CV to `/public` folder
3. **Modify Sections**: Edit components in `src/components/` to add/remove sections
4. **Styling**: Adjust colors and styling in `src/app/globals.css` and Tailwind config

## 📁 Project Structure

```
CV_project_ts/
├── public/              # Static assets (images, PDFs)
├── src/
│   ├── app/            # Next.js app router
│   │   ├── api/chat/   # AI chatbot API endpoint
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Chatbot.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Papers.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── WorkHistory.tsx
│   └── lib/
│       ├── data.ts     # Personal data and content
│       └── utils.ts    # Utility functions
├── .env.example        # Example environment variables
├── package.json
└── tsconfig.json
```

## 🧪 Code Quality

```bash
# Run linting
npm run lint

# Run type checking
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Gaspard Hassenforder**
- Email: hassenforder.gaspard@gmail.com
- LinkedIn: [gaspard-hassenforder](https://www.linkedin.com/in/gaspard-hassenforder-554431225/)
- GitHub: [Gaspard0302](https://github.com/Gaspard0302)

---

Built with ❤️ using Next.js and Vercel AI SDK
