// Assumindo que este arquivo também contém o iconMap e as importações de ícones.

// ... Todas as suas importações de react-icons ...
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
    SiAdobe, SiPwa, SiVite, SiPrettier,
    SiStyledcomponents, SiMamp 
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
import { GrTest } from "react-icons/gr";
import { GiQuillInk } from "react-icons/gi";


// O seu iconMap deve ser exportado:
export const iconMap = {
    // Notei que alguns nomes do seu JSON precisam de padronização para bater
    // com as chaves do iconMap. Ex: Next -> nextjs, TypeScript -> typescript, 
    // Tailwindcss -> tailwind, Express -> express.
    python: { icon: FaPython, color: "#3776AB" },
    css: { icon: FaCss3Alt, color: "#1572B6" },
    laravel: { icon: FaLaravel, color: "#FF2D20" },
    node: { icon: FaNode, color: "#68A063" },
    reactjs: { icon: FaReact, color: "#61DBFB" },
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
    prettier: { icon: SiPrettier, color: "#0db7ed" },
    styledcomponent: { icon: SiStyledcomponents, color: "#DB7093"},
    mamp: { icon: SiStyledcomponents, color: "#005E54"},

    cplusplus: { icon: SiCplusplus, color: "#00599C" },
    php: { icon: SiPhp, color: "#4F5B93" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    nextjs: { icon: SiNextdotjs, color: "#fff" }, // Next -> nextjs
    vuetify: { icon: SiVuetify, color: "#1867C0" },
    electron: { icon: SiElectron, color: "#47848F" },
    arduino: { icon: SiArduino, color: "#00979D" },
    django: { icon: SiDjango, color: "#092E20" },
    tailwindcss: { icon: SiTailwindcss, color: "#38B2AC" }, // Tailwindcss -> tailwind
    uikit: { icon: SiUikit, color: "#2396F3" },
    mui: { icon: SiMui, color: "#007FFF" },
    mariadb: { icon: SiSqlite, color: "#003B57" },
    mysql: { icon: SiMysql, color: "#4479A1" },
    mongodb: { icon: SiMongodb, color: "#47A248" },
    express: { icon: SiExpress, color: "#fff" },
    nuxt: { icon: SiNuxtdotjs, color: "#00DC82" },
    adobe: { icon: SiAdobe, color: "#FF0000" },
    pwa: { icon: SiPwa, color: "#5A0FC8" },
    vite: { icon: SiVite, color: "#646CFF" },

    csharp: { icon: TbBrandCSharp, color: "#682876" },
    teactnative: { icon: TbBrandReactNative, color: "#61DBFB" },
    three: { icon: TbBrandThreejs, color: "#fff" },

    javascript: { icon: BiLogoJavascript, color: "#F7DF1E" },
    postgresql: { icon: BiLogoPostgresql, color: "#336791" },

    supabase: { icon: RiSupabaseLine, color: "#3ECF8E" },
    firebase: { icon: RiFirebaseFill, color: "#FFCA28" },

    photoshop: { icon: DiPhotoshop, color: "#31A8FF" },
    illustrato: { icon: DiIllustrator, color: "#FF9A00" },
    terminal: { icon: DiTerminal, color: "#fff" },

    testing: { icon: GrTest, color: "#fff" },
    quilljs: { icon: GiQuillInk, color: "#fff" }
};

/**
 * Normaliza o nome da tecnologia e retorna o ícone e a cor.
 * @param {string} techName O nome da tecnologia do seu JSON (ex: "Next", "TypeScript").
 * @returns {object | null} O objeto de ícone e cor, ou null se não for encontrado.
 */
export function getTechIcon(techName: string) {
    const normalizedName = techName
        .toLowerCase()
        .replace(/\s/g, '') // Remove espaços
        .replace(/css/g, '') // Remove "css" para bater com "tailwind"
        .replace(/next/g, 'nextjs') // Next -> nextjs
        .replace(/typescript/g, 'typescript') // TypeScript -> typescript
        .replace(/tailwind/g, 'tailwindcss') // Tailwindcss -> tailwind
        .replace(/express/g, 'express') // Express -> express
        .replace(/mysql/g, 'mysql')
        .replace(/react/g, 'reactjs')
        .replace(/vuetify/g, 'vuetify')
        .replace(/styledcomponents/g, 'styledcomponent')
        .replace(/figma/g, 'figma'); // Figma -> figma

    // Tenta encontrar a chave normalizada no map. 
    // Ex: "Next" se torna "nextjs", que encontra a entrada.
    const iconData = iconMap[normalizedName];

    if (iconData) {
        return iconData;
    }

    // Caso o mapeamento acima não seja suficiente, tenta uma correspondência direta 
    // (útil para chaves que já estão normalizadas no JSON).
    return iconMap[techName.toLowerCase().replace(/\s/g, '')] || null;
}