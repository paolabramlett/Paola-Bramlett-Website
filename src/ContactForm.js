import React from "react";
import "./ContactForm.css";

export default function ContactForm (){
    return (
        <div>
            <form 
            name="conact v1" 
            method="post" 
            data-netlify="true"
            onSubmit="submit"
            netlify
            >
                <input type="hidden" name="form-name" value="contact v1" />
                <div>
                    <label>Name: <br />
                        <input type="text" name="first-name" />
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
                        <textarea name="comments"></textarea>
                    </label>
                    <br />
                </div>

                <button type="submit">Send</button>

            </form>
        </div>
    )
}