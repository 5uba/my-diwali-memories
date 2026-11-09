import { useState } from 'react'
import memoriesData from '../../data/memoriesData'
import './Memories.css'

function Memories() {
  const [selected, setSelected] = useState(null)

  const handleSelect = (id) => {
    setSelected((prev) => (prev === id ? null : id))
  }

  return (
    <div className="memories-page">
      <div className="page-heading">
        <h1>Memories</h1>
        <p>Little snapshots of the moments that made this day unforgettable.</p>
        <div className="divider" />
      </div>

      <div className="memories-grid container">
        {memoriesData.map((memory) => {
          const isSelected = selected === memory.id
          return (
            <div
              key={memory.id}
              className={`memory-card ${isSelected ? 'memory-card--selected' : ''}`}
              onClick={() => handleSelect(memory.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(memory.id)}
              aria-expanded={isSelected}
            >
              <div className="memory-icon">{memory.icon}</div>
              <div className="memory-time-label">{memory.timeLabel}</div>
              <h3 className="memory-title">{memory.title}</h3>
              {isSelected && (
                <p className="memory-description">{memory.description}</p>
              )}
              <span className="memory-read-more">
                {isSelected ? 'Close ▲' : 'Read more ▼'}
              </span>
            </div>
          )
        })}
      </div>

      <div className="memories-footer container">
        <p>
          🪔 &nbsp; A beautiful Diwali filled with family, laughter, movies, delicious food and
          unforgettable memories.
        </p>
      </div>
    </div>
  )
}

export default Memories
