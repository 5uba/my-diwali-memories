import './TimelineCard.css'

// Mood → accent colour map
const moodColors = {
  joyful: '#e8800a',
  peaceful: '#6a9e7a',
  refreshing: '#4a8abf',
  warm: '#c05e00',
  festive: '#c0310a',
  relaxed: '#7a7a4a',
  playful: '#9a3080',
  cosy: '#6a5a2a',
}

function TimelineCard({ entry, isActive, onToggle, isLeft }) {
  const accent = moodColors[entry.mood] || '#c05e00'

  return (
    <div className={`tc-row ${isLeft ? 'tc-left' : 'tc-right'}`}>
      {/* Dot on the centre line */}
      <div className="tc-dot" style={{ borderColor: accent }}>
        <span className="tc-icon">{entry.icon}</span>
      </div>

      {/* Card */}
      <div
        className={`tc-card ${isActive ? 'tc-card--open' : ''}`}
        onClick={() => onToggle(entry.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle(entry.id)}
        style={{ '--accent': accent }}
        aria-expanded={isActive}
      >
        <div className="tc-card-header">
          <span className="tc-time">{entry.time}</span>
          <h3 className="tc-title">{entry.title}</h3>
          <span className="tc-chevron" aria-hidden="true">
            {isActive ? '▲' : '▼'}
          </span>
        </div>

        <div className={`tc-card-body ${isActive ? 'tc-card-body--visible' : ''}`}>
          <p className="tc-description">{entry.description}</p>
          <span
            className="tc-mood-tag"
            style={{ backgroundColor: accent + '1a', color: accent }}
          >
            {entry.mood}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard
