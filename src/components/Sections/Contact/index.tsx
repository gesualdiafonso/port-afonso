'use client'

import Container from '@/components/ui/container';
import Squares from '@/components/ui/GridBackground';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { FaInstagramSquare, FaGithub, FaBehance, FaFacebook } from 'react-icons/fa';

const countries = [
  { name: "Argentina", code: "+54" },
  { name: "Brasil", code: "+55" },
  { name: "Estados Unidos", code: "+1" },
  { name: "Portugal", code: "+351" },
  { name: "Reino Unido", code: "+44" },
  { name: "Chile", code: "+56" },
  { name: "Colômbia", code: "+57" },
  { name: "México", code: "+52" },
  { name: "Peru", code: "+51" },
  { name: "Venezuela", code: "+58" },
  { name: "Uruguai", code: "+598" },
  { name: "Paraguai", code: "+595" },
  { name: "Bolívia", code: "+591" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  company?: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations('page.contacts');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = res.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        throw new Error("Invalid JSON response");
      }

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccess(true);
        router.push("/home");
      } else {
        throw new Error(result?.error || "Submit error");
      }

    } catch (error: any) {
      setErrorMessage(t('form.error') || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Squares 
        speed={0.5}
        squareSize={40}
        direction="up"
        borderColor="rgba(22, 19, 240, 0.2)"
        hoverFillColor="rgba(149, 0, 255, 0.1)"
      />

      <section className="relative top-28" id='contact'>
        <Container>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left Content */}
            <div className="w-full px-5 flex flex-col justify-center">
              <h1 className="text-xs text-center lg:text-xl text-[#00ccff] uppercase font-bold">
                {t('subtitle')}
              </h1>

              <h2 className="text-xl lg:text-3xl text-[#00fbff] mb-5 text-center">
                {t('body')}
              </h2>

              <p className="lg:text-xl md:text-center md:p-5">
                {t('paragraph')}
              </p>

              <div className="my-5">
                <span className="font-bold text-[#007bff] lg:text-2xl">{t('contact')}:</span>
                <p>
                  {t('mail')}: 
                  <a 
                    href="mailto:gesualdiafonsoarr@gmail.com" 
                    className="text-[#00fbff] hover:text-[#4fc2c4] hover:underline transition-colors duration-300"
                  >
                    gesualdiafonsoarr@gmail.com
                  </a>
                </p>

                <p>
                  <span className="text-[#00fbff]">{t('location')}:</span> Buenos Aires, Argentina
                </p>
              </div>

              <div className="my-5">
                <span className="text-xl lg:text-2xl">{t('media')}</span>

                <ul className="flex flex-row items-center justify-center gap-10 my-8">
                  <li><a href="https://github.com/gesualdiafonso" target="_blank"><FaGithub size={40} className="text-[#007bff] hover:text-[#00ff99] transition-colors duration-300" /></a></li>
                  <li><a href="https://www.behance.net/afonsogesualdi" target="_blank"><FaBehance size={40} className="text-[#007bff] hover:text-[#00ff99] transition-colors duration-300" /></a></li>
                  <li><a href="https://www.instagram.com/gesualdi.design" target="_blank"><FaInstagramSquare size={40} className="text-[#007bff] hover:text-[#00ff99] transition-colors duration-300" /></a></li>
                  <li><a href="https://www.facebook.com/share/1DzRTzxJMH/?mibextid=wwXIfr" target="_blank"><FaFacebook size={40} className="text-[#007bff] hover:text-[#00ff99] transition-colors duration-300" /></a></li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-center text-4xl mb-2 font-bold text-[#00ccff]">
                {t('title')}
              </h2>

              {success ? (
                <p className="text-green-600">{t('form.success')}</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (Object.keys(errors).length > 0) {
                      setErrorMessage(t('form.error'));
                    } else {
                      handleSubmit(onSubmit)();
                    }
                  }}
                  className="bg-[#F8F8FF] text-[#1e1f26] rounded-lg py-10 px-8 flex flex-col gap-4"
                >

                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                  <h3 className="text-center lg:text-2xl text-[#007bff] mb-4">
                    {t('form.title')}
                  </h3>

                  {/* NAME */}
                  <div>
                    <label htmlFor="name" className="block font-medium">{t('form.name')}</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 border-2 rounded-xl bg-[#f8f8f8] border-[#007bff] outline-none
                                focus:border-[#00ccff] transition duration-300"
                      {...register("name", { required: t('form.required') })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="email">{t('form.email')}</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border-2 rounded-xl bg-[#f8f8f8] border-[#007bff] outline-none
                                focus:border-[#00ccff] transition duration-300"
                      {...register("email", {
                        required: t('form.required'),
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "The email you entered is invalid!",
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* COUNTRY */}
                  <div>
                    <label htmlFor="country">{t('form.country')}</label>
                    <select
                      id="country"
                      className="w-full p-2 border rounded-xl bg-white"
                      {...register("country", { required: t('form.required') })}
                    >
                        <option value="">Select the country...</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </select>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label htmlFor="phone">{t('form.phone')}</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-2 border-2 rounded-xl bg-[#f8f8f8] border-[#007bff] outline-none
                                focus:border-[#00ccff] transition duration-300"
                      {...register("phone", {
                        required: t('form.required'),
                        pattern: { value: /^[0-9]+$/, message: "Only numbers allowed." },
                      })}
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label>{t('form.company')}</label>
                    <input
                      type="text"
                      className="w-full p-2 border-2 rounded-xl bg-[#f8f8f8] border-[#007bff] outline-none
                                focus:border-[#00ccff] transition duration-300"
                      {...register("company")}
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="message">{t('form.message')}</label>
                    <textarea
                      id="message"
                      className="w-full p-2 border-2 rounded-xl bg-[#f8f8f8] border-[#007bff] outline-none
                                focus:border-[#00ccff] transition duration-300 resize-none"
                      {...register("message", { required: t('form.required') })}
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#007bff] text-white py-2 text-lg rounded-lg font-bold uppercase
                              hover:bg-[#00ff99] hover:-translate-y-1 transition-all duration-300"
                  >
                    {loading ? "Sending..." : t('form.submit')}
                  </button>

                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
