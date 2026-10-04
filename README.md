# AI Chatbot

A simple AI chatbot built with Python and FastAPI with a browser-based chat UI. It supports a demo mode and optional OpenAI API integration.

## Features
- FastAPI backend
- Chat UI in the browser
- Demo mode without API key
- Optional OpenAI API support
- Easy to extend

## Stack
- Python 3.11+
- FastAPI
- Jinja2
- OpenAI Python SDK
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

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Add your key in `.env` if you want live model responses:

```env
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4o-mini
```

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
