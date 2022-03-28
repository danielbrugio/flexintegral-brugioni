import { useState } from "react";

const ContactForm = ({ toggleVisibility, setContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const handleContactForm = (e) => {
    e.preventDefault();
    toggleVisibility.current.toggleVisibility();

    const objContact = {
      name,
      phone,
      address,
      comment,
    };
    setContact(objContact);
    setName("");
    setPhone("");
    setAddress("");
    setComment("");
  };

  return (
    <div className="ContactContainer">
      <div>Contact information</div>
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
            type="text"
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
          Comment:
          <input
            className="InputContact"
            type="text"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </label>
        <button className="Button" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ContactForm;