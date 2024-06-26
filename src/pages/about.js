import React from 'react';
import { Head, Section, Education, Experience, Info, Skills } from '@/sections';


const About = () => {

    const sections = [{ id: "about-section-1", children: <Info /> }, { id: "about-section-2", children: <Skills /> }, { id: "about-section-3", children: <Experience /> }, { id: "about-section-4", children: <Education /> }];

    return (
        <>
            <Head
                title="About Aditya Nitin Burse - Full Stack Developer"
                description="Discover the journey and expertise of Aditya Nitin Burse, a passionate developer specializing in React, Next.js, Node.js, and more. Learn about his experience, skills, and dedication to crafting innovative web solutions and seamless user experiences."
                robots="index, follow"
                canonical="/about/"
                keywords="About Aditya Burse, Full Stack Developer Profile, Web Developer Background, React Developer, Next.js Developer, Professional Journey, Developer Experience, Aditya Burse, Aditya Jain, Aditya, Jain, Burse, Aditya Nitin Burse, Aditya Nitin, Aditya Nitin Jain, Aditya Nitin Bures (Jain), Software Developer"
            />
            {
                sections.map((section) => (
                    <Section key={section.id} id={section.id}>
                        {section.children}
                    </Section>
                ))
            }
        </>
    );
};

export default About;
