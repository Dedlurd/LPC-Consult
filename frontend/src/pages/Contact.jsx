import { useEffect } from "react";

import ContactHero from "../components/contact/ContactHero";
import EnquiryProcess from "../components/contact/EnquiryProcess";
import ContactInformationAndReview from "../components/contact/ContactInformationAndReview";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  useEffect(() => {
    if (window.location.hash !== "#enquiry") {
      return;
    }

    const timer = window.setTimeout(() => {
      const enquirySection = document.getElementById("enquiry");

      if (enquirySection) {
        enquirySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <ContactHero />
      <EnquiryProcess />
      <ContactInformationAndReview />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}

export default Contact;