
import React from 'react'


export default function Notifications({ notifications, setNotifications }) {
function markAllRead() {
setNotifications(prev => prev.map(n => ({ ...n, read: true })))
}


function removeNotification(id) {
setNotifications(prev => prev.filter(n => n.id !== id))
}


return (
<section>
<h2>Notifications</h2>
<div className="actions">
<button onClick={markAllRead}>Mark all read</button>
</div>
{notifications.length === 0 ? (
<p>No notifications.</p>
) : (
<ul className="list">
{notifications.map(n => (
<li key={n.id} className={n.read ? 'read' : 'unread'}>
<div>{n.message}</div>
<div className="muted small">{n.read ? 'Read' : 'Unread'}</div>
<button onClick={() => removeNotification(n.id)}>Remove</button>
</li>
))}
</ul>
)}
</section>
)
}