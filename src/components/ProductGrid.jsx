const products = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 129.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518443952240-07f7b29d944c?q=80&w=1200&auto=format&fit=crop",
    tag: "Deal of the day",
  },
  {
    id: 2,
    title: "Smart Home Speaker with Alexa",
    price: 49.99,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1200&auto=format&fit=crop",
    tag: "Best seller",
  },
  {
    id: 3,
    title: "4K Ultra HD Smart TV 55\"",
    price: 429.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited time",
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    price: 189.99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop",
    tag: "Top rated",
  },
];

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "★" : i === full && half ? "☆" : "✩"}</span>
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <article key={p.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <span className="inline-block text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">{p.tag}</span>
              <h3 className="mt-2 text-sm font-semibold line-clamp-2 min-h-[2.5rem]">{p.title}</h3>
              <div className="mt-1"><Stars value={p.rating} /></div>
              <div className="mt-2 text-lg font-bold">${p.price.toFixed(2)}</div>
              <button className="mt-3 w-full bg-[#FFD814] hover:bg-[#f7ca00] text-black font-medium py-2 rounded">Add to Cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
