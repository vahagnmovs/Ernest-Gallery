import React, {useState} from 'react';
import styles from "@/styles/contactMe.module.css"
import validator from 'validator';
import isEmail from "validator/lib/isEmail";


const ContactMe = () => {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [text, setText] = useState("")
    const [emailError, setEmailError] = useState("")


    const validateEMail = (e: any) => {
        const email = e.target.value;
        setEmail(email);

        if(isEmail(email)) {
            setEmailError("")
        } else {
            setEmailError("Enter correct email")
        }
    }

    const handleSubmit = () => {
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setText("");
    }



    return (
        <div className={styles.contactMeContainer}>
            <div className={styles.contactMeWrapper}>
                <span className={styles.inputsHeader}>Love hearing from you!</span>
                <div className={styles.inputRow}>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="fName">First Name *</label>
                        <input
                            onChange={(e) => setFName(e.target.value)}
                            value={fName}
                            className={styles.contactInput}
                            id={"fName"}
                            type="text"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="lName">Last Name *</label>
                        <input
                            onChange={(e) => setLName(e.target.value)}
                            className={styles.contactInput}
                            value={lName}
                            id={"lName"}
                            type="text"
                        />
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="email">Email *</label>
                        <input
                            onChange={(e) => validateEMail(e)}
                            value={email}
                            className={styles.contactInput}
                            id={"email"}
                            type="text"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="phone">Phone (optional)</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            className={styles.contactInput}
                            value={phone}
                            id={"phone"}
                            type="number"
                        />
                    </div>
                </div>

                {
                    emailError && <span className={styles.error}>{emailError}</span>
                }

                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel} htmlFor="">Your message *</label>
                    <textarea
                        rows={5}
                        maxLength={715}
                        onChange={(e) => setText(e.target.value)}
                        className={styles.contactTextArea}
                        value={text}
                        name=""
                        id="message"></textarea>
                </div>

                <button
                    disabled={!fName || !lName || !email || !text || !!emailError}
                    onClick={handleSubmit}
                    className={styles.contactBtn}
                >SEND
                </button>
            </div>
        </div>
    );
};

export default ContactMe;