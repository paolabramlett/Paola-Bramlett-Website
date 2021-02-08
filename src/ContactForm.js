import React from "react";

export default function ContactForm (){
    return (
        <div>
            <form 
            name="conact v1" 
            method="post" 
            data-netlify="true"
            onSubmit="submit"
            >
                <input type="hidden" name="form-name" value="contact v1" />
                <div>
                    <label>Name <br />
                        <input type="text" name="first-name" />
                    </label>
                    <br />
                </div>
                <div>
                    <label htmlFor="email">e-mail <br />
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

                <button variant="primary" type="submit" className="mt-3">Send</button>

            </form>
        </div>
    )
}