import "./ContactForm.css";
import { useState } from "react";
import Button from "../Button/Button";

const ContactForm = ({ toggleVisibility, setContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleContactForm = (e) => {
    e.preventDefault();
    toggleVisibility.current.toggleVisibility();

    const objContact = {
      name,
      phone,
      address,
      email,
    };
    setContact(objContact);
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
  };

  return (
    <div className="ContactContainer">
      <div className="Tittle">Contact information</div>
      <form className="ContactForm" onSubmit={handleContactForm}>
        <label className="LabelContact">
          Name:
          <input
            className="InputContact"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="LabelContact">
          Telephone:
          <input
            className="InputContact"
            type="number"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="LabelContact">
          Address:
          <input
            className="InputContact"
            type="text"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
        </label>
        <label className="LabelContact">
          Email:
          <input
            className="InputContact"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <Button name="Confirm contact information" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
