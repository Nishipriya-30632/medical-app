import React, { useState } from 'react'

export default function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState('')

  const doctors = [
    { id: 1, name: 'Dr. Aditi Sharma', specialty: 'Cardiologist', location: 'Delhi' },
    { id: 2, name: 'Dr. Rohan Mehta', specialty: 'Dentist', location: 'Mumbai' },
    { id: 3, name: 'Dr. Sneha Rao', specialty: 'Dermatologist', location: 'Bangalore' },
    { id: 4, name: 'Dr. Arjun Nair', specialty: 'Pediatrician', location: 'Hyderabad' },
    { id: 5, name: 'Dr. Priya Iyer', specialty: 'Gynecologist', location: 'Chennai' },
  ]

  const filteredDoctors = doctors.filter(
    doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="find-doctor-section">
      <h2>Find a Doctor</h2>
      <p className="muted">Search by name, specialty, or location.</p>

      <input
        type="text"
        placeholder="Search doctors..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p><strong>Location:</strong> {doctor.location}</p>
              <button className="btn">Book Appointment</button>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </section>
  )
}
