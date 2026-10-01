import ContactHero from "../components/contact/ContactHero";
import EnquiryProcess from "../components/contact/EnquiryProcess";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";
import FreeReview from "../components/contact/FreeReview";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <ContactHero />
      <EnquiryProcess />
      <ContactOptions />
      <ContactForm />
      <FreeReview />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}

export default Contact;