import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const jobs = [
  {
    id: 1,
    title: "Head Chef",
    department: "Kitchen",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Lead our kitchen team in delivering exceptional meals across all FoodCourt outlets. You'll oversee menu planning, food quality, and team training.",
    requirements: ["5+ years culinary experience", "Team leadership skills", "Menu development"],
    icon: "👨‍🍳",
  },
  {
    id: 2,
    title: "Event Catering Manager",
    department: "Operations",
    type: "Full-time",
    location: "Abuja, Nigeria",
    description:
      "Coordinate and manage end-to-end catering operations for events ranging from intimate gatherings to large corporate functions.",
    requirements: ["3+ years event management", "Client-facing experience", "Logistics planning"],
    icon: "📋",
  },
  {
    id: 3,
    title: "Brand & Social Media Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Drive FoodCourt's online presence through compelling content, campaigns, and community engagement across all social platforms.",
    requirements: ["Content creation skills", "Social media strategy", "Photography/video a plus"],
    icon: "📱",
  },
  {
    id: 4,
    title: "Pastry Chef",
    department: "Kitchen",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Join our bakery team crafting fresh, artisan pastries and desserts daily. Creativity and consistency are key.",
    requirements: ["Pastry/baking certification", "2+ years experience", "Attention to detail"],
    icon: "🥐",
  },
  {
    id: 5,
    title: "Delivery Operations Lead",
    department: "Logistics",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description:
      "Oversee our delivery fleet and ensure timely, accurate food delivery to customers across service areas.",
    requirements: ["Logistics experience", "Fleet management", "Problem-solving skills"],
    icon: "🚚",
  },
  {
    id: 6,
    title: "Customer Experience Associate",
    department: "Support",
    type: "Full-time",
    location: "Remote",
    description:
      "Be the friendly voice of FoodCourt. Handle customer enquiries, complaints, and feedback with professionalism and warmth.",
    requirements: ["Strong communication", "Empathy & patience", "CRM tools knowledge"],
    icon: "🎧",
  },
  {
    id: 7,
    title: "Junior Frontend Developer",
    department: "Technology",
    type: "Full-time",
    location: "Remote",
    description:
      "Build and maintain FoodCourt's web products. You'll work closely with design to deliver clean, responsive interfaces.",
    requirements: ["React & Tailwind CSS", "1+ year experience", "Git & version control"],
    icon: "💻",
  },
  {
    id: 8,
    title: "Nutrition & Wellness Consultant",
    department: "Product",
    type: "Contract",
    location: "Lagos, Nigeria",
    description:
      "Help shape our healthy menu offerings and fresh press products with evidence-based nutrition guidance.",
    requirements: ["Nutrition degree", "Menu consulting experience", "Health & wellness passion"],
    icon: "🥗",
  },
];

const perks = [
  { icon: "🍽️", title: "Free Meals Daily", desc: "Every team member enjoys free FoodCourt meals on every shift." },
  { icon: "📈", title: "Growth Opportunities", desc: "We promote from within and invest in your career development." },
  { icon: "🏥", title: "Health Coverage", desc: "Comprehensive HMO health insurance for you and your family." },
  { icon: "🎓", title: "Training & Upskilling", desc: "Regular workshops, certifications, and learning stipends." },
  { icon: "🤝", title: "Inclusive Culture", desc: "A diverse, welcoming team where every voice is valued." },
  { icon: "🏖️", title: "Paid Time Off", desc: "Generous leave policy so you can rest and recharge." },
];

const departments = ["All", "Kitchen", "Operations", "Marketing", "Logistics", "Support", "Technology", "Product"];

function Careers() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filtered =
    activeTab === "All" ? jobs : jobs.filter((j) => j.department === activeTab);

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* ── Hero ── */}
      <div className={`w-full py-16 px-4 text-center ${isDark ? "bg-gray-800" : "bg-white"} border-b ${isDark ? "border-gray-700" : "border-gray-100"}`}>
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Join Our Team
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Build a Career at FoodCourt
        </h1>
        <p className={`text-sm max-w-xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          We're on a mission to redefine food experiences across Africa. If you're passionate, driven, and love food — you belong here.
        </p>
        <div className="flex justify-center gap-4 mt-7 flex-wrap">
          <div className={`px-6 py-3 rounded-2xl text-center ${isDark ? "bg-gray-700" : "bg-red-50"}`}>
            <p className="text-2xl font-bold text-red-500">{jobs.length}+</p>
            <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Open Roles</p>
          </div>
          <div className={`px-6 py-3 rounded-2xl text-center ${isDark ? "bg-gray-700" : "bg-red-50"}`}>
            <p className="text-2xl font-bold text-red-500">5+</p>
            <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Departments</p>
          </div>
          <div className={`px-6 py-3 rounded-2xl text-center ${isDark ? "bg-gray-700" : "bg-red-50"}`}>
            <p className="text-2xl font-bold text-red-500">3</p>
            <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Cities</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ── Perks Section ── */}
        <div className="mb-14">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-1 text-center">Why FoodCourt</p>
          <h2 className="text-2xl font-bold text-center mb-8">Perks & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 flex gap-4 items-start shadow-sm
                  ${isDark ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{perk.title}</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Open Roles ── */}
        <div>
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-1 text-center">Opportunities</p>
          <h2 className="text-2xl font-bold text-center mb-6">Open Positions</h2>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dep) => (
              <button
                key={dep}
                onClick={() => setActiveTab(dep)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${activeTab === dep
                    ? "bg-red-500 text-white border-red-500"
                    : isDark
                      ? "bg-gray-800 text-gray-300 border-gray-600 hover:border-red-400 hover:text-red-400"
                      : "bg-white text-gray-600 border-gray-300 hover:border-red-400 hover:text-red-500"
                  }`}
              >
                {dep}
              </button>
            ))}
          </div>

          <p className={`text-center text-xs mb-6 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            {filtered.length} {filtered.length === 1 ? "role" : "roles"} available
          </p>

          {/* Job Listings */}
          <div className="flex flex-col gap-4">
            {filtered.map((job) => {
              const isOpen = expandedId === job.id;
              return (
                <div
                  key={job.id}
                  className={`rounded-2xl shadow-sm overflow-hidden transition-all duration-300
                    ${isDark ? "bg-gray-800" : "bg-white"}`}
                >
                  {/* Job Header — always visible */}
                  <button
                    onClick={() => toggle(job.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">
                            {job.department}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium
                            ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-500"}`}>
                            {job.type}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium
                            ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-500"}`}>
                            📍 {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`text-lg transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>

                  {/* Expanded Details */}
                  {isOpen && (
                    <div className={`px-5 pb-6 border-t ${isDark ? "border-gray-700" : "border-gray-100"}`}>
                      <p className={`text-sm mt-4 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        {job.description}
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2">Requirements:</p>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className={`text-xs flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="mt-5 px-6 py-2.5 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`mt-16 rounded-2xl p-8 text-center
          ${isDark ? "bg-gray-800" : "bg-red-50 border border-red-100"}`}>
          <h2 className="text-xl font-bold mb-2">Don't See Your Role?</h2>
          <p className={`text-sm mb-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            We're always looking for great talent. Send us your CV and we'll reach out when the right opportunity comes up.
          </p>
          <button className="px-7 py-3 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-all duration-200">
            Send Your CV
          </button>
        </div>

      </div>
    </div>
  );
}

export default Careers;
