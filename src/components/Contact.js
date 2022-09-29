import React from 'react';

export default function Contact() {
    return (
        <div class='contact-container'>
            <div class='contact-field'>
                <div class='title'>
                    <h2>Contact Us</h2>
                    <p>We're here to help! Send us your query via the form below or send us an email at <a href="mailto:trungthongnguyen2002@gmail.com">here</a>&nbsp;
                        for any issue you're facing.
                        <br></br>We would love to get feedbacks from you, too!
                    </p>
                </div>
                <div class='form'>
                    <form>
                        <input type="text" id="name" placeholder="Name" />
                        <input type="email" id="email" placeholder="Email" />
                        <textarea name="content" id="content" rows="8" cols="50" placeholder="Type anything you want to share with us ..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}