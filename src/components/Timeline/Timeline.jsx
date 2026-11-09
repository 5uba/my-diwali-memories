import { useState } from 'react'
import timelineData from '../../data/timelineData'
import TimelineCard from '../TimelineCard/TimelineCard'
import './Timeline.css'

function Timeline() {
  const [activeId, setActiveId] = useState(null)

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="timeline-page">
      <div className="page-heading">
        <h1>My Diwali Day</h1>
        <p>Sunday, 8 November 2026 — every hour, exactly as it happened.</p>
        <div className="divider" />
      </div>

      <div className="timeline-hint container">
        <p>Tap any entry to read the full memory.</p>
      </div>

      <div className="timeline-wrapper container">
        <div className="timeline-line" />
        <div className="timeline-entries">
          {timelineData.map((entry, index) => (
            <TimelineCard
              key={entry.id}
              entry={entry}
              isActive={activeId === entry.id}
              onToggle={handleToggle}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      <div className="timeline-closing container">
        <p>
          🪔&nbsp;&nbsp;A beautiful Diwali filled with family, laughter, movies, delicious food
          and unforgettable memories.
        </p>
      </div>
    </div>
  )
}

export default Timeline
