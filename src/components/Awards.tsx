'use client'

const marketplaces = [
  'Amazon', 'Noon', 'Namshi', 'Jarir', 'Sharaf DG', 'Carrefour',
  'Lulu', 'Flipkart', 'Shopify', 'Ajio', 'eBay', 'WooCommerce',
  'Myntra', 'Meesho', 'Walmart', 'Etsy', 'Magento', 'BigCommerce',
  'TikTok Shop', 'Trendyol', 'Souq', 'Wayfair',
]

export function Awards() {
  return (
    <section id="marketplaces" className="relative py-16 lg:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Marketplaces We Support
            </span>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-foreground">
            One Platform. <span className="text-yellow-500">Every Major Marketplace.</span>
          </h2>
          <p className="mt-4 text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
            Sell, sync and scale across the world's leading sales channels from a single dashboard.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden clean-border">
            {marketplaces.map((b) => (
              <div
                key={b}
                className="bg-card flex items-center justify-center py-7 px-3 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 gentle-animation"
              >
                <span className="text-sm lg:text-base font-black text-foreground/70 tracking-tight text-center">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
