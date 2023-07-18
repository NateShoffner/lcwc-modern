import React from 'react'

const ApiPage = () => {
  return (
    <>
    <h2>API</h2>

    <p>This website works by utilizing a third-party API (Application Programming Interface) for incident data. Currently, the API is in a sort of closed-beta. The goal is to open it up for free to provide both real-time and historial incident data for various purposes.</p>

    <p>The API itself will be open-source and available for self-hosting. Just keep in mind that all of this piggybacks off of the LCWC'S systems so keep polling as low possible to help ensure stablity and continued access (especially since their existing infrastrcuture seems to be a bit limited).</p>

    <p>The current API in use is: <code>{import.meta.env.VITE_API_BASE_URL}</code></p>

    <h4>Authentication</h4>

    <p>At the moment there will be no authentication method for the API. This might change later on, likely with some basic API key authentication to help prevent potential abuse.</p>

    <h4>Webhooks</h4>

    <p>Because of the real-time nature of incident response, realtime updates will be a common use-case. In order to prevent the need for constant polling of the API, webhooks will be provided in order to make things more seemless on both ends.  </p>
    </>
  )
}

export default ApiPage