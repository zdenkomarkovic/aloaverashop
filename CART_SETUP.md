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

### Brevo API ključ (za slanje email-ova)

Da bi checkout radio i slao email-ove, potrebno je da dodate Brevo API ključ.

#### Koraci:

1. **Registrujte se na Brevo**
   - Idite na https://www.brevo.com/
   - Kreirajte besplatan nalog (300 email-ova dnevno besplatno!)

2. **Dobijte API ključ**
   - Nakon prijave, idite na **Settings** → **SMTP & API**
   - Kliknite **Create a new API key**
   - Imenujte ključ (npr. "Aloe Vera Shop")
   - Kopirajte API ključ (prikazaće se samo jednom!)

3. **Verifikujte sender email (VAŽNO!)**
   - Idite na **Senders** → **Senders & IP**
   - Dodajte `noreply@aloaverashop.com` ili vaš domain
   - Verifikujte email adresu (kliknite link u email-u koji dobijete)
   - **NAPOMENA:** Možete koristiti bilo koju email adresu koju posedujete za testiranje

4. **Dodajte ključ u `.env.local`**
   ```env
   BREVO_API_KEY=xkeysib-vaš_api_ključ_ovde
   ```

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

**NAPOMENA:** Bez Brevo API ključa, checkout će prijaviti grešku. Dodajte ključ za potpunu funkcionalnost!

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
1. Dodajte pravi Brevo API ključ u environment variables
2. Verifikujte sender email adresu na Brevo
3. (Opciono) Dodajte i verifikujte svoj domain za profesionalnije email-ove
4. Testirajte kompletnu kupovinu

---

Sve je spremno! Samo dodajte Brevo API ključ i sistem je potpuno funkcionalan! 🎉
