# Revision

## 💻 Prerequisites

Before starting, create a virtualenv for python:
* Python `3.9.6`
* Django `4.0`

## 🚀 Installing Revision

First, install the dependencies

Install the dependencies next.js `cd web` or `revision\web`
```bash
yarn install
# or
npm install
```

Install the dependencies django `cd server` or `revision\server`
```bash
pip install -r requirements.txt
```

Then run the development server:

```bash
yarn dev
# or
npm run dev
```

Run the django server:

```bash
python manage.py runserver
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (Next.js)

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) with your browser to see the result (Django)