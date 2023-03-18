import React from 'react'
import { Heading, GridSection } from 'components'

import { TbBrandVscode } from 'react-icons/tb'
import { SiVisualstudio, SiPostman, SiNotion, SiSlack, SiDiscord, SiGooglechrome, SiGooglecalendar } from 'react-icons/si'
import { BsTerminalFill, BsGithub } from 'react-icons/bs'
import { CgFigma, CgGoogleTasks } from 'react-icons/cg'

const tools = [{
    id: 1,
    text: "VSCode",
    icon: TbBrandVscode
}, {
    id: 2,
    text: "VisualStudio",
    icon: SiVisualstudio
}, {
    id: 3,
    text: "WindowsTerminal",
    icon: BsTerminalFill
}, {
    id: 4,
    text: "Github",
    icon: BsGithub
}, {
    id: 5,
    text: "Postman",
    icon: SiPostman
}, {
    id: 6,
    text: "Figma",
    icon: CgFigma
}, {
    id: 7,
    text: "Notion",
    icon: SiNotion
}, {
    id: 8,
    text: "Slack",
    icon: SiSlack
}, {
    id: 9,
    text: "Discord",
    icon: SiDiscord
}, {
    id: 10,
    text: "Chrome",
    icon: SiGooglechrome
}, {
    id: 11,
    text: "Calender",
    icon: SiGooglecalendar
}, {
    id: 12,
    text: "Tasks",
    icon: CgGoogleTasks
}]


// Design 
// Figma, Fig Jam , Mockups
// Font-end 
// React, NextJS, Typescript, 
// CSS framework
// 1. TailwindCSS, Dasiy UI, Material UI, Fluent UI
// State Management Framework
// 1. Redux toolkit, Zudstand, React Query 
// Animation
// 1. Framer Motion
// Backed 
// .Net 

const stack = [{
    id: 1,
    text: "NextJS",
    imageUrl: "/svg/vscode.sv1"
}, {
    id: 2,
    text: "Typescript",
    imageUrl: "/svg/vscode.sv1"
}, {
    id: 3,
    text: "TailwindCSS",
    imageUrl: "/svg/vscode.sv1"
}, {
    id: 4,
    text: "FramerMotion",
    imageUrl: "/svg/vscode.sv1"
}, {
    id: 5,
    text: "Icons8",
    imageUrl: "/svg/vscode.sv1"
}];

const TechStack = () => {
    return (
        <div className='mx-6 md:mx-14 mt-20' >
            <div className='grid gap-4' >
                <Heading className='text-xl md:text-4xl text-center h-min'>
                    Tech Stack
                </Heading>
                <h2 className='text-center text-xs md:text-base'>My go-to stack of apps for designing, coding, managing
                    and everything in between...
                </h2>
            </div >
            <div className='grid gap-10 text-xs md:text-base md:m-14 text-center mt-10'>
                <GridSection title='Tools' className=''>
                    {tools.map(({ id, text, icon }) => (
                        <span key={id}>
                            {
                                React.createElement(icon, {
                                    className: "m-auto w-16 h-16 m-2 p-2 rounded-md transition hover:bg-gray-800 hover:scale-125"
                                })
                            }
                        </span>
                    ))}
                </GridSection>
            </div>
        </div >
    )
}

export default TechStack

TechStack.displayName = "Stack"