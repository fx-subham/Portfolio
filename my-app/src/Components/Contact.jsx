function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Work Together 🚀</h3>

          <p>
            Feel free to contact me if you have any opportunities,
            collaborations or projects.
          </p>

          <p>
            📧 Email: saisubhamsahoo091@gmail.com
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;