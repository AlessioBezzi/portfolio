# Personal Portfolio

Portfolio personale sviluppato con React, TypeScript e Vite.

Il sito presenta profilo, progetti selezionati, competenze tecniche e contatti, con supporto a tema chiaro/scuro e contenuti bilingua.

## Stack

- React
- TypeScript
- Vite
- Framer Motion
- Lucide React

## Avvio locale

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

L'app sara disponibile su:

```txt
http://127.0.0.1:5173/
```

## Build

Per generare la versione di produzione:

```bash
npm run build
```

La build viene salvata nella cartella `dist/`.

## Deploy

Il progetto puo essere pubblicato su GitHub Pages, Vercel, Netlify o Cloudflare Pages.

### GitHub Pages

Il deploy su GitHub Pages e gia configurato tramite GitHub Actions.

Passaggi:

1. Crea una repository su GitHub.
2. Fai push del progetto sul branch `main`.
3. Su GitHub vai in `Settings > Pages`.
4. In `Build and deployment`, seleziona `GitHub Actions`.
5. Dopo il push, il workflow `Deploy to GitHub Pages` pubblichera automaticamente il sito.

Per repository normali, il sito sara disponibile a un indirizzo simile:

```txt
https://username.github.io/nome-repository/
```

Per una repository chiamata `username.github.io`, sara disponibile su:

```txt
https://username.github.io/
```

### Altre piattaforme

Configurazione consigliata:

```txt
Build command: npm run build
Output directory: dist
```
