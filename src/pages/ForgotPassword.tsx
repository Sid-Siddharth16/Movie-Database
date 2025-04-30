import React, { useState } from 'react'

const ForgotPassword : React.FC = () => {
    const[email,setEmail] = useState<string>('');
  return (
    <div>
        <input type="email" placeholder='Enter your Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  )
}
export default ForgotPassword;
