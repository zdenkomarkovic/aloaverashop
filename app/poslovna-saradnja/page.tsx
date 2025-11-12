import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  TrendingUp,
  Users,
  Clock,
  Award,
  Heart,
  DollarSign,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PoslovnaSaradnjaPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Odlična zarada',
      description:
        'Konkurentne provizije i bonusi za uspešne prodajne rezultate',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fleksibilno radno vreme',
      description: 'Radite po svom rasporedu, iz udobnosti svog doma',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tim podrška',
      description:
        'Dobijate svu potrebnu obuku i podršku od našeg iskusnog tima',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kvalitetni proizvodi',
      description: 'Prodajte proizvode u koje verujete i koji menjaju živote',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mogućnost rasta',
      description: 'Razvijte svoj biznis i napredujte u karijeri',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Helping Others',
      description: 'Pomažite ljudima da poboljšaju svoje zdravlje i život',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Prijavite se',
      description:
        'Popunite kontakt formu i prijavite svoje interesovanje za saradnju',
    },
    {
      number: '02',
      title: 'Upoznajte nas',
      description:
        'Razgovaraćemo sa vama o mogućnostima i odgovoriti na sva pitanja',
    },
    {
      number: '03',
      title: 'Obuka',
      description:
        'Proći ćete besplatnu obuku o proizvodima i prodajnim tehnikama',
    },
    {
      number: '04',
      title: 'Počnite zarađivati',
      description:
        'Započnite svoju poslovnu priču i ostvarite prihode',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Briefcase className="w-4 h-4" />
              Poslovna prilika
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Postanite naš poslovni partner
            </h1>

            <p className="text-xl mb-8 opacity-90">
              Otkrijte jedinstvenu poslovnu priliku i započnite zaradu od kuće
              sa najkvalitetnijim Aloe Vera proizvodima na tržištu
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link href="/kontakt">Prijavite se sada</Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-10 animate-pulse delay-700" />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zašto raditi sa nama?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nudimo vam sve što vam je potrebno za uspešan biznis i stabilnu zaradu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kako započeti?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Samo 4 jednostavna koraka do vaše nove poslovne prilike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 text-white rounded-full text-3xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-emerald-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Šta dobijate kao naš partner?
            </h2>

            <div className="space-y-4">
              {[
                'Besplatnu obuku o proizvodima i prodajnim tehnikama',
                'Marketing materijale i podršku',
                'Direktan pristup svim proizvodima po specijalnim cenama',
                'Online platformu za upravljanje narudžbinama',
                'Kontinuiranu podršku i praćenje od strane mentora',
                'Mogućnost napredovanja u karijeri',
                'Bonus program za dostizanje prodajnih ciljeva',
                'Pristup ekskluzivnim promocijama i novim proizvodima',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-emerald-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &quot;Saradnja sa Aloe Vera Shop-om mi je promenila život. Ne samo da
              zarađujem dobro, već i pomažem ljudima da poboljšaju svoje
              zdravlje. Najlepša poslovna odluka koju sam donela!&quot;
            </p>

            <div>
              <p className="font-bold text-gray-900">Marija Petrović</p>
              <p className="text-gray-600">Partner od 2022. godine</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Spremni ste da započnete?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Kontaktirajte nas danas i saznajte kako možete postati deo našeg
            uspešnog tima!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            <Link href="/kontakt">Kontaktirajte nas odmah</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
