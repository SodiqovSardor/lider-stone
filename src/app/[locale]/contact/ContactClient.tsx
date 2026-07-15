"use client";

import { useState } from "react";
import SectionHeading from "@/src/components/SectionHeading";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { Send, MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactClient() {
  const { dict } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          description={dict.contact.desc}
          className="mb-16"
        />
        <div className="grid gap-14 md:grid-cols-2">
          <div className="space-y-10">
            {[
              { icon: MapPin, label: dict.contact.address, content: <a href="https://maps.google.com/?q=Yashnabod+Tashkent+Uzbekistan" target="_blank" rel="noopener noreferrer" className="mt-1 block font-sans text-base text-stone-100 transition-colors hover:text-bronze">Yashnabod district<br />Tashkent, Uzbekistan</a> },
              { icon: Phone, label: dict.contact.phone, content: <a href="tel:+998901234567" className="mt-1 block font-sans text-base text-stone-100 transition-colors hover:text-bronze">+998 90 123 45 67</a> },
              { icon: Mail, label: dict.contact.email, content: <a href="mailto:info@liderstone.uz" className="mt-1 block font-sans text-base text-stone-100 transition-colors hover:text-bronze">info@liderstone.uz</a> },
              { icon: Clock, label: dict.contact.hours, content: <><p className="mt-1 font-sans text-base text-stone-100">{dict.contact.hoursWeek}</p><p className="font-sans text-base text-stone-400">{dict.contact.hoursSun}</p></> },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon className="mt-1 h-5 w-5 shrink-0 text-bronze/70" />
                <div>
                  <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{item.label}</h3>
                  {item.content}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://t.me/liderstone" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-bronze px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all hover:bg-bronze-dim">
                <Send className="h-4 w-4" /> {dict.common.telegram}
              </a>
              <a href="https://wa.me/998901234567" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-bronze/60 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-all hover:bg-bronze hover:text-obsidian">
                <MessageCircle className="h-4 w-4" /> {dict.common.whatsapp}
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div className="overflow-hidden rounded-sm border border-stone-700/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95960.2933379785!2d69.17721065!3d41.31115155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1"
                width="100%" height="240" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Lider Stone location on Google Maps" className="rounded-sm" />
            </div>
            {submitted ? (
              <div className="rounded-sm border border-bronze/20 bg-charcoal p-8 text-center">
                <p className="font-sans text-xl font-light text-stone-100">{dict.common.thankYou}</p>
                <p className="mt-2 font-sans text-sm text-stone-400">{dict.common.thankYouMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: dict.contact.formName, placeholder: dict.contact.formNamePlaceholder, type: "text" },
                  { id: "phone", label: dict.contact.formPhone, placeholder: dict.contact.formPhonePlaceholder, type: "tel" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="mb-1.5 block font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{f.label}</label>
                    <input id={f.id} type={f.type} required
                      className="w-full rounded-sm border border-stone-700/30 bg-charcoal px-4 py-3 font-sans text-sm text-stone-100 placeholder:text-stone-700 focus:border-bronze/50 focus:outline-none"
                      placeholder={f.placeholder} />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.contact.formMessage}</label>
                  <textarea id="message" rows={4} required
                    className="w-full resize-none rounded-sm border border-stone-700/30 bg-charcoal px-4 py-3 font-sans text-sm text-stone-100 placeholder:text-stone-700 focus:border-bronze/50 focus:outline-none"
                    placeholder={dict.contact.formMessagePlaceholder} />
                </div>
                <button type="submit"
                  className="w-full rounded-full bg-bronze px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all hover:bg-bronze-dim">
                  {dict.common.sendMessage}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
