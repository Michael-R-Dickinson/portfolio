function Contact({ email, message, description }: { email: string, message: string, description: string }) {
    return (
        <div className="contact-container">
            <h2>I'm always down to talk<br />Send me a message any time!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form>
                <div className="id-form-container">
                    <p>Name</p>
                    <p>Email</p>
                    <input type="text" className="contact-input" placeholder="Enter your name" />
                    <input type="text" className="contact-input" placeholder="Enter your email" />
                </div>
                <p>Message</p>
                <input type="text" className='contact-input' placeholder="Enter your message" />
                <input type="submit" className='submit-button' value='Submit' />
            </form>
        </div>
    )
}

export default Contact