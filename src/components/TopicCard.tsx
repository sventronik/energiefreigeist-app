import Link from 'next/link'
import type { Topic } from '@/lib/topics'

const levelLabels: Record<number, { label: string; cls: string }> = {
  0: { label: 'Kostenlos', cls: 'badge-free' },
  1: { label: 'Level 1',   cls: 'badge-level1' },
  2: { label: 'Level 2',   cls: 'badge-level2' },
  3: { label: 'Inner Circle', cls: 'badge-level3' },
}

export default function TopicCard({ topic }: { topic: Topic }) {
  const lv = levelLabels[topic.level_required] ?? levelLabels[0]
  return (
    <Link href={`/themen/${topic.slug}`} className="card p-5 block">
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{topic.icon}</span>
        <span className={`badge ${lv.cls}`}>{lv.label}</span>
      </div>
      <h4 className="font-semibold text-white mb-1">{topic.title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{topic.teaser}</p>
    </Link>
  )
}
