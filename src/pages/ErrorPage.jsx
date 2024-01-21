import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page">
      <div className="center">
        <div><Link className="btn primary">Go Back Home</Link></div>
        <h2>Page Not Found</h2>
      </div>
    </section>
  )
}

export default ErrorPage