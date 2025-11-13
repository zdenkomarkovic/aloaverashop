import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktirajte nas za sve informacije o Aloe Vera proizvodima",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Imate pitanja? Želite da naručite proizvode ili saznate više o našoj
            ponudi? Slobodno nas kontaktirajte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Informacije za kontakt
              </h2>
              <p className="text-gray-600 mb-8">
                Odgovaramo na sve upite u najkraćem mogućem roku. Slobodno nas
                kontaktirajte putem bilo kog od navedenih kanala.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-primary border-2 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:sijaj.sa.tijanam@gmail.com"
                        className="text-emerald-400 hover:text-emerald-500 transition-colors"
                      >
                        sijaj.sa.tijanam@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Pošaljite nam email u bilo koje vreme
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Srbija */}
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-primary border-2 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        WhatsApp (Srbija)
                      </h3>
                      <a
                        href="https://wa.me/381645215667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-500 transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        064/52-15-667
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Brza komunikacija za kupce iz Srbije
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Viber Bosna */}
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-purple-600 border-2 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Viber (Bosna i Hercegovina)
                      </h3>
                      <a
                        href="viber://chat?number=38765311833"
                        className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        065/311-833
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Kontakt za kupce iz Bosne i Hercegovine
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl">
              <h3 className="font-bold text-white text-xl mb-2">
                Besplatna dostava!
              </h3>
              <p className="text-emerald-50">
                Za sve porudžbine preko 5000 RSD dobijate besplatnu dostavu
                širom Srbije i BiH.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Pošaljite nam poruku</h2>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Često postavljena pitanja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Kako mogu da naručim?
              </h3>
              <p className="text-gray-600 text-sm">
                Možete nas kontaktirati putem email-a, WhatsApp-a ili Viber-a.
                Naš tim će vam pomoći sa narudžbinom i svim informacijama.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Koliko traje dostava?
              </h3>
              <p className="text-gray-600 text-sm">
                Dostava obično traje 2-3 radna dana za Srbiju i 3-5 radnih dana
                za BiH, u zavisnosti od lokacije.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Da li imate fizičku prodavnicu?
              </h3>
              <p className="text-gray-600 text-sm">
                Trenutno radimo online, ali možete nas kontaktirati za
                preuzimanje proizvoda na dogovorenim lokacijama.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Koji su načini plaćanja?
              </h3>
              <p className="text-gray-600 text-sm">
                Prihvatamo plaćanje pouzećem (gotovina kuriru), kao i uplate na
                račun. Detalje šaljemo pri potvrdi narudžbine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
