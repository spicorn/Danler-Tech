// import content
import { content } from "../Content";
import { motion } from "motion/react";
import { Tabs } from "../Layouts/Tabs";
import { useMemo } from "react";

const Skills = () => {
  const { skills } = content;

  const categorized = useMemo(() => {
    const items = skills.skills_content || [];

    const extras = {
      app: [
        {
          name: "UI/UX",
          para: "Wireframes, user flows, and high-fidelity Figma prototypes.",
        },
        {
          name: "App maintenance & updates",
          para: "Monthly updates, OS compatibility patches, crash monitoring, and performance optimisation.",
        },
      ],
      web: [
        {
          name: "Business website design",
          para: "Professional 5–10 page websites built mobile-first approach.",
        },
        {
          name: "E-commerce store",
          para: "Online stores with EcoCash, Paynow & Innbucks integration.",
        },
        {
          name: "Landing page design",
          para: "High-converting campaign pages, product launches, and lead capture pages with professional visuals.",
        },
        {
          name: "Web application development",
          para: "Custom web apps  booking systems, portals, dashboards, school management systems.",
        },
        {
          name: "Website maintenance",
          para: "Monthly updates, security patches, backups, uptime monitoring, and content changes.",
        },
      ],
      marketing: [
        {
          name: "Social media management",
          para: "Full management of Facebook, Instagram, LinkedIn, TikTok.",
        },
        {
          name: "Facebook & Instagram Ads",
          para: "Paid social with Danler Tech, produced video and photo creatives  significantly outperforms stock content.",
        },
        {
          name: "Google Ads management",
          para: "Search, Display, and YouTube campaigns managed with  ad creatives.",
        },
        {
          name: "Analytics & monthly reporting",
          para: "Monthly performance report with KPIs across web, social, ads, and SEO. Delivered with clear action points.",
        },
      ],
    };

    const matchers = [
      {
        key: "web",
        title: "Web Design",
        test: (n) => /website|web\b|hosting|domain|email hosting/i.test(n),
      },
      {
        key: "app",
        title: "App Design",
        test: (n) => /app|mobile|flutter|react native/i.test(n),
      },
      {
        key: "marketing",
        title: "Digital Marketing",
        test: (n) => /marketing|seo/i.test(n),
      },
      {
        key: "automation",
        title: "Automation",
        test: (n) => /chatbot|whatsapp|telegram|bot/i.test(n),
      },
      {
        key: "other",
        title: "Other",
        test: () => true,
      },
    ];

    const buckets = new Map(matchers.map((m) => [m.key, []]));

    items.forEach((s) => {
      const name = s?.name || "";
      const m = matchers.find((x) => x.key !== "other" && x.test(name));
      const key = m?.key || "other";
      buckets.get(key).push(s);
    });

    // Add curated items (avoid duplicates by name)
    for (const [key, list] of Object.entries(extras)) {
      const existingNames = new Set((buckets.get(key) || []).map((s) => s?.name));
      list.forEach((s) => {
        if (!existingNames.has(s.name)) buckets.get(key).push(s);
      });
    }

    // Remove duplicates from overlapping matchers (keep first match in priority order)
    const seen = new Set();
    for (const k of ["web", "app", "marketing", "automation", "other"]) {
      const list = buckets.get(k) || [];
      buckets.set(
        k,
        list.filter((s) => {
          const id = s?.name || JSON.stringify(s);
          if (seen.has(id)) return false;
          seen.add(id);
          return true;
        }),
      );
    }

    const makeTabContent = (title, list) => (
      <div className="rounded-2xl bordershadow-sm md:p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-dark_primary">{title}</h3>
          <p className="text-sm leading-6 text-slate-600">
            Explore what we offer in {title.toLowerCase()}.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {list.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-bg_light_primary p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-semibold text-dark_primary">
                  {s.name}
                </h4>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{s.para}</p>
            </div>
          ))}
        </div>
      </div>
    );

    const tabs = [
      { value: "web", title: "Web Design", list: buckets.get("web") || [] },
      { value: "app", title: "App Design", list: buckets.get("app") || [] },
      {
        value: "marketing",
        title: "Digital Marketing",
        list: buckets.get("marketing") || [],
      },
      {
        value: "automation",
        title: "Automation",
        list: buckets.get("automation") || [],
      },
      { value: "other", title: "Other", list: buckets.get("other") || [] },
    ].filter((t) => t.list.length);

    return tabs.map((t) => ({
      value: t.value,
      title: t.title,
      content: makeTabContent(t.title, t.list),
    }));
  }, [skills.skills_content]);

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* content */}
     <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {skills.title}
        </motion.h2>
        <motion.h4
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {skills.subtitle}
        </motion.h4>
        <br />
        <div className="mx-auto max-w-[980px]">
          <Tabs
            tabs={categorized}
            containerClassName="flex overflow-x-auto gap-2 sm:justify-center no-scrollbar"
            tabClassName="whitespace-nowrap border border-slate-200 text-xs sm:text-sm px-3 py-2"
            activeTabClassName="bg-slate-900 text-white"
            contentClassName="mt-6 sm:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
