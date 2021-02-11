import React from "react";
import "./ContactForm.css";

export default function ContactForm (){
    return (
        <div>
            <form 
            name="contact-form" 
            method="POST" 
            data-netlify="true"
            onSubmit="submit"
            netlify
            >
                <input type="hidden" name="form-name" value="contact-form" />
                    <label>Name: <br />
                        <input type="text" name="name" />
                    </label>
                    <br />
              
              
                    <label htmlFor="email">e-mail: <br />
                    <input type="email" name="email" />
                    </label>
                    <br />
         

             
                    <label> Message: <br /> 
                        <textarea name="message"></textarea>
                    </label>
                    <br />
                

                <button type="submit">Send</button>

            </form>
        </div>
    )
}