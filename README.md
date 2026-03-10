# How To France (HTF)

A Next.js guide platform for international students in France (Villejuif & Paris): legal steps, housing, wellbeing, associations, and a full FAQ.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### One-command launcher (Windows)

```bash
python app.py
```

This clears caches (`.next` + temp), installs dependencies if needed, then starts the dev server.

## Key features

- **FAQ**: available at `/forum` (custom-styled, matches the other pages).
- **Help Center**: quick access to the FAQ.
- **Language switcher**: FR / EN / AR / ES / HI via Google Translate widget (no API key).

## Notes

- The translation widget uses cookies (`googtrans`) and reloads the page to apply translations.
