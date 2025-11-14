# 🛒 Uputstvo za podešavanje korpe i checkout-a

Sistem korpe i checkout-a je kompletan implementiran! Evo šta je sve dodato:

## ✨ Implementirane funkcionalnosti

### 1. **Shopping Cart (Korpa)**
- ✅ Dodavanje proizvoda u korpu
- ✅ Upravljanje količinama (+/- dugmad)
- ✅ Brisanje proizvoda iz korpe
- ✅ Prikaz ukupne cene
- ✅ Brojač proizvoda na ikoni korpe
- ✅ Sidebar koji se otvara sa desne strane
- ✅ LocalStorage perzistencija (korpa se čuva i posle zatvaranja browsera)

### 2. **Checkout stranica**
- ✅ Forma za unos podataka kupca
- ✅ Validacija svih polja
- ✅ Pregled porudžbine
- ✅ Automatsko slanje email-a

### 3. **Email notifikacije**
- ✅ Email sa detaljima porudžbine poslat prodavcu (`sijaj.sa.tijanam@gmail.com`)
- ✅ Potvrda porudžbine poslata kupcu
- ✅ Profesionalno dizajnirani HTML email-ovi

## 🔧 Potrebna konfiguracija

### Resend API ključ (za slanje email-ova)

Da bi checkout radio i slao email-ove, potrebno je da dodate Resend API ključ.

#### Koraci:

1. **Registrujte se na Resend**
   - Idite na https://resend.com/signup
   - Kreirajte besplatan nalog

2. **Dobijte API ključ**
   - Nakon prijave, idite na **API Keys** sekciju
   - Kliknite **Create API Key**
   - Kopirajte ključ (prikazaće se samo jednom!)

3. **Dodajte ključ u `.env.local`**
   ```env
   RESEND_API_KEY=re_vaš_api_ključ_ovde
   ```

4. **Verifikujte domain (opciono ali preporučeno)**
   - U Resend dashboard-u, idite na **Domains**
   - Dodajte svoj domain za profesionalnije email-ove
   - Dok ne dodate domain, email-ovi će dolaziti sa `onboarding@resend.dev`

5. **Restartujte dev server**
   ```bash
   npm run dev
   ```

## 📧 Kako funkcioniše email sistem

Kada kupac završi checkout:

1. **Email prodavcu** (`sijaj.sa.tijanam@gmail.com`) sa:
   - Svim podacima kupca
   - Listom proizvoda i količina
   - Ukupnom cenom
   - Lepim formatiranjem

2. **Email kupcu** (potvrda porudžbine) sa:
   - Listom poručenih proizvoda
   - Ukupnom cenom
   - Kontakt informacijama
   - Napomenom o dostavi

## 🎨 Dizajn detalji

### Cart Sidebar
- Otvara se klikom na ikonu korpe u header-u
- Prikazuje sve proizvode sa slikama
- +/- dugmad za količine
- Trash ikona za brisanje
- "Nastavi na plaćanje" dugme
- Responsive dizajn

### Checkout stranica
- 2-kolumni layout (forma + pregled)
- Validacija svih polja
- Toast notifikacije za feedback
- Loading stanje tokom slanja
- Automatsko praćenje korpe iz LocalStorage

### Email template
- Gradijent emerald boja
- Tabele sa proizvodima
- Profesionalan dizajn
- Responsive HTML

## 🧪 Testiranje

1. **Dodajte proizvod u korpu**
   - Idite na stranicu proizvoda
   - Kliknite "Dodaj u korpu"
   - Trebalo bi da vidite toast notifikaciju

2. **Otvorite korpu**
   - Kliknite na ikonu korpe u header-u
   - Trebalo bi da vidite sidebar sa proizvodom

3. **Testirajte checkout**
   - Kliknite "Nastavi na plaćanje"
   - Popunite formu
   - Kliknite "Pošalji porudžbinu"

**NAPOMENA:** Bez Resend API ključa, checkout će prijaviti grešku. Dodajte ključ za potpunu funkcionalnost!

## 🛠️ Komponente

Sve komponente su kreirane i spremne za upotrebu:

```
components/
├── CartSidebar.tsx         # Sidebar sa korpom
├── AddToCartButton.tsx     # Dugme za dodavanje u korpu
├── ui/
│   ├── toast.tsx           # Toast komponenta
│   └── toaster.tsx         # Toast provider

contexts/
└── CartContext.tsx         # Cart state management (već postojao)

app/
├── checkout/
│   └── page.tsx           # Checkout stranica
└── api/
    └── checkout/
        └── route.ts       # API endpoint za email

hooks/
└── use-toast.ts           # Toast hook
```

## 💡 Napomene

- Korpa se čuva u LocalStorage - perzistentna je između sesija
- Samo proizvodi koji su "na stanju" mogu se dodati u korpu
- Svi email-ovi idu na `sijaj.sa.tijanam@gmail.com`
- Besplatna dostava za sve porudžbine
- Plaćanje pouzećem

## 🚀 Production

Pre deployment-a u production:
1. Dodajte pravi Resend API ključ u environment variables
2. Verifikujte domain na Resend za profesionalnije email-ove
3. Testirajte kompletnu kupovinu

---

Sve je spremno! Samo dodajte Resend API ključ i sistem je potpuno funkcionalan! 🎉
