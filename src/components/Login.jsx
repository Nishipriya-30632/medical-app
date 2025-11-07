
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setProfile }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess(false)

    const email = formData.email.trim()
    const password = formData.password.trim()

    if (!email || !password) {
      setError('Both fields are required.')
      return
    }

    // ✅ Correct Mock Validation
    if (email === 'user@example.com' && password === 'password123') {
      setProfile({ name: 'John Doe', email })
      setSuccess(true)

      // Wait a moment before redirecting
      setTimeout(() => {
        navigate('/profile')
      }, 800)
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <section className="login-section">
      <h2>Login</h2>
      <p className="muted">Access your account to manage appointments.</p>

      <form onSubmit={handleSubmit} className="form">
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
            placeholder="Enter your password"
            required
          />
        </label>

        <button type="submit" className="btn">Login</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Login successful! Redirecting...</p>}
      </form>
    </section>
  )
}
