# Emmerske Efterskole — hjemmeside

> Ny, ordblinde-venlig hjemmeside til Emmerske Efterskole i Tønder — bygget til at være let at forstå for elever, tryg for forældre og indbydende for kommende ansøgere.

## Formål og vision

Emmerske Efterskole henvender sig blandt andet til elever med ordblindhed og andre
læringsudfordringer. Formålet med dette projekt er at give skolen en hjemmeside, hvor:

- **ordblinde elever intuitivt kan forstå indholdet** — via multimodal formidling (tekst,
  billeder, video og oplæsning) i stedet for lange tekstblokke,
- **forældre oplever tydelighed og tryghed** — klar information, enkel navigation og et roligt
  udtryk,
- **besøgende får lyst til at vælge skolen** — tydelige handlingsopfordringer ("Book en
  rundvisning", "Ring til os") og et imødekommende førstehåndsindtryk.

Projektet hører under ClipCores mission om digitale løsninger med **lav kompleksitet, høj
robusthed og lave driftsomkostninger**. Derfor er siden bygget som et statisk website, der kan
hostes gratis og vedligeholdes af én person.

## Slutmål (Definition of Done)

En færdig, offentligt tilgængelig hjemmeside for Emmerske Efterskole, der:

1. Rummer skolens kernesider med reelt indhold (forside, om os, dagligdagen, valgfag, kontakt).
2. Er gennemført ordblinde-venlig og tilgængelig (oplæsning, justerbar skrift, høj kontrast,
   ordblindeskrift, tastaturnavigation).
3. Har en fungerende kontaktvej, så besøgende kan booke en rundvisning eller skrive til skolen.
4. Er sat i drift på et stabilt, gratis hosting-setup med automatisk deploy.

Succes måles på, at skolen kan tage siden i brug som sin rigtige hjemmeside, og at kommende
elever/forældre kan finde information og komme i kontakt uden barrierer.

## Nuværende status

- **Fase:** MVP bygget — projektet er markeret **på pause** i Paperclip.
- **Prioritet:** medium.
- **Hvor langt er vi:** Alle fem kernesider er bygget, tilgængeligheds- og SEO-arbejdet er
  gennemført, og der er opsat automatisk deploy til GitHub Pages. Siden fungerer teknisk, men
  flere steder står der **pladsholder-indhold**, der skal erstattes med skolens eget materiale,
  før siden kan gå i luften som skolens officielle hjemmeside.
- **Seneste milepæl nået:** Fase 6 — multimodal formidling og tilgængelighed (oplæsning,
  ordblindeskrift, høj kontrast, justerbar skriftstørrelse).

> **Ærlig note:** Projektbeskrivelsen i Paperclip er fra 2026-04-08 og siger "Fase 2 afsluttet".
> Selve repoet er faktisk kommet længere end det (SEO og tilgængelighed er også lavet). Denne
> README afspejler den reelle tilstand i koden pr. dags dato, ikke den gamle projektbeskrivelse.

## Planlægning og faser

Faserne herunder afspejler det arbejde, der faktisk ligger i repoets git-historik. Bemærk at
nummereringen springer (2 → 5 → 6) — faserne er navngivet, som de blev committet, og der er ikke
opfundet mellemliggende faser.

| Fase | Indhold | Status |
|------|---------|--------|
| 1 | Projektopsætning (Astro + Tailwind, GitHub-repo) | ✅ Færdig |
| 2 | Kernesider: forside, om os, dagligdagen, valgfag, kontakt | ✅ Færdig |
| — | Kontaktformular (Formspree med mailto-fallback) | ✅ Færdig |
| — | Automatisk deploy til GitHub Pages (GitHub Actions) | ✅ Færdig |
| 5 | SEO og metadata på alle sider (Open Graph, canonical, sitemap) | ✅ Færdig |
| 6 | Multimodal formidling og tilgængelighed (oplæsning, ordblindeskrift, kontrast, skriftstørrelse) | ✅ Færdig |
| — | Erstat pladsholder-indhold med skolens eget materiale | ⬜ Ikke startet |
| — | Adgangsstyring (midlertidig adgangskode) — planlagt i projektbeskrivelsen | ⬜ Ikke startet |

## Mangler på kort sigt (næste skridt)

Konkret arbejde, der skal til, før siden kan bruges som skolens rigtige hjemmeside:

1. **Erstat velkomstvideoen.** Forsiden indlejrer aktuelt en pladsholder-YouTube-video
   (`dQw4w9WgXcQ`) — den skal udskiftes med Emmerskes egen velkomstvideo.
2. **Erstat udtalelser/testimonials.** Elevcitaterne på forsiden (Marcus, Sofie) er
   pladsholdere og skal erstattes med rigtige, godkendte udtalelser.
3. **Tilføj rigtigt billedmateriale**, herunder et delbart `og-image.jpg` (bruges i
   Open Graph/social deling — filen refereres, men skal leveres).
4. **Kontrollér og opdatér kontaktoplysninger** (telefon `74 72 44 33`, Formspree-endpoint,
   e-mail) så de peger på skolens faktiske kanaler.
5. **Faktatjek indholdet på alle kernesider** sammen med skolen (om os, dagligdagen, valgfag).

## Mangler på lang sigt (roadmap)

- **Adgangsstyring:** Projektbeskrivelsen nævner en midlertidig adgangskode under udviklingen —
  den er endnu ikke implementeret og skal besluttes/bygges, hvis der er behov.
- **Egen domæne** i stedet for GitHub Pages-URL'en (kræver domænekøb og DNS-opsætning).
- **Løbende indholdsvedligehold:** nyheder, arrangementer, ansøgningsfrister mv.
- **Genoptagelse af projektet:** siden er sat på pause. Betingelsen for at genoptage er, at
  skolen leverer rigtigt indhold (tekst, billeder, video), så pladsholderne kan erstattes.

## Teknik og opsætning

**Stak:**

- [Astro](https://astro.build/) `^4.16` — statisk site-generator (`output: 'static'`).
- [Tailwind CSS](https://tailwindcss.com/) `^3.4` via `@astrojs/tailwind`.
- `@astrojs/sitemap` til automatisk sitemap.
- Hosting: **GitHub Pages** under stien `/emmerske_clipcore`.

**Kør lokalt:**

```bash
npm install       # installér afhængigheder
npm run dev       # start udviklingsserver (http://localhost:4321)
npm run build     # byg statisk site til ./dist
npm run preview   # forhåndsvis det byggede site
```

**Projektstruktur:**

```
src/
  layouts/Layout.astro              # fælles HTML-skelet, SEO-metadata, globale styles
  components/
    Header.astro                    # topmenu/navigation
    Footer.astro                    # sidefod
    AccessibilityToolbar.astro      # oplæsning, skriftstørrelse, kontrast, ordblindeskrift
  pages/
    index.astro                     # forside
    om-os.astro                     # om skolen
    dagligdagen.astro               # hverdagen på skolen
    valgfag.astro                   # valgfag
    kontakt.astro                   # kontakt + formular
.github/workflows/deploy.yml        # automatisk build + deploy til GitHub Pages
astro.config.mjs                    # Astro-konfiguration (site + base-sti)
```

**Deploy:** Push til `main` udløser workflowet i `.github/workflows/deploy.yml`, som bygger
med Astro og publicerer `./dist` til GitHub Pages. Der kræves ingen manuel deploy.

**Tilgængelighed indbygget i `Layout.astro` og `AccessibilityToolbar.astro`:**

- Oplæsning af siden (tekst-til-tale).
- Justerbar skriftstørrelse.
- Høj-kontrast-tilstand.
- Ordblinde-venlig skrift (OpenDyslexic).
- "Spring til indhold"-link og synlige fokusindikatorer for tastaturnavigation.
- `lang="da"` og semantisk markup.

## Links

- **Paperclip-projekt:** Emmerske_side (mål: *Høj grad af autonomi*)
- **Denne opgave:** CLIA-4055 — Skriv velbeskrevet README for Emmerske_side
- **Overordnet dokumentationsstandard:** CLIA-4052 — README-dokumentation for hvert projekt
- **GitHub-repo:** <https://github.com/qvisty/emmerske_clipcore>
- **Live site (GitHub Pages):** <https://qvisty.github.io/emmerske_clipcore/>

---
_Sidst opdateret: 2026-09-03 · Vedligeholdes som del af CLIA-4052._
