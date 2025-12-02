import { OrbitingCircles } from "@/components/ui/ObitingCircles";
import { 
    FaPython, FaCss3Alt, FaLaravel, 
    FaNode, FaReact, FaVuejs, FaBootstrap, 
    FaAngular, FaWordpress, FaDailymotion,
    FaGitAlt, FaGithub, FaFigma, FaHtml5,
    FaNeos, FaSass, FaLess, FaDocker
} from "react-icons/fa";
import { 
    SiCplusplus, SiPhp, SiTypescript, 
    SiNextdotjs, SiVuetify, SiElectron, 
    SiArduino, SiDjango, SiTailwindcss, 
    SiUikit, SiMui, SiSqlite, SiMysql, 
    SiMongodb, SiExpress, SiNuxtdotjs,
    SiAdobe, SiPwa, SiVite
} from "react-icons/si";
import { 
    TbBrandCSharp, TbBrandReactNative, TbBrandThreejs
} from "react-icons/tb";
import { 
    BiLogoJavascript, BiLogoPostgresql 
} from "react-icons/bi";
import { 
    RiSupabaseLine, RiFirebaseFill 
} from "react-icons/ri";
import { DiPhotoshop, DiIllustrator, DiTerminal } from "react-icons/di";

  const iconMap = {
    python: { icon: FaPython, color: "#3776AB" },
    css: { icon: FaCss3Alt, color: "#1572B6" },
    laravel: { icon: FaLaravel, color: "#FF2D20" },
    node: { icon: FaNode, color: "#68A063" },
    react: { icon: FaReact, color: "#61DBFB" },
    vue: { icon: FaVuejs, color: "#41B883" },
    bootstrap: { icon: FaBootstrap, color: "#7952B3" },
    angular: { icon: FaAngular, color: "#DD0031" },
    wordpress: { icon: FaWordpress, color: "#21759B" },
    dailymotion: { icon: FaDailymotion, color: "#0066DC" },
    git: { icon: FaGitAlt, color: "#F05032" },
    github: { icon: FaGithub, color: "#fff" },
    figma: { icon: FaFigma, color: "#F24E1E" },
    html: { icon: FaHtml5, color: "#E34F26" },
    neos: { icon: FaNeos, color: "#00A7E1" },
    sass: { icon: FaSass, color: "#CC6699" },
    less: { icon: FaLess, color: "#1D365D" },
    docker: { icon: FaDocker, color: "#0db7ed" },

    cplusplus: { icon: SiCplusplus, color: "#00599C" },
    php: { icon: SiPhp, color: "#4F5B93" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    nextjs: { icon: SiNextdotjs, color: "#fff" },
    vuetify: { icon: SiVuetify, color: "#1867C0" },
    electron: { icon: SiElectron, color: "#47848F" },
    arduino: { icon: SiArduino, color: "#00979D" },
    django: { icon: SiDjango, color: "#092E20" },
    tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
    uikit: { icon: SiUikit, color: "#2396F3" },
    mui: { icon: SiMui, color: "#007FFF" },
    sqlite: { icon: SiSqlite, color: "#003B57" },
    mysql: { icon: SiMysql, color: "#4479A1" },
    mongodb: { icon: SiMongodb, color: "#47A248" },
    express: { icon: SiExpress, color: "#fff" },
    nuxt: { icon: SiNuxtdotjs, color: "#00DC82" },
    adobe: { icon: SiAdobe, color: "#FF0000" },
    pwa: { icon: SiPwa, color: "#5A0FC8" },
    vite: { icon: SiVite, color: "#646CFF" },

    csharp: { icon: TbBrandCSharp, color: "#682876" },
    reactnative: { icon: TbBrandReactNative, color: "#61DBFB" },
    threejs: { icon: TbBrandThreejs, color: "#fff" },

    javascript: { icon: BiLogoJavascript, color: "#F7DF1E" },
    postgresql: { icon: BiLogoPostgresql, color: "#336791" },

    supabase: { icon: RiSupabaseLine, color: "#3ECF8E" },
    firebase: { icon: RiFirebaseFill, color: "#FFCA28" },

    photoshop: { icon: DiPhotoshop, color: "#31A8FF" },
    illustrator: { icon: DiIllustrator, color: "#FF9A00" },
    terminal: { icon: DiTerminal, color: "#fff" }
  };
  const stacks = Object.keys(iconMap);

export function Frameworks() {
  return (
    <div className="relative flex h-[2rem] w-full flex-col items-center justify-center">
      
      {/* Círculo maior */}
      <OrbitingCircles iconSize={30}>
        {stacks.map((key, index) => {
          const { icon: Icon, color } = iconMap[key];
          return <Icon key={index} size={30} color={color} />;
        })}
      </OrbitingCircles>

      {/* Círculo interno */}
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {stacks.map((key, index) => {
          const { icon: Icon, color } = iconMap[key];
          return <Icon key={index} size={30} color={color} />;
        })}
      </OrbitingCircles>
    </div>
  );
}

