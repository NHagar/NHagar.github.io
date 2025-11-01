# Nick Hagar — personal site

## Getting started

```sh
npm install
npm run dev   # local dev server with live reload
npm run build # production build to ./_site
```

The dev server runs on [http://localhost:8080](http://localhost:8080) by default.

## Project structure

```text
/
├── public/            # Static assets copied straight through to the build
├── src/
│   ├── _data/         # Global data: updates, writing, research, etc.
│   ├── _includes/     # Layouts and shared templates
│   ├── styles/        # Global CSS
│   └── index.njk      # Single-page site template
├── eleventy.config.js
├── package.json
└── README.md
```

Eleventy outputs the compiled site to `_site/`.

## Content editing

- Update research areas, bios, and social links in `src/_data`.
- Add or edit writing in `src/_data/blog.yaml`.
- Add software or prototypes in `src/_data/software.yaml` and `src/_data/prototypes.yaml`.
- The homepage pulls the most recent three updates from `src/_data/updates.yaml`.
