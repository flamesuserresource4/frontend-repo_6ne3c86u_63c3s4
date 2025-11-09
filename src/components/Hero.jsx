export default function Hero() {
  return (
    <section className="relative">
      {/* Promo banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?q=80&w=1600&auto=format&fit=crop"
            alt="Holiday Deals"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </div>

      {/* Gradient fade to blend into page bg */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
