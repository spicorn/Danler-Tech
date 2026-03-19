import { Fragment, createElement, useMemo, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "../Layouts/MovingBorder";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [current, setCurrent] = useState(1);
  const total = 4;
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    biz: "",
    industry: "",
    projectType: "",
    existingSite: "",
    existingUrl: "",
    description: "",
    budget: "",
    timeline: "",
    contact: "",
    goals: "",
    source: "",
    extra: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const industryOptions = useMemo(
    () => [
      "Retail & e-commerce",
      "Hospitality & tourism",
      "Finance & insurance",
      "Healthcare",
      "Education",
      "Real estate",
      "NGO / non-profit",
      "Professional services",
      "Logistics & transport",
      "Other",
    ],
    [],
  );
  const projectTypeOptions = useMemo(
    () => [
      "New website",
      "Website redesign",
      "Mobile app",
      "Web application",
      "E-commerce store",
      "Digital marketing",
      "SEO / content",
      "Other",
    ],
    [],
  );
  const existingSiteOptions = useMemo(
    () => [
      "Yes — share the URL",
      "Yes — but it needs a full rebuild",
      "No — starting from scratch",
    ],
    [],
  );
  const budgetOptions = useMemo(
    () => [
      { amt: "Under $250", desc: "Basic presence" },
      { amt: "$300 – $450", desc: "Standard site" },
      { amt: "$500 – $700", desc: "Feature-rich" },
      { amt: "$700 – $900", desc: "Custom build" },
      { amt: "$1,000+", desc: "Enterprise / app" },
      { amt: "Not sure yet", desc: "Help me decide" },
    ],
    [],
  );
  const timelineOptions = useMemo(
    () => [
      "ASAP (urgent)",
      "Within 1 month",
      "1–3 months",
      "3–6 months",
      "Flexible / no rush",
    ],
    [],
  );
  const contactOptions = useMemo(
    () => ["WhatsApp", "Email", "Phone call", "Video call"],
    [],
  );
  const goalsOptions = useMemo(
    () => [
      "Generate more leads",
      "Sell products online",
      "Build brand credibility",
      "Replace an outdated site",
      "Launch something new",
      "Attract investors",
      "Improve SEO rankings",
      "Other",
    ],
    [],
  );
  const sourceOptions = useMemo(
    () => [
      "Google search",
      "Referral from someone",
      "Social media",
      "Saw our work",
      "WhatsApp / DM",
      "Other",
    ],
    [],
  );

  const toggleMulti = (key, val) => {
    setData((prev) => {
      const next = new Set(prev[key] || []);
      if (next.has(val)) next.delete(val);
      else next.add(val);
      return { ...prev, [key]: Array.from(next) };
    });
  };

  const selectSingle = (key, val) =>
    setData((prev) => ({ ...prev, [key]: val }));

  const go = (dir) => setCurrent((c) => Math.max(1, Math.min(total, c + dir)));

  const isEmailValid = (email) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/.test(email || "");

  const isStepValid = useMemo(() => {
    if (submitted) return true;

    if (current === 1) {
      return (
        data.name.trim().length > 0 &&
        data.phone.trim().length > 0 &&
        isEmailValid(data.email) &&
        data.industry.trim().length > 0
      );
    }

    if (current === 2) {
      const hasProjectType = (data.projectType || "").trim().length > 0;
      const hasExisting = (data.existingSite || "").trim().length > 0;
      const needsUrl = (data.existingSite || "").startsWith("Yes — share");
      const hasUrl = !needsUrl || data.existingUrl.trim().length > 0;
      const hasDesc = data.description.trim().length > 0;
      return hasProjectType && hasExisting && hasUrl && hasDesc;
    }

    if (current === 3) {
      return (
        data.budget.trim().length > 0 &&
        data.timeline.trim().length > 0 &&
        data.contact.trim().length > 0
      );
    }

    if (current === 4) {
      return data.goals.trim().length > 0 && data.source.trim().length > 0;
    }

    return false;
  }, [current, data, submitted]);

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isStepValid) {
      toast.error("Please complete all required fields before submitting.");
      return;
    }

    const message = [
      `Name: ${data.name || "-"}`,
      `WhatsApp / Phone: ${data.phone || "-"}`,
      `Email: ${data.email || "-"}`,
      `Business: ${data.biz || "-"}`,
      `Industry: ${data.industry || "-"}`,
      "",
      `Project type: ${data.projectType || "-"}`,
      `Existing website: ${data.existingSite || "-"}`,
      `Existing URL: ${data.existingUrl || "-"}`,
      "",
      `Description: ${data.description || "-"}`,
      "",
      `Budget: ${data.budget || "-"}`,
      `Timeline: ${data.timeline || "-"}`,
      `Preferred contact: ${data.contact || "-"}`,
      "",
      `Goals: ${data.goals || "-"}`,
      `Source: ${data.source || "-"}`,
      `Extra: ${data.extra || "-"}`,
    ].join("\n");

    // Sync hidden fields used by the existing EmailJS template
    if (form.current) {
      const setHidden = (name, value) => {
        const el = form.current.querySelector(
          `input[name="${name}"], textarea[name="${name}"]`,
        );
        if (el) el.value = value || "";
      };
      setHidden("from_name", data.name);
      setHidden("user_email", data.email);
      setHidden("message", message);
    }

    emailjs
      .sendForm(
        "service_5n3mb9r",
        "template_0b1ywzw",
        form.current,
        "fM8Vi-ut6MR-sfgAc",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        },
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <motion.h2
          className="title !text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {Contact.title}
        </motion.h2>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {Contact.subtitle}
        </motion.h4>
        <br />
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:flex-1"
          >
            {/* Hidden fields for existing EmailJS template */}
            <input type="text" name="from_name" defaultValue="" hidden />
            <input type="email" name="user_email" defaultValue="" hidden />
            <textarea name="message" defaultValue="" hidden />

            <div className="w-full max-w-[620px] pt-2 pb-8 md:mx-0">
              {!submitted ? (
                <>
                  <div className="mb-8 flex items-center" id="step-bar">
                    {[1, 2, 3, 4].map((i) => (
                      <Fragment key={`step-${i}`}>
                        <div
                          className={[
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-medium transition",
                            i < current
                              ? "border-[#1D9E75] bg-[#1D9E75] text-white"
                              : i === current
                                ? "border-slate-400/60 bg-transparent text-white"
                                : "border-slate-400/60 bg-slate-950/15= text-slate-200/85",
                          ].join(" ")}
                          id={`dot-${i}`}
                        >
                          {i < current ? "✓" : i}
                        </div>
                        {i < 4 ? (
                          <div
                            className={[
                              "h-px flex-1",
                              i < current ? "bg-[#1D9E75]" : "bg-slate-400/30",
                            ].join(" ")}
                            id={`line-${i}`}
                          />
                        ) : null}
                      </Fragment>
                    ))}
                  </div>
                  <div className="mt-[-1rem] mb-6 flex justify-between">
                    {["You", "Project", "Budget", "Goals"].map((lbl, idx) => {
                      const i = idx + 1;
                      return (
                        <span
                          key={lbl}
                          className={[
                            "w-7 text-center text-[11px] text-slate-200/65",
                            i === current ? "font-medium text-[#7F77DD]" : "",
                          ].join(" ")}
                          id={`lbl-${i}`}
                        >
                          {lbl}
                        </span>
                      );
                    })}
                  </div>

                  <div id="1-content">
                    {current === 1 ? (
                      <>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Your name{" "}
                            <span className="text-[11px] font-normal text-slate-200/65">
                              — first name is fine
                            </span>
                          </div>
                          <input
                            type="text"
                            id="f-name"
                            placeholder="e.g. Tatenda Moyo"
                            value={data.name}
                            onChange={(e) =>
                              selectSingle("name", e.target.value)
                            }
                            required
                            className="w-full rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
                          <div className="mb-5">
                            <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                              WhatsApp number{" "}
                            </div>
                            <input
                              type="tel"
                              id="f-phone"
                              placeholder="+263 77 123 4567"
                              value={data.phone}
                              onChange={(e) =>
                                selectSingle("phone", e.target.value)
                              }
                              required
                              className="w-full rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                            />
                          </div>
                          <div className="mb-5">
                            <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                              Email address
                            </div>
                            <input
                              type="email"
                              id="f-email"
                              placeholder="you@company.com"
                              value={data.email}
                              onChange={(e) =>
                                selectSingle("email", e.target.value)
                              }
                              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                              required
                              className="w-full rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                            />
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Business name{" "}
                            <span className="text-[11px] font-normal text-slate-200/65">
                              — if applicable
                            </span>
                          </div>
                          <input
                            type="text"
                            id="f-biz"
                            placeholder="Your company or trading name"
                            value={data.biz}
                            onChange={(e) =>
                              selectSingle("biz", e.target.value)
                            }
                            className="w-full rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                          />
                        </div>
                        <div className="mb-5">
  <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
    Industry / sector
  </div>

  <div className="relative">
    <select
      id="f-industry"
      value={data.industry}
      onChange={(e) => selectSingle("industry", e.target.value)}
      required
      className="w-full appearance-none rounded-[10px] border border-slate-400/60 bg-dark_primary px-3 py-2.5 pr-10 text-[13px] text-white outline-none focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
    >
      <option value="">Select your industry…</option>
      {industryOptions.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>

    {/* Custom Arrow */}
    <ChevronDown
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
    />
  </div>
</div>
                      </>
                    ) : null}

                    {current === 2 ? (
                      <>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            What type of project is this?
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {projectTypeOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.projectType === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("projectType", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  selectSingle("projectType", o)
                                }
                              >
                                {o}
                                {data.projectType === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Do you have an existing website?
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {existingSiteOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.existingSite === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("existingSite", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  selectSingle("existingSite", o)
                                }
                              >
                                {o}
                                {data.existingSite === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="mb-5"
                          id="existing-url-row"
                          style={{
                            display:
                              data.existingSite &&
                              data.existingSite.startsWith("Yes — share")
                                ? "block"
                                : "none",
                          }}
                        >
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Current website URL
                          </div>
                          <input
                            type="text"
                            placeholder="https://yoursite.com"
                            value={data.existingUrl}
                            onChange={(e) =>
                              selectSingle("existingUrl", e.target.value)
                            }
                            required={
                              data.existingSite &&
                              data.existingSite.startsWith("Yes — share")
                            }
                            className="w-full rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                          />
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Describe what you need{" "}
                            <span className="text-[11px] font-normal text-slate-200/65">
                              — be as specific or brief as you like
                            </span>
                          </div>
                          <textarea
                            placeholder="e.g. We run a Harare-based tour company. We need a site with a booking form, photo gallery, WhatsApp button, and EcoCash payment."
                            value={data.description}
                            onChange={(e) =>
                              selectSingle("description", e.target.value)
                            }
                            required
                            className="min-h-20 w-full resize-y rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] leading-6 text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                          />
                        </div>
                      </>
                    ) : null}

                    {current === 3 ? (
                      <>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            What is your budget range?{" "}
                          </div>
                          <div className="grid grid-cols-2 gap-2 min-[520px]:grid-cols-3">
                            {budgetOptions.map((b) => (
                              <div
                                key={b.amt}
                                className={[
                                  "relative cursor-pointer rounded-[10px] border bg-slate-950/15 p-3 pr-10 transition hover:border-[#7F77DD]",
                                  data.budget === b.amt
                                    ? "border-2 border-[#534AB7] bg-[#EEEDFE]"
                                    : "border-slate-400/60",
                                ].join(" ")}
                                onClick={() => selectSingle("budget", b.amt)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  selectSingle("budget", b.amt)
                                }
                              >
                                <div
                                  className={[
                                    "text-[13px] font-medium",
                                    data.budget === b.amt
                                      ? "text-[#3C3489]"
                                      : "text-white",
                                  ].join(" ")}
                                >
                                  {b.amt}
                                </div>
                                <div
                                  className={[
                                    "mt-0.5 text-[11px]",
                                    data.budget === b.amt
                                      ? "text-[#3C3489]/80"
                                      : "text-slate-200/65",
                                  ].join(" ")}
                                >
                                  {b.desc}
                                </div>
                                {data.budget === b.amt ? (
                                  <span className="absolute right-3 top-3 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-5" style={{ marginTop: "1.25rem" }}>
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Preferred timeline
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {timelineOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.timeline === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("timeline", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  selectSingle("timeline", o)
                                }
                              >
                                {o}
                                {data.timeline === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            How would you prefer to be contacted?
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {contactOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.contact === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("contact", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  selectSingle("contact", o)
                                }
                              >
                                {o}
                                {data.contact === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}

                    {current === 4 ? (
                      <>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            What is the main goal of this project?
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {goalsOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.goals === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("goals", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && selectSingle("goals", o)
                                }
                              >
                                {o}
                                {data.goals === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            How did you hear about Danler Tech?
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {sourceOptions.map((o) => (
                              <div
                                key={o}
                                className={[
                                  "relative cursor-pointer select-none rounded-full border px-3 py-1.5 pr-8 text-[12px] transition",
                                  "border-slate-400/60 bg-slate-950/15 text-slate-200/85 hover:border-[#7F77DD] hover:text-[#d9d7ff]",
                                  data.source === o
                                    ? "border-[#534AB7] bg-[#EEEDFE] text-[#3C3489]"
                                    : "",
                                ].join(" ")}
                                onClick={() => selectSingle("source", o)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && selectSingle("source", o)
                                }
                              >
                                {o}
                                {data.source === o ? (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3C3489]">
                                    <Check className="h-4 w-4" />
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-white">
                            Anything else you'd like us to know?{" "}
                            <span className="text-[11px] font-normal text-slate-200/65">
                              — optional
                            </span>
                          </div>
                          <textarea
                            placeholder="Special requirements, questions, or context…"
                            value={data.extra}
                            onChange={(e) =>
                              selectSingle("extra", e.target.value)
                            }
                            style={{ minHeight: 64 }}
                            className="w-full resize-y rounded-[10px] border border-slate-400/60 bg-slate-950/15 px-3 py-2.5 text-[13px] leading-6 text-white outline-none placeholder:text-slate-200/45 focus:border-slate-900/[0.8] focus:ring-2 focus:ring-[#7F77DD]/20"
                          />
                        </div>
                      </>
                    ) : null}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    {current > 1 ? (
                      <Button
                      type="button"
                        className="bg-white dark:bg-transparent text-white border-neutral-200 flex items-center gap-2"
                        onClick={() => go(-1)}
                      >
                        Back
                      </Button>
                    ) : (
                      <span />
                    )}
                    {/* <span className="text-[12px] text-slate-200/65">
                      Step {current} of {total}
                    </span> */}
                    {current < total ? (
                      <Button
                      type="button"
                        className="bg-white dark:bg-transparent text-white border-neutral-200 flex items-center gap-2"
                        onClick={() => {
                          if (!isStepValid) {
                            toast.error(
                              "Please fill in all required fields to continue.",
                            );
                            return;
                          }
                          go(1);
                        }}
                        disabled={!isStepValid}
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        className="bg-white dark:bg-transparent text-white border-neutral-200 flex items-center gap-2"
                        type="submit"
                        disabled={!isStepValid}
                      >
                        Submit project brief 
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div id="step-content">
                  <div className="px-4 py-10 text-center">
                    <div
                      className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#E1F5EE]"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0F6E56"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "var(--color-text-primary, #fff)",
                        marginBottom: 8,
                      }}
                    >
                      Brief received — thank you!
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color:
                          "var(--color-text-secondary, rgba(226,232,240,0.85))",
                        lineHeight: 1.7,
                        maxWidth: 380,
                        margin: "0 auto",
                      }}
                    >
                      We'll review your project and reach out via{" "}
                      <strong>{data.contact || "WhatsApp"}</strong> within 24
                      hours with a custom quote and next steps.
                    </div>
                    <Button
                      className="bg-white dark:bg-transparent text-white border-neutral-200 flex items-center gap-2"
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrent(1);
                        setData({
                          name: "",
                          phone: "",
                          email: "",
                          biz: "",
                          industry: "",
                          projectType: "",
                          existingSite: "",
                          existingUrl: "",
                          description: "",
                          budget: "",
                          timeline: "",
                          contact: "",
                          goals: "",
                          source: "",
                          extra: "",
                        });
                      }}
                    >
                      Submit another brief 
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.form>

          <motion.div
            className="w-full max-w-[620px] md:max-w-[360px] md:pt-2 md:text-left flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {Contact.social_media.map((content, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
                className="flex items-center gap-2 md:justify-start justify-center"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.text}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
