
function User({name,handle,timestamp}) {
  return ( <div>
    <span className="user">
 
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>

    <span className="timestamp">{timestamp}</span>
    </div>

  )
}

export default User


