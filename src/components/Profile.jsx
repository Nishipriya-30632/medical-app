
import React, { useState, useEffect } from 'react'


export default function Profile({ profile, setProfile }) {
const [editing, setEditing] = useState(false)
const [local, setLocal] = useState(profile)


useEffect(() => setLocal(profile), [profile])


function save() {
setProfile(local)
setEditing(false)
}


return (
<section>
<h2>Profile</h2>
{editing ? (
<div className="form">
<label>
Name <input value={local.name} onChange={e => setLocal({ ...local, name: e.target.value })} />
</label>
<label>
Email <input value={local.email} onChange={e => setLocal({ ...local, email: e.target.value })} />
</label>
<div>
<button onClick={save}>Save</button>
<button onClick={() => setEditing(false)}>Cancel</button>
</div>
</div>
) : (
<div className="profile">
<div>
<strong>Name:</strong> {profile.name || 'Not set'}
</div>
<div>
<strong>Email:</strong> {profile.email || 'Not set'}
</div>
<button onClick={() => setEditing(true)}>Edit Profile</button>
</div>
)}
</section>
)
}