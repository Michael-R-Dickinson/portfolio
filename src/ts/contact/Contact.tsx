import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";


function Contact({ email, message, description }: { email: string, message: string, description: string }) {

    const sendEmail: SubmitHandler<formInputs>= async ({email, name, message}: { email: string, name: string, message: string }) => {
        console.log (email, name, message)
        const paramString = `email=${email}&name=${name}&message=${message}`;
        const { data } = await axios.get(
            `https://eylmmtqgytvub4dnasfs7abmhm0iyazl.lambda-url.us-east-1.on.aws/?${paramString}`
        );
        console.log (data)
        return data;
    }

    type formInputs = {
        name: string,
        email: string;
        message: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<formInputs>();

    return (
        <section className="contact-container scroll-section">
            <h2>{message}</h2>
            <p>{description}</p>
            <form onSubmit={handleSubmit(sendEmail)} style={{display: isSubmitted ? "none" : undefined}}>
                <div className="id-form-container">
                    <p>Name</p>
                    <p>Email</p>
                    <input type="text" className="contact-input" placeholder="Enter your name" {...register('name')} />
                    <input type="text" className="contact-input" placeholder="Enter your email" {...register('email')} />
                </div>
                <p>Message</p>
                <input type="text" className='contact-input' placeholder="Enter your message" {...register('message', { required: true })} />
                {errors.message && <p>This field is required</p>}

                <input type="submit" className='submit-button' value='Submit' />
            </form>

            {isSubmitted && <p style={{marginTop: 50, fontSize: 20, color: '#707070'}}>Thank you for your message!</p>}
        </section>
    )
}

export default Contact