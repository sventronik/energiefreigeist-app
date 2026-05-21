export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">⚡</div>
          <h1 className="text-2xl font-bold text-gray-900">Energiefreigeist Login</h1>
          <p className="text-gray-500 text-sm mt-2">Melde dich mit deiner Bestell-E-Mail an</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail-Adresse</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="deine@email.de"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bestellnummer</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="z.B. DE-12345"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-600 text-white font-semibold py-3 rounded-xl hover:bg-brand-700 transition"
          >
            Einloggen
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Noch kein Produkt? <a href="/#einstieg" className="text-brand-600 hover:underline">Jetzt einsteigen</a></p>
        </div>
      </div>
    </main>
  )
}
