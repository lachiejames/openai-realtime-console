<div align="center">
  <h1>Next.js OpenAI Realtime Console</h1>
  <p>A Next.js implementation of the OpenAI Realtime Console with WebRTC support and one-click Vercel deployment.</p>
</div>

<div align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a>
</div>

<br/>

## Overview

This is a Next.js port of the [official OpenAI Realtime Console](https://github.com/openai/openai-realtime-console), rebuilt with the App Router and optimized for Vercel deployment. It provides a real-time interface for interacting with OpenAI's WebRTC-based realtime API.

## Features

- **Real-time Communication**: WebRTC-based connection to OpenAI's realtime API
- **Modern Stack**:
  - [Next.js 15](https://nextjs.org) with App Router
  - React Server Components
  - TypeScript for type safety
  - Tailwind CSS for styling
- **Interactive Console**:
  - Real-time event logging
  - Session management
  - Text message support
  - Color palette generation tool
- **Production Ready**:
  - Environment variable management
  - Error handling
  - Type-safe API routes

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **API Integration**: OpenAI Realtime API with WebRTC
- **Deployment**: [Vercel](https://vercel.com)

## Deploy Your Own

Deploy your own version of the Realtime Console to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flachiejames%2Fopenai-realtime-console&env=OPENAI_API_KEY&envDescription=Learn%20more%20about%20how%20to%20get%20the%20API%20Keys%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Flachiejames%2Fopenai-realtime-console%2Fblob%2Fmain%2F.env.example&project-name=openai-realtime-console&repository-name=openai-realtime-console)

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/lachiejames/openai-realtime-console.git
cd openai-realtime-console
```

2. Install dependencies:
```bash
npm install
```

3. Copy the example environment variables:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```bash
OPENAI_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Environment Variables

The following environment variables are required:

- `OPENAI_API_KEY`: Your OpenAI API key (Get one at [OpenAI's website](https://platform.openai.com/account/api-keys))

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ using [Next.js](https://nextjs.org) and [OpenAI](https://openai.com)
