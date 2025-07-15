'use client'
import { useSession } from "next-auth/react";
import emailjs from '@emailjs/browser';
import { useRef} from "react";
import Swal from 'sweetalert2'

const ContactForm = () => {
    const {data} = useSession();
   const form = useRef();

  //  const audio = new Audio('/assets/success.m4a')
   
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_ID);
    
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
      })
      .then(
        () => {
          // audio.play()
          Swal.fire({
            title: "Your message has been sent successfully!",
            text: "You clicked the button!",
            icon: "success"
          });
          
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-center text-xl text-[#D1A054]">~~~~ Send Us a Message ~~~~</h1>
      <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-2 ">
      CONTACT FORM
      </h1>

      {/*Contact Form*/}
      <div >
      {/* Form*/}
      <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
        <form ref={form} onSubmit={sendEmail} >
          <div className="grid grid-cols-2 gap-5 w-full">
            
            <input className="px-4 py-2 rounded-lg outline-none" name="user_name" type="text" defaultValue={data?.user?.name} placeholder="Your Name" />
          
            <input className="px-4 py-2 rounded-lg outline-none" name="from_email" type="text" defaultValue={data?.user?.email} placeholder="Your Email" />
          </div>
          <textarea className="w-full rounded-lg mt-6 text-stone-500 pl-2 pt-2 h-44" required name="message" id=""  placeholder="Message"></textarea>
          <input className="btn btn-primary text-white w-full" type="submit" value="Send Message" />
        </form>
      </div>
    </div>

    </div>
  );
};

export default ContactForm;
