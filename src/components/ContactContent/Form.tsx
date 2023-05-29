import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
interface Message {
    name: string;
    email: string;
    subject: string;
    content: string;
}
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const Form = () => {
    const emptyMessage: Message = {
        name: "",
        email: "",
        subject: "",
        content: "",
    };
    const [message, setMessage] = useState(emptyMessage);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        document.querySelectorAll("input").forEach((e) => {
            if (!e.value) {
                e.classList.add("error");
            } else {
                if (expression.test(message.email)) {
                    console.log("valid");
                    emailjs.send(
                        "service_e57p6xb",
                        "template_6zkmxlw",
                        {
                            content: message.content,
                            subject: message.subject,
                            name: message.name,
                            email: message.email,
                        },
                        "XT-hiCb9kHgV1vecB"
                    );
                    setMessage(emptyMessage);
                }
            }
        });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            if (e.currentTarget.name === "email") {
                if (!expression.test(e.currentTarget.value)) {
                    e.currentTarget.classList.add("error");
                    e.currentTarget.classList.remove("valid");
                } else {
                    e.currentTarget.classList.remove("error");
                    e.currentTarget.classList.add("valid");
                }
            } else {
                e.currentTarget.classList.add("valid");
            }
        } else {
            e.currentTarget.classList.remove("valid");
        }
        setMessage({
            ...message,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    const handleTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessage({ ...message, content: e.currentTarget.value });
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Send me a message</h2>
                <div className="control-container">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="form-control"
                        name="name"
                        autoFocus={true}
                        maxLength={100}
                        onChange={handleChange}
                        value={message.name}
                    />
                    <input
                        type="text"
                        placeholder="Email address"
                        className="form-control"
                        name="email"
                        maxLength={100}
                        onChange={handleChange}
                        value={message.email}
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        maxLength={100}
                        onChange={handleChange}
                        value={message.subject}
                    />
                    <textarea
                        placeholder="Tell me about your idea..."
                        name="content"
                        onChange={handleTextareaChange}
                        value={message.content}
                    />
                </div>
                <button className="btn btn-send">Send</button>
            </form>
        </div>
    );
};

export default Form;
