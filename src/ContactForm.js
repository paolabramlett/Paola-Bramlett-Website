import React from "react";
import "./ContactForm.css";

export default function ContactForm (){
    return (
        <div>
            <form 
            name="conact-form" 
            method="POST" 
            data-netlify="true"
            onSubmit="submit"
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <div>
                    <label>Name <br />
                        <input type="text" name="name" />
                    </label>
                    <br />
                </div>
                <div>
                    <label htmlFor="email">e-mail: <br />
                    <input id="email" type="email" name="email" />
                    </label>
                    <br />
                </div>

                <div>
                    <label> Message: <br /> 
                        <textarea name="message"></textarea>
                    </label>
                    <br />
                </div>

                <button type="submit">Send</button>

            </form>
        </div>
    )
}