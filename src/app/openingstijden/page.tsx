import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openingstijden | Fysiotherapie Laren, Gld",
  description:
    "Bekijk de actuele openingstijden van Fysio Laren. Behandelingen en trainingen vinden plaats volgens afspraak.",
};

const openingHours = [
  { day: "Maandag", hours: "08:00 – 21:00 uur", open: true },
  { day: "Dinsdag", hours: "08:00 – 20:00 uur", open: true },
  { day: "Woensdag", hours: "08:00 – 21:30 uur", open: true },
  { day: "Donderdag", hours: "08:00 – 17:00 uur", open: true },
  { day: "Vrijdag", hours: "08:00 – 17:00 uur", open: true },
  { day: "Zaterdag", hours: "Gesloten", open: false },
  { day: "Zondag", hours: "Gesloten", open: false },
];

export default function OpeningstijdenPage() {
  return (
    <main className="bg-background pt-28 sm:pt-32 pb-24 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Onze Openingstijden.
            </h1>
            <p className="text-sm sm:text-base text-foreground/65 leading-relaxed font-light max-w-lg mx-auto">
              Bekijk hieronder onze actuele openingstijden. Behandelingen en trainingen vinden plaats volgens afspraak.
            </p>
          </div>

          {/* Openingstijden Kaart */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-foreground/5">
            <div className="divide-y divide-foreground/5">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 sm:py-3.5 gap-4 text-xs sm:text-sm"
                >
                  <span className="font-medium text-foreground/85">
                    {item.day}
                  </span>
                  <span
                    className={`font-semibold tabular-nums ${
                      item.open
                        ? "text-foreground/90"
                        : "text-foreground/40 font-normal"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Toelichting */}
            <div className="mt-6 pt-5 border-t border-foreground/5 text-xs text-foreground/60 font-light">
              <p>Op officiële feestdagen kunnen afwijkende openingstijden gelden.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
