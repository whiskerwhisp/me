import { House, IceCreamBowl, Key } from "lucide-react";

export const ProjectData = [
  
  {
    title: "Locksy",
    text: " A strong password generator with a built-in secure vault to store and manage your passwords safely.",
    icon: <Key />,
    bg: "bg-[#a9a9a9]/60",
    tech: ["Next.js", "MongoDB", "TS"],
    githubUrl: "https://github.com/whiskerwhisp/Locksy",
    liveUrl: "https://locksy-vault.vercel.app/",
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
    title: "CasaCozy",
    text: "A cozy rental platform where users can discover unique stays, create their own listings, and manage them with full CRUD functionality.",
    icon: <House />,
    bg: "bg-[#de4a55]/30",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/whiskerwhisp",
    liveUrl: "https://casacozy.vercel.app",
  },
];

export default ProjectData;