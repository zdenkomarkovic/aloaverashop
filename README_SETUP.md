# Aloe Vera Shop - E-commerce sajt sa Sanity CMS

Kompletan e-commerce sajt za prodaju Aloe Vera proizvoda, inspirisan sa https://aloevera.rs/ ali sa jedinstvenim dizajnom i Sanity CMS integracijom.

## 🚀 Funkcionalnosti

- ✅ **Sanity CMS Integracija** - Potpuna Content Management System integracija
- ✅ **Početna stranica** - Hero sekcija, kategorije proizvoda, istaknuti proizvodi
- ✅ **Proizvodi** - Listing sa filteringom po kategorijama
- ✅ **Detalji proizvoda** - Kompletna stranica proizvoda sa slikama, opisom, cenom
- ✅ **Blog** - Blog listing i pojedinačni članci
- ✅ **Poslovna saradnja** - Stranica za business partnere
- ✅ **Shopping Cart** - Context-based korpa za kupovinu
- ✅ **Responzivni dizajn** - Optimizovano za sve uređaje
- ✅ **SEO Optimizacija** - Metadata i Open Graph tagovi

## 📋 Tehnologije

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Sanity CMS** - Headless CMS
- **Tailwind CSS** - Styling
- **Radix UI** - UI komponente
- **Framer Motion** - Animacije

## 🛠️ Setup

### 1. Kreiranje Sanity projekta

Prvo morate kreirati Sanity projekat:

\`\`\`bash
# Instalirajte Sanity CLI globalno
npm install -g @sanity/cli

# Kreirajte novi Sanity projekat (u odvojenom direktorijumu ako želite odvojeno)
# ili koristite postojeću konfiguraciju u projektu
\`\`\`

Ili možete koristiti Sanity web interface:
1. Posetite https://www.sanity.io/manage
2. Kreirajte novi projekat
3. Zapamtite **Project ID** i **Dataset** (obično "production")

### 2. Environment Variables

Kreirajte `.env.local` fajl u root-u projekta:

\`\`\`env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-here
\`\`\`

Dobijte API token:
1. Idite na https://www.sanity.io/manage
2. Izaberite vaš projekat
3. API → Tokens
4. Create new token sa "Editor" pravima

### 3. Instalacija dependencies

\`\`\`bash
npm install
\`\`\`

### 4. Pokretanje development servera

\`\`\`bash
npm run dev
\`\`\`

Sajt će biti dostupan na http://localhost:3000

### 5. Pristup Sanity Studio

Sanity Studio je dostupan na:
\`\`\`
http://localhost:3000/studio
\`\`\`

Ovde možete dodavati:
- **Kategorije** - Kategorije proizvoda
- **Proizvode** - Proizvode sa slikama, cenama, opisima
- **Blog postove** - Članci za blog

## 📁 Struktura projekta

\`\`\`
aloaverashop/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Početna stranica
│   ├── proizvodi/           # Stranice proizvoda
│   ├── blog/                # Blog stranice
│   ├── poslovna-saradnja/   # Business partnership
│   ├── kontakt/             # Kontakt stranica
│   ├── api/                 # API rute
│   └── studio/              # Sanity Studio
├── components/              # React komponente
├── contexts/                # React Context (Cart)
├── lib/                     # Utility funkcije
├── sanity/                  # Sanity konfiguracija
│   ├── schemas/            # Content schemas
│   ├── client.ts           # Sanity client
│   └── config.ts           # Sanity config
├── types/                   # TypeScript tipovi
└── public/                  # Statički fajlovi
\`\`\`

## 📝 Dodavanje sadržaja

### Dodavanje kategorija

1. Idite na `/studio`
2. Kliknite na "Kategorija"
3. Popunite:
   - Naziv (npr. "Sokovi od Aloe Vere")
   - Slug (automatski generiše se)
   - Opis
   - Slika
   - Redosled (za sortiranje)

### Dodavanje proizvoda

1. Idite na `/studio`
2. Kliknite na "Proizvod"
3. Popunite:
   - Naziv proizvoda
   - Slug
   - Slike (možete dodati više)
   - Kategorija
   - Cena
   - Stara cena (opciono za popust)
   - Kratak opis
   - Detaljan opis
   - Sastojci
   - Način upotrebe
   - Zapremina
   - Status (Na stanju / Nema na stanju)
   - Oznake (Izdvojen, Bestseller, Novi)

### Dodavanje blog postova

1. Idite na `/studio`
2. Kliknite na "Blog Post"
3. Popunite:
   - Naslov
   - Slug
   - Autor
   - Datum objave
   - Glavna slika
   - Kratak pregled
   - Sadržaj (rich text editor)
   - Istaknut post (opciono)

## 🎨 Prilagođavanje

### Boje

Boje možete promeniti u `tailwind.config.ts`:

\`\`\`typescript
colors: {
  emerald: { ... }, // Glavna boja
  teal: { ... },    // Sekundarna boja
}
\`\`\`

### Kontakt informacije

Ažurirajte kontakt informacije u:
- `components/Header.tsx` - Telefon u header-u
- `components/Footer.tsx` - Footer informacije
- `app/kontakt/page.tsx` - Kontakt forma

## 🚢 Deployment

### Vercel (Preporučeno)

1. Push kod na GitHub
2. Povežite repo sa Vercel
3. Dodajte environment variables u Vercel dashboard
4. Deploy!

### Environment variables za production

U Vercel-u dodajte iste environment variables kao u `.env.local`:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
\`\`\`

## 📞 Sledeći koraci

1. **Setup Sanity projekat** - Kreirajte account i dobijte credentials
2. **Dodajte sadržaj** - Popunite kategorije, proizvode i blog
3. **Prilagodite dizajn** - Promenite boje i branding prema vašim potrebama
4. **Integrirajte payment** - Dodajte Stripe ili drugi payment gateway
5. **Deploy** - Postavite na Vercel ili drugi hosting

## 🆘 Pomoć

Ako vam treba pomoć:
- Sanity dokumentacija: https://www.sanity.io/docs
- Next.js dokumentacija: https://nextjs.org/docs
- Tailwind CSS dokumentacija: https://tailwindcss.com/docs

## 📄 Licenca

MIT
