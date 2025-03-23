"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 text-white bg-black">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-500">
            Contact Us
          </h2>
          <p className="max-w-md mx-auto mt-2 text-gray-300">
            Have questions or want to make a reservation? Get in touch with us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="text-white bg-gray-900 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-yellow-500">Send Us a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-black bg-yellow-500 rounded-full">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-yellow-500">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input className="text-white bg-gray-800" placeholder="Name" required />
                    <Input className="text-white bg-gray-800" type="email" placeholder="Email" required />
                  </div>
                  <Input className="text-white bg-gray-800" placeholder="Subject" required />
                  <Textarea className="text-white bg-gray-800" placeholder="Your message" rows={5} required />
                  <Button
                    type="submit"
                    className="w-full bg-[#FF5307] hover:bg-[#d44606] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          <div className="space-y-6">
            {[{
              icon: <MapPin className="w-6 h-6" />,
              title: "Our Locations",
              text: "Shop no 1 Plot no L S 19 st no 23/1 37/c landhi no 3 oppt awadh hospital , Karachi, Pakistan"
            }, {
              icon: <Phone className="w-6 h-6" />,
              title: "Phone Numbers",
              text: "Karachi: +92 319 2000019"
            }, {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Addresses",
              text: "Pizzacraveofficial@gmail.com"
            }].map((item, index) => (
              <Card key={index} className="text-white bg-gray-900 border border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 text-black bg-yellow-500 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-yellow-500">{item.title}</h3>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
