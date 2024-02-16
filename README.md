# 🔐 [Next Protect Deployed Here](https://next-protector.vercel.app/) 🔐

Next.js app with email & password auth, a PostgreSQL database, and protected content, using Next-Auth and Prisma(ORM)


## Prerequisites 
1. Must have [Node.js](https://nodejs.org) installed on your computer (18)
2. A good code editor, preferably [VSCode](https://code.visualstudio.com)

### 🔧 Recommended VSCode Extensions

- [Prisma Syntax Highlighter](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [TailwindCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Material Theme (the VSCode theme I use)](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

### 📚 Tech Used 📚

- [Nextjs 14](https://nextjs.org)
- [Prisma (ORM)](https://prisma.io)
- [Next Auth (authentication)](https://authjs.dev)
- [Railway (Postgres db)](https://railway.app/new)
- [ShadCN UI (user interface)](https://ui.shadcn.com)
- [Lucide (icon library)](https://lucide.dev)
- [TailwindCSS (css library)](https://tailwindcss.com)


## Getting Started

```bash
git clone https://github.com/rdrachenberg/next-protector.git && cd next-protector

npm install

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Make a .env file in projects root directory

```bash
touch .env
``` 


### You will need a .env file that looks like this
```evn
# Create free Postgres db: https://railway.app/new
DATABASE_URL="YOUR RAILWAY APP POSTGRESS DATABASE_URL"

NEXTAUTH_URL=http://localhost:3000
# Generate in terminal with command `openssl rand -hex 64`
NEXTAUTH_SECRET="YOUR RANDOM SECRET HERE"

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### 🧠 Learn More

Inspired by: https://github.com/vercel/nextjs-postgres-auth-starter
