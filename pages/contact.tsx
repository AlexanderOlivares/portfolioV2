import React, { useState } from "react";
import { GoMail } from "react-icons/go";
import Head from "next/head";

interface IFormValues {
  name: string;
  email?: string;
  message: string;
}

const Contact = () => {
  const formEmpty: IFormValues = {
    name: "",
    email: "",
    message: "",
  };

  let [formValues, setFormValues] = useState<IFormValues>(formEmpty);

  const formChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.currentTarget;
    setFormValues(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formValues),
    };
    const res = await fetch("/api/contact", requestOptions);
    const { message } = await res.json();
    alert(message);
    setFormValues(formEmpty);
  };

  return (
    <>
      <Head>
        <title>Contact - Alex Olivares Porfolio</title>
        <meta
          property="og:title"
          content="Contact me directly - Alex Olivares"
          key="title"
        />
        <meta name="description" content="Contact Alex Olivares" />
      </Head>
      <div className="flex h-screen justify-center md:items-center">
        <div className="w-full text-center max-w-sm p-1 md:max-w-4xl lg:-mt-24">
          <div className="text-emerald text-center md:pt-10 pb-12 text-6xl">
            Contact Me
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="bg-emerald shadow-2xl rounded px-4 md:px-12 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-tan text-3xl mb-4">Your name</label>
              <input
                onChange={formChangeHandler}
                name="name"
                type="textbox"
                className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sender-email"
                placeholder="name"
                value={formValues.name}
                required
              ></input>
            </div>
            <div className="md:mt-6 mb-4">
              <label className="block text-tan text-3xl mb-2">
                Email to reach you
                <p className="text-sm">(optional)</p>
              </label>
              <input
                onChange={formChangeHandler}
                name="email"
                value={formValues.email}
                type="email"
                className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sender-email"
                placeholder="email"
              ></input>
            </div>
            <div className="md:mt-6">
              <label className="block text-tan text-4xl mb-4">Drop me a line</label>
              <textarea
                onChange={formChangeHandler}
                value={formValues.message}
                name="message"
                rows={6}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-emerald mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="contact-message"
                placeholder="message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-around">
              <button
                className="text-emerald bg-tan text-lg font-bold flex items-center mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <GoMail size={21} className="mr-3" />
                send
              </button>
            </div>
          </form>
          <p className="text-center text-xs">Powered by nodemailer</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
