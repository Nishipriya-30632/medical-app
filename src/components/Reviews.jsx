
import React, { useState } from 'react'


export default function Reviews({ reviews, setReviews }) {
const [text, setText] = useState('')


function submitReview(e) {
e.preventDefault()
if (!text.trim()) return
setReviews(prev => [{ id: Date.now(), text: text.trim(), date: new Date().toISOString() }, ...prev])
setText('')
}


return (
<section>
<h2>Reviews</h2>
<form onSubmit={submitReview} className="form-inline">
<input value={text} onChange={e => setText(e.target.value)} placeholder="Write a review" />
<button type="submit">Submit</button>
</form>


<ul className="list">
{reviews.length === 0 ? (
<li>No reviews yet.</li>
) : (
reviews.map(r => (
<li key={r.id}>
<div>{r.text}</div>
<div className="muted small">{new Date(r.date).toLocaleString()}</div>
</li>
))
)}
</ul>
</section>
)
}