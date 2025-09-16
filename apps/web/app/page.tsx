import react from 'react'

const page = () => {
  return (
    <div>
      <input style={{backgroundColor:"#ccc", }} type="text" placeholder='username' />
      <br/>
      <input style={{backgroundColor:"#ccc"}} type="email" placeholder='email' />
      <br/>
      <button style={{backgroundColor:"#ccc", padding:"5px 5px", borderRadius:"10px"}}> Send </button>
      <button>Add User</button>
      <button>Get Users</button>
      <div style={{marginTop:"20px", backgroundColor:"#ccc", padding:"10px", borderRadius:"10px"}}>
        Users Added to Databases:
      </div>
    </div>
  )
}

export default page