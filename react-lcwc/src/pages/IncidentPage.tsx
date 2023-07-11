import React from 'react'
import Incident from '../lcwc/incident'

const IncidentPage = (incident: Incident) => {
  return (
    <div>{incident.number}</div>
  )
}

export default IncidentPage