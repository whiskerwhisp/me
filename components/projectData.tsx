import { House, IceCreamBowl, Link } from "lucide-react";

export const ProjectData = [
  {
    title: "CasaCozy",
    text: "A cozy rental platform where users can discover unique stays, create their own listings, and manage them with full CRUD functionality.",
    icon: <House />,
    bg: "bg-[#de4a55]/30",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/yourname/casacozy",
    liveUrl: "https://casacozy.vercel.app",
  },
  {
    title: "Frozio",
    text: "An ice-cream e-commerce delight—browse a variety of flavors, add your favorites to the cart, and enjoy a smooth shopping experience.",
    icon: <IceCreamBowl  />,
    bg: "bg-[#a2d2ff]/30",
    tech: ["Next.js", "Prisma","postgresql"],
    githubUrl: "https://github.com/whiskerwhisp/Frozio",
    liveUrl: "https://frozio.vercel.app/",
  },
  {
    title: "Shortify",
    text: "A minimal and fast URL shortener that transforms long, messy links into sleek, shareable ones.",
    icon: <Link />,
    bg: "bg-[#a9a9a9]/60",
    tech: ["MERN"],
    githubUrl: "https://github.com/yourname/shortify",
    liveUrl: "https://shortify-demo.vercel.app",
  },
];

export default ProjectData;