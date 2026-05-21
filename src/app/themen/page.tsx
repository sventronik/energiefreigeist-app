import { TOPICS, CATEGORIES, getTopicsByCategory } from '@/lib/topics'
import TopicCard from '@/components/TopicCard'
import Header from '@/components/Header'
import ChatWidget from '@/components/ChatWidget'

export default function ThemenPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Das Energie-Universum</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {TOPICS.length} Themen rund um Energetische, Finanzielle und Persönliche Freiheit.
          </p>
        </div>

        {CATEGORIES.map(cat => (
          <div key={cat} className="mb-12">
            <h2 className="text-xl font-semibold text-brand-500 mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-white/5" />
              {cat}
              <span className="flex-1 h-px bg-white/5" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getTopicsByCategory(cat).map(topic => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ChatWidget />
    </main>
  )
}
