import React from 'react'

const Page = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center"
      }}>
        
        <h2 style={{ marginBottom: "20px", color: "#333" }}>User Form</h2>

        {/* Input Fields */}
        <input 
          style={{
            backgroundColor: "#f9f9f9",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "1px solid #ccc",
            width: "100%",
            fontSize: "14px",
            outline: "none"
          }} 
          type="text" 
          placeholder="Username" 
        />

        <input 
          style={{
            backgroundColor: "#f9f9f9",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "1px solid #ccc",
            width: "100%",
            fontSize: "14px",
            outline: "none"
          }} 
          type="email" 
          placeholder="Email" 
        />
        <input 
          style={{
            backgroundColor: "#f9f9f9",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "1px solid #ccc",
            width: "100%",
            fontSize: "14px",
            outline: "none"
          }} 
          type="text" 
          placeholder="Type message" 
        />
        {/* Buttons */}
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <button 
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            Send
          </button>
          
          <button 
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            Add User
          </button>
          
          <button 
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            Get Users
          </button>
        </div>

        {/* Users Section */}
        <div 
          style={{
            marginTop: "25px",
            backgroundColor: "#f3f4f6",
            padding: "15px",
            borderRadius: "12px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#555"
          }}
        >
          Users Added to Database:
        </div>
      </div>
    </div>
  )
}

export default Page
