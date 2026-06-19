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
  phone: "",
  company: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  preferredContact: "",
  message: "",
};

const projectTypeOptions = [
  "Website / portfolio",
  "SaaS product UI",
  "ERP / admin dashboard",
  "AI-assisted product",
  "Frontend rebuild",
  "Hiring / job role",
  "Other",
];

const budgetRangeOptions = [
  "Under ₹25,000",
  "₹25,000 - ₹75,000",
  "₹75,000 - ₹1.5L",
  "₹1.5L+",
  "Not decided yet",
];

const timelineOptions = [
  "ASAP",
  "This week",
  "2-4 weeks",
  "1-2 months",
  "Flexible",
];

const preferredContactOptions = ["Email", "Phone", "WhatsApp", "LinkedIn"];

const selectClassName =
  "flex h-11 w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

function RequiredMark() {
  return (
    <span aria-label="required" className="text-rose-300">
      *
    </span>
  );
}

function valueOrFallback(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "Not provided";
}

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
          phone: valueOrFallback(formData.phone),
          company: valueOrFallback(formData.company),
          project_type: valueOrFallback(formData.projectType),
          budget_range: valueOrFallback(formData.budgetRange),
          timeline: valueOrFallback(formData.timeline),
          preferred_contact: valueOrFallback(formData.preferredContact),
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
      setStatusMessage(
        "Inquiry sent successfully. I received your project details and will reply as soon as possible.",
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "EmailJS could not send this inquiry. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          <span>
            Full name <RequiredMark />
          </span>
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
          <span>
            Email address <RequiredMark />
          </span>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Phone <span className="text-xs font-normal text-muted-foreground">Optional</span>
          <Input
            autoComplete="tel"
            name="phone"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                phone: event.target.value,
              }))
            }
            placeholder="+91 ..."
            type="tel"
            value={formData.phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Company <span className="text-xs font-normal text-muted-foreground">Optional</span>
          <Input
            autoComplete="organization"
            name="company"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
            placeholder="Company or team name"
            type="text"
            value={formData.company}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Project type
          <select
            className={selectClassName}
            name="project_type"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                projectType: event.target.value,
              }))
            }
            value={formData.projectType}
          >
            <option value="">Select a project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Budget range
          <select
            className={selectClassName}
            name="budget_range"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                budgetRange: event.target.value,
              }))
            }
            value={formData.budgetRange}
          >
            <option value="">Select a budget range</option>
            {budgetRangeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Timeline
          <select
            className={selectClassName}
            name="timeline"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                timeline: event.target.value,
              }))
            }
            value={formData.timeline}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Preferred contact
          <select
            className={selectClassName}
            name="preferred_contact"
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                preferredContact: event.target.value,
              }))
            }
            value={formData.preferredContact}
          >
            <option value="">Select a contact method</option>
            {preferredContactOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        <span>
          Message <RequiredMark />
        </span>
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
