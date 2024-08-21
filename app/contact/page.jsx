"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+33 6 25 20 55 05",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "brahimzerd@gmail.com",
  },
];

const Contact = () => {
  const { t } = useTranslation();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, phone, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        // Utiliser response.ok pour vérifier les codes 2xx
        toast({
          title: "Message sent successfully!",
          description: "I will call you back soon! :)",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Afficher le message d'erreur depuis la réponse
        setStatus(`Error: ${data.error || response.statusText}`);
        toast({
          title: "Submission Error",
          description: `Error: ${data.error || response.statusText}`,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An unexpected error occurred.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  id="firstName"
                  name="firstName"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder={t("Firstname")}
                />
                <Input
                  type="lastname"
                  required
                  id="lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={t("Lastname")}
                />
                <Input
                  type="email"
                  required
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder={t("Email adress")}
                />
                <Input
                  type="phone"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("Phone number")}
                />
              </div>
              <Textarea
                required
                className="h-[200px]"
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("Type your message here")}
              />
              <Button size="md" className="max-w-40" type="submit">
                {" "}
                {t("Send Message")}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
