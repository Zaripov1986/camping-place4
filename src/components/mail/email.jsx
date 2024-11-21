import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_457wk6h', 'template_ll5vb5f', form.current, {
        publicKey: 'XpUQCDZOC5-8TFwxW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"column"}}>
      <label style={{marginTop:"20px"}}>Name</label>
      <input type="text" name="user_name" placeholder="Your name" style={{width:"380px",height:"35px",borderRadius:"8PX",border: "1px solid var(--text, #373737)"}}/>
      <label style={{marginTop:"20px"}}>Email</label>
      <input type="email" name="user_email" placeholder="email" style={{width:"380px",height:"35px",borderRadius:"8PX",border: "1px solid var(--text, #373737)"}}/>
      <label style={{marginTop:"20px"}}>Message</label>
      <textarea name="message" placeholder="Your question" style={{borderRadius:"8PX",border: "1px solid var(--text, #373737)"}}/>
      <input type="submit" value="Send" style={{width:"380px",height:"35px",borderRadius:"8PX",border: "1px solid var(--text, #373737)",background: "var(--blue, #006DAB)",color:"white",marginTop:"20px"}} />
    </form>
  );
};