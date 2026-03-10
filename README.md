# How To France (HTF)

Welcome to **How To France** — a modern, student‑friendly guide to help you **land in France with confidence**.

Moving to a new country is exciting… and sometimes overwhelming. HTF turns the “Where do I start?” into a clear path:
**legal steps**, **housing**, **health & wellbeing**, **student life**, and a **rich FAQ** focused on **Villejuif & Paris**.

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

---

## What this website does

Once the app is running on `http://localhost:3000`, you get a **single place to onboard international students in France**, with a focus on **Villejuif / Paris area**:

- A **Home** page that explains who the site is for and how to use it.
- A **clear structure** with sections:
  - `/legal` – visas, residence permits, CVEC, health insurance, official links.
  - `/housing` – CROUS, private rentals, CAF / APL, Visale, why Villejuif is cheaper than Paris.
  - `/wellbeing` – healthcare, mental health, reimbursements, student mutuelles.
  - `/associations` – student clubs, local associations, integration opportunities.
  - `/forum` – actually a **rich FAQ** page written for Villejuif & Paris.

On top of the static content:

- A **floating Help Center** button to jump directly to the FAQ.
- A **language switcher** in the navbar to translate the whole site.

## Key features

- **FAQ**: available at `/forum` (custom-styled, matches the other pages).
- **Help Center**: quick access to the FAQ.
- **Language switcher**: FR / EN / AR / ES / HI via Google Translate widget (no API key).

## Notes

- The translation widget uses cookies (`googtrans`) and reloads the page to apply translations.
