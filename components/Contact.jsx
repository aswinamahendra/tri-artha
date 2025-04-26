import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";

const Contact = () => {
  const [state, handleSubmit] = useForm("movjnygo");

  // state for form inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // state to control icon visibility and button text
  const [showIcon, setShowIcon] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // clear the form after submission and handle message visibility
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true); // show the success icon
      // clear for inputs
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // hide the icon and revert button text after 3 seconds
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      // clean up the timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    handleSubmit(formData); // call formspree's submit handler with formData
  };

  return (
    <section className="pt-8 xl:pt-24 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full xl:h-[780px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h2 className="h2 text-center">Contact Us</h2>
              <p className="mb-9 text-center">
                Get in touch with us
              </p>
              {/* Contact item */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* Chat */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h2 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h2>
                    <p>Our friendly team is here to help.</p>
                    <p className="font-semibold text-primary mt-2">
                      info.tri-artha@email.com
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h2 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h2>
                    <p className="mb-2">Come and say hello at our office</p>
                    <a
                      href="https://www.google.com/maps/place/PT.+Tri+Artha+Manunggal/@-6.3487958,106.7013641,1131m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69e59ecb949715:0x92c560f7f005e026!8m2!3d-6.3487958!4d106.703939!16s%2Fg%2F1pzwmnyv5!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="font-semibold text-primary"
                    >
                      Panorama Serpong blok C2 no. 12, Bakti Jaya - Setu
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h2 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h2>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary mt-2">
                      +021-2930532
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 text-center">Request A Qoute</h2>
              <p className="mb-9 text-center">
                If you interested feel free to send your request to us.
              </p>
              <div className="flex flex-col items-center xl:flex-row gap-16">
                <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
                  {/* form */}
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-6 w-full max-w-[480px]"
                  >
                    {/* firstname & lastname fields */}
                    <div className="flex gap-8">
                      {/* firstname */}
                      <div className="flex-1">
                        <label
                          htmlFor="firstname"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          First Name <span className="text-accent">*</span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="firstname"
                          name="firstname"
                          value={formData.firstname}
                          className="input"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      {/* lastname */}
                      <div className="flex-1">
                        <label
                          htmlFor="lastname"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          Last Name <span className="text-accent">*</span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          id="lastname"
                          name="lastname"
                          value={formData.lastname}
                          className="input"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    {/* email field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-primary"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        className="input"
                        placeholder="youremail@email.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        fields="email"
                        error={state.errors}
                      />
                    </div>
                    {/* phone field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-primary"
                      >
                        Phone number <span className="text-accent">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        className="input"
                        placeholder="+628-1111-5555"
                        required
                      />
                    </div>
                    {/* message field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-primary"
                      >
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        onChange={handleChange}
                        id="message"
                        name="message"
                        value={formData.message}
                        className="textarea"
                        placeholder="Leave me a message..."
                        rows="5"
                        required
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        error={state.errors}
                      />
                    </div>
                    {/* submit button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn btn-accent flex items-center justify-center gap-2"
                    >
                      {state.submitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          {/* show icon with opacity transition */}
                          <FaCheckCircle
                            className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                              showIcon ? "opacity=100" : "opacity-0"
                            }`}
                          />
                          {/* button text */}
                          <span
                            className={`transition-opacity duration-500 ease-in-out ${
                              showIcon ? "opacity-0" : "opacity-100"
                            }`}
                          >
                            Send message
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
