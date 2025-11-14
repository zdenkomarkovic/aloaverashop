# 📧 Brevo Email Setup - Brzi Vodič

Email servis za slanje porudžbina koristi **Brevo** (ranije SendinBlue).

## ⚡ Brzi Setup (5 minuta)

### 1. Kreirajte Brevo nalog
- Idite na: https://www.brevo.com/
- Kliknite **Sign up free**
- Besplatan plan: **300 email-ova dnevno** 🎉

### 2. Dobijte API ključ
1. Ulogujte se na Brevo
2. Idite na **Settings** (ikona zupčanika gore desno)
3. Kliknite **SMTP & API**
4. Idite na tab **API Keys**
5. Kliknite **Generate a new API key**
6. Unesite naziv (npr. "Aloe Vera Shop")
7. **Kopirajte API ključ** (prikazaće se samo jednom!)

### 3. Verifikujte sender email
⚠️ **VAŽNO:** Morate verifikovati email adresu sa koje šaljete email-ove!

1. Idite na **Senders, Domains & Dedicated IPs** → **Senders**
2. Kliknite **Add a sender**
3. Za testiranje možete koristiti **vašu ličnu email adresu** (npr. sijaj.sa.tijanam@gmail.com)
4. Proverite inbox - stići će email za verifikaciju
5. Kliknite link u email-u da verifikujete

**Napomena:** Za production preporučujemo:
- Domain email (npr. info@vasadomena.com)
- Ili koristite besplatnu email adresu koju verifikujete

### 4. Dodajte API ključ u `.env.local`

```env
BREVO_API_KEY=xkeysib-1234567890abcdef...
```

### 5. Ažurirajte sender email (ako je potrebno)

Ako koristite drugu email adresu umesto `noreply@aloaverashop.com`, ažurirajte u:

`app/api/checkout/route.ts`:
```typescript
sendSmtpEmail.sender = {
  name: "Aloe Vera Shop",
  email: "vasa-verifikovana@email.com"  // ← Promenite ovde
};
```

### 6. Testirajte!

```bash
npm run dev
```

Idite na stranicu proizvoda → dodajte u korpu → checkout → pošaljite test porudžbinu.

Trebalo bi da stigne:
- ✅ Email prodavcu (`sijaj.sa.tijanam@gmail.com`)
- ✅ Potvrda email kupcu

## 📊 Brevo vs Resend

| Feature | Brevo | Resend |
|---------|-------|--------|
| Besplatni tier | 300/dan | 100/dan |
| API Kompleksnost | Jednostavan | Jednostavan |
| Verifikacija | Email ili domain | Email ili domain |
| Deliverability | Odličan | Odličan |
| Dashboard | Bogat | Minimalan |

## 🔧 Troubleshooting

### Email-ovi ne stižu?
1. Proverite da li ste verifikovali sender email
2. Proverite spam folder
3. Proverite Brevo dashboard → **Statistics** → **Email**

### API greška?
1. Proverite da li ste kopirali kompletan API ključ
2. Proverite da li ste restartovali dev server nakon dodavanja ključa
3. API ključ počinje sa `xkeysib-`

### "Sender email not verified"?
1. Idite na Brevo → **Senders**
2. Proverite da li je email **Verified** (zelena kvačica)
3. Ako nije, kliknite **Resend verification email**

## 🎯 Production Checklist

Pre production deployment-a:
- [ ] Verifikujte profesionalni sender email
- [ ] (Opciono) Dodajte i verifikujte domain
- [ ] Testirajte slanje email-ova
- [ ] Proverite Brevo statistiku
- [ ] Dodajte BREVO_API_KEY u production env variables

---

**Potrebna pomoć?** Pogledajte detaljno uputstvo u `CART_SETUP.md`
