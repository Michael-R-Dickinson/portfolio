import { useForm, SubmitHandler } from "react-hook-form";

function Contact({ email, message, description }: { email: string, message: string, description: string }) {
    type formInputs = {
        name: string,
        email: string;
        message: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();
    const onSubmit: SubmitHandler<formInputs> = data => window.location.href = (
        `mailto:${email}?subject=contact from ${data.name}&body=${data.message}`
    );

    return (
        <section className="contact-container scroll-section">
            <h2>{message}</h2>
            <p>{description}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
        </section>
    )
}

export default Contact