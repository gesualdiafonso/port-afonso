import React, { AnchorHTMLAttributes } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


// Crio um mapeamento para o ícone padrao

const ICONS = {
    download: FiDownload,
    linkedin: FaLinkedinIn,
};

// Tipagen dos componentes
export interface BtnHoverProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    /* Acao dos botoes para download, que baixa o cv, LinkedIn para link Externos */
    action: 'download' | 'linkedin';
    /* URL de destino o arquivo (download) */
    href: string;
    /* Texto que for aparecer no hover */
    text: string;
    /* Classe para cor de fundo padrao  */
    bgColorClass?: string;
    /* Classe para a cor de fundo no hover (ex: 'hover:bg-sky-600')  */
    hoverBgColorClass?: string;
    /* Nome do ícone a ser usado (padrão são 'download' ou 'linkedin')  */
    iconName?: keyof typeof ICONS;
    /* Classes CSS adicionais para o botão principal.  */
    className?: string;   
}

const BtnHover: React.FC<BtnHoverProps> = ({
    action,
    href,
    text,
    bgColorClass = 'bg-sky-700', // Crio color default
    hoverBgColorClass = 'hover:bg-sky-600',
    iconName,
    className = '',
    ...rest
}) => {
    // Se define o icone segundo a acao ou o nome
    const defaultIconName = action === 'download' ? 'download' : 'linkedin';
    const IconComponent = ICONS[iconName || defaultIconName] || FiDownload; // Fallback para Download

    // Defino o atributos especificos de link e download
    const linkProps =
        action === 'download'
            ? {
                download: true,
                rel: 'noreferrer',
            } : {
                target: '_blank',
                rel: 'noopener noreferrer'
            };

    // Classe dinamica baseado nas propiedades
    const baseClasses = `group w-12 hover:w-44 ${hoverBgColorClass} h-12 relative ${bgColorClass} rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 ${className}`;
    
    // Classes para o pseudo-elemento
    const beforeClasses = `before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:${bgColorClass} before:${hoverBgColorClass} before:rotate-45`;
    
    return(
        <a href={href}
            className={`${baseClasses} ${beforeClasses}`}
            {...linkProps}
            {...rest}
        >
            <IconComponent className='w-8 h-8 shrink-0 fill-neutral-50' />
            <span className='origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all'>
                {text}
            </span>
        </a>
    );

};

export default BtnHover