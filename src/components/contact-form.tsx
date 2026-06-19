"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { emailJsConfig, profile } from "@/lib/portfolio-data";

type FormStatus = "idle" | "success" | "error" | "missing-config";

const initialForm = {
  fullname: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isConfigured = useMemo(
    () =>
      Boolean(
        emailJsConfig.serviceId &&
          emailJsConfig.templateId &&
          emailJsConfig.publicKey,
      ),
    [],
  );

  const isValid =
    formData.fullname.trim().length > 1 &&
    formData.email.includes("@") &&
    formData.message.trim().length > 8;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("missing-config");
      setStatusMessage(
        "EmailJS is not configured yet. Add your Service ID, Template ID, and Public Key in .env.local.",
      );
      return;
    }

    if (!isValid) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.fullname.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_name: profile.name,
          reply_to: formData.email.trim(),
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setFormData(initialForm);
      setStatus("success");
      setStatusMessage("Message sent. I will reply as soon as possible.");
    } catch {
      setStatus("error");
      setStatusMessage(
        "EmailJS could not send this message. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Full name
          <Input
            autoComplete="name"
            name="from_name"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullname: event.target.value,
              }))
            }
            placeholder="Your name"
            required
            type="text"
            value={formData.fullname}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email address
          <Input
            autoComplete="email"
            name="from_email"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            placeholder="you@example.com"
            required
            type="email"
            value={formData.email}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Message
        <Textarea
          name="message"
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          placeholder="Tell me about the role, project, or opportunity."
          required
          value={formData.message}
        />
      </label>

      {statusMessage ? (
        <p
          className={
            status === "success"
              ? "rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100"
              : "rounded-lg border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm text-amber-100"
          }
        >
          {statusMessage}
        </p>
      ) : null}

      <Button className="w-full sm:w-fit" disabled={!isValid || isSubmitting}>
        <Send />
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
