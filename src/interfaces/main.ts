export interface skill {
    name: string,
    image: string,
    category: string
}

export interface project {
    name: string,
    image: string,
    techstack: string,
    category: string,
    links: {
        visit: string,
        code: string,
        video: string
    }
}

export interface experience {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    desc: string[]
}

export interface education {
    institute: string,
    degree: string,
    startDate: string,
    endDate: string,
}

export interface main {
    name: string,
    titles: string[],
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

export interface about {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

export interface social {
    name: string,
    icon: string,
    link: string
}

export interface data {
    main: main,
    about: about,
    skills: skill[],
    projects: project[],
    experiences: experience[],
    educations: education[]
    socials: social[]
}

export interface InputProps {
    label: string
}

export interface NumberInputProps {
    value?: string;
    onChange: (value: string) => void
}


// buttons 
export interface ButtonProps {
    className?: string,
    text?: string,
    onClick?: () => void
}

// services 
export interface ServiceCardProps {
    image: string,
    title: string,
    text: string
}

// portfolio 
export interface PortfolioProps {
    title: string,
    image: string,
    url: string,
    category: string,
}


// icons 
export interface IconProps{
    src: string,
    className: string
}