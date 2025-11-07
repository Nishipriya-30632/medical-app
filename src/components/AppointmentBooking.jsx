
import React, { useState } from 'react'


export default function AppointmentBooking({ appointments, setAppointments, setNotifications }) {
const [form, setForm] = useState({ patient: '', date: '', time: '', reason: '' })


function handleChange(e) {
const { name, value } = e.target
setForm(prev => ({ ...prev, [name]: value }))
}


function handleSubmit(e) {
e.preventDefault()
const newAppt = { ...form, id: Date.now() }
setAppointments(prev => [newAppt, ...prev])
setForm({ patient: '', date: '', time: '', reason: '' })
setNotifications(prev => [
{ id: Date.now() + 1, message: `Appointment booked for ${newAppt.patient} on ${newAppt.date} at ${newAppt.time}`, read: false },
...prev,
])
}


function cancelAppointment(id) {
setAppointments(prev => prev.filter(a => a.id !== id))
setNotifications(prev => [
{ id: Date.now() + 2, message: `An appointment was cancelled.`, read: false },
...prev,
])
}


return (
<section>
<h2>Book an Appointment</h2>
<form onSubmit={handleSubmit} className="form">
<label>
Patient name
<input name="patient" value={form.patient} onChange={handleChange} required />
</label>
<label>
Date
<input name="date" type="date" value={form.date} onChange={handleChange} required />
</label>
<label>
Time
<input name="time" type="time" value={form.time} onChange={handleChange} required />
</label>
<label>
Reason
<input name="reason" value={form.reason} onChange={handleChange} />
</label>
<button type="submit">Book</button>
</form>


<h3>Upcoming Appointments</h3>
{appointments.length === 0 ? (
<p>No appointments yet.</p>
) : (
<ul className="list">
{appointments.map(a => (
<li key={a.id} className="appt">
<strong>{a.patient}</strong> — {a.date} {a.time}
<div className="muted">{a.reason}</div>
<button className="danger" onClick={() => cancelAppointment(a.id)}>
Cancel
</button>
</li>
))}
</ul>
)}
</section>
)
}