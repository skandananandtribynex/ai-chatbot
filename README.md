# AI Chatbot

A simple AI chatbot built with Python and FastAPI with a browser-based chat UI. It supports a demo mode and optional Google Gemini integration.

## Features
- FastAPI backend
- Chat UI in the browser
- Demo mode without API key
- Optional Google Gemini API support
- Easy to extend

## Stack
- Python 3.11+
- FastAPI
- Jinja2
- Google Generative AI SDK
- Uvicorn

## Setup

1. Create a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Create your environment file:

```bash
cp .env.example .env
```

4. Add your Google AI Studio API key to `.env`:

```env
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_MODEL=gemini-1.5-flash
```

You can get the key at: https://aistudio.google.com/app/apikey

If you do not provide an API key, the app falls back to a demo response mode.

## Run

```bash
uvicorn app.main:app --reload
```

Open:

```text
http://localhost:8000
```

## API

POST `/api/chat`

Example JSON:

```json
{
  "message": "Hello!",
  "history": [
    {"role": "user", "content": "Hi"},
    {"role": "assistant", "content": "Hello there!"}
  ]
}
```

Response:

```json
{
  "reply": "Hello! I am your AI chatbot."
}
```
