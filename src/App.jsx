
import React, { useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AppointmentBooking from './components/AppointmentBooking'
import Notifications from './components/Notifications'
import Reviews from './components/Reviews'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import FindDoctor from './components/FindDoctor' // ✅ New import

export default function App() {
  const [appointments, setAppointments] = useState([])
  const [notifications, setNotifications] = useState([])
  const [reviews, setReviews] = useState([])
  const [profile, setProfile] = useState({ name: '', email: '' })

  // ✅ Protected Route Wrapper
  function ProtectedRoute({ element, isLoggedIn }) {
    return isLoggedIn ? element : <Navigate to="/login" replace />
  }

  return (
    <div className="app-root">
      <Header />

      {/* ✅ Navigation Bar */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/find-doctor">Find Doctor</Link> {/* ✅ New link */}
        <Link to="/appointments">Appointments</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Signup</Link>

        {/* ✅ Conditional Login / Logout */}
        {profile.name ? (
          <button
            onClick={() => setProfile({ name: '', email: '' })}
            className="logout-btn"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      {/* ✅ Main Content Area */}
      <main className="container">
        <Routes>
          {/* 🏠 Home */}
          <Route path="/" element={<Home />} />

          {/* 🩺 Find Doctor Page */}
          <Route path="/find-doctor" element={<FindDoctor />} />

          {/* 📅 Appointments (Protected) */}
          <Route
            path="/appointments"
            element={
              <ProtectedRoute
                isLoggedIn={!!profile.name}
                element={
                  <AppointmentBooking
                    appointments={appointments}
                    setAppointments={setAppointments}
                    setNotifications={setNotifications}
                  />
                }
              />
            }
          />

          {/* 👤 Profile (Protected) */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={!!profile.name}
                element={<Profile profile={profile} setProfile={setProfile} />}
              />
            }
          />

          {/* 🔔 Notifications */}
          <Route
            path="/notifications"
            element={
              <Notifications
                notifications={notifications}
                setNotifications={setNotifications}
              />
            }
          />

          {/* 💬 Reviews */}
          <Route
            path="/reviews"
            element={<Reviews reviews={reviews} setReviews={setReviews} />}
          />

          {/* 🧾 Signup */}
          <Route path="/signup" element={<Signup />} />

          {/* 🔑 Login */}
          <Route path="/login" element={<Login setProfile={setProfile} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
