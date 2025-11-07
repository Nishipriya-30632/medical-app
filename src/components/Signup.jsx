import React, { useState } from 'react'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    console.log('Signup successful:', formData)
    setSuccess(true)
    setFormData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  return (
    <section>
      <h2>Create Your Account</h2>
      <p className="muted">Sign up to start booking appointments easily.</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            required
          />
        </label>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Signup successful! 🎉</p>}

        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}
