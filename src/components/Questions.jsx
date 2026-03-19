import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "motion/react";

const FAQS = [
  {
    cat: "Process & timelines",
    badge: { text: "Process & timelines", className: "bg-[#EEEDFE] text-[#3C3489]" },
    catId: "process",
    items: [
      {
        q: "How long does it take to build a website?",
        a: "A standard business website takes 2–4 weeks. A more complex site with custom features, a client portal, or e-commerce can take 6–10 weeks. We share a detailed project timeline after our discovery call so you always know what to expect and when.",
      },
      {
        q: "What does your development process look like?",
        a: "We follow a 5-stage process: Discovery (understanding your goals) → Design (wireframes and visual mockups for your approval) → Development (building the site) → Testing (cross-device and speed checks) → Launch and handover. You review and approve at every stage.",
      },
      {
        q: "How involved do I need to be during the project?",
        a: "We keep it light for you. We'll need your logo, brand colours, content (text and images), and two or three feedback rounds. Most clients invest 2–4 hours total. If you don't have content ready, we offer copywriting and photography as add-ons.",
      },
      {
        q: "What do you need from me to get started?",
        a: "A signed agreement, a 50% deposit, your brand assets (logo, colours, fonts if any), and a brief about your business and goals. We'll send you a simple onboarding form that covers everything.",
      },
    ],
  },
  {
    cat: "Cost & payment",
    badge: { text: "Cost & payment", className: "bg-[#FAEEDA] text-[#633806]" },
    catId: "cost",
    items: [
      {
        q: "How much does a website cost?",
        a: "Pricing depends on scope. A basic 5-page business site starts from USD 350. E-commerce, booking systems, or custom web apps are quoted separately. We offer monthly payment plans for larger projects. Book a free call and we'll give you an accurate quote within 24 hours.",
      },
      {
        q: "Do you charge for changes after the site launches?",
        a: "Minor text and image updates within 14 days of launch are free. Beyond that, we offer affordable monthly maintenance plans or charge an hourly rate for ad-hoc changes. We'll always tell you the cost before doing any work.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept USD bank transfer, Ecocash, Innbucks, and mobile money. For ongoing retainer clients we also accept monthly standing orders. A 50% deposit is required to begin and 50% on delivery.",
      },
      {
        q: "Are there ongoing costs after the website is built?",
        a: "Yes — domain registration (yearly) and hosting (monthly or yearly) are separate ongoing costs. We can manage these for you under a maintenance plan, or guide you to handle them yourself. We're transparent about every cost upfront.",
      },
    ],
  },
  {
    cat: "Technology & design",
    badge: { text: "Technology & design", className: "bg-[#E1F5EE] text-[#085041]" },
    catId: "tech",
    items: [
      {
        q: "Will my website work well on mobile phones?",
        a: "Absolutely. All websites we build are fully responsive — they look and work perfectly on phones, tablets, and desktops. We test on multiple real devices before launch. Over 70% of web traffic in Zimbabwe is mobile, so this is non-negotiable for us.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. We build on platforms like WordPress or custom CMS setups that are easy to manage. After launch we provide a training session so you can add blog posts, update prices, or swap images without touching any code.",
      },
      {
        q: "Can you integrate EcoCash or local payment gateways?",
        a: "Yes. We have experience integrating EcoCash, Paynow, Innbucks, and PayFast for Zimbabwean and SADC clients. We can also integrate international gateways like Stripe and PayPal for businesses trading across borders.",
      },
      {
        q: "Can you build mobile apps as well as websites?",
        a: "Yes — mobile app development (iOS and Android) is one of our core services. We build native and cross-platform apps using Flutter and React Native. We can also build a web app and mobile app from a single shared design system to save you cost.",
      },
    ],
  },
  {
    cat: "Support & after-launch",
    badge: { text: "Support & after-launch", className: "bg-[#FAECE7] text-[#712B13]" },
    catId: "support",
    items: [
      {
        q: "What support do you offer after the website goes live?",
        a: "All projects include 14 days of free post-launch support. After that, we offer monthly maintenance plans covering security updates, backups, uptime monitoring, and priority support. We won't just disappear after handover.",
      },
      {
        q: "What happens if my website goes down?",
        a: "If you're on a maintenance plan, we monitor uptime 24/7 and respond within 2 hours. For non-retainer clients, we're available via WhatsApp and email and will prioritise getting you back online as fast as possible.",
      },
      {
        q: "Do you offer digital marketing after the website is built?",
        a: "Yes. We offer SEO, Google Ads management, social media management, and email marketing as standalone services or bundled with your web project. A great website with no traffic is a missed opportunity — we help you get both.",
      },
    ],
  },
  
];

const FILTERS = [
  { id: "process", label: "Process" },
  { id: "cost", label: "Cost" },
  { id: "tech", label: "Technology" },
  { id: "support", label: "Support" },
];

const Questions = () => {
  const [filter, setFilter] = useState("process");
  const [openId, setOpenId] = useState(null);

  const visibleCats = useMemo(() => {
    return FAQS.map((c) => (c.catId === filter ? c : { ...c, items: [] })).filter(
      (c) => c.items.length,
    );
  }, [filter]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-bg_light_primary" id="faq">
      <div className="md:container px-5 py-14">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          FAQs
        </motion.h2>

        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Quick answers to common questions
        </motion.h4>

        <br />

        <div className="mx-auto max-w-[820px]">
          <div className="mb-4 flex flex-wrap gap-2">
            {FILTERS.map((t) => {
              const active = filter === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setFilter(t.id);
                    setOpenId(null);
                  }}
                  className={[
                    "rounded-full border px-3 py-1.5 text-[12px] transition",
                    active
                      ? "border-slate-300 bg-slate-100 text-slate-900"
                      : "border-slate-200 bg-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {visibleCats.map((cat) => (
              <div key={cat.catId}>
                <div className="mb-2 px-0.5 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500">
                  <span className={["inline-block rounded px-2 py-0.5 text-[11px] font-medium", cat.badge.className].join(" ")}>
                    {cat.badge.text}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {cat.items.map((item, i) => {
                    const id = `${cat.catId}-${i}`;
                    const open = openId === id;
                    return (
                      <div
                        key={id}
                        className="overflow-hidden rounded-[10px] border border-slate-200 bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          className={[
                            "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[14px] font-medium text-slate-900",
                            open ? "bg-slate-50" : "bg-white hover:bg-slate-50",
                          ].join(" ")}
                        >
                          <span>{item.q}</span>
                          <ChevronDown
                            className={[
                              "h-4 w-4 shrink-0 transition-transform duration-200",
                              open ? "rotate-180" : "rotate-0",
                            ].join(" ")}
                          />
                        </button>
                        {open ? (
                          <div className="px-4 pb-3 text-[13px] leading-7 text-slate-600">
                            {item.a}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
