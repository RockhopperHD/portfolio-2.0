
import React from 'react';
import { PortfolioItem, SoftwareSkill, WorkItem, ClipboardContent } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'instructional-tech-intern',
    icon: '💡',
    title: 'IT Intern',
    category: ['ai-research', 'teaching-mentorship'],
    content: {
      heading: 'Digital Education: AI Information Creator & Consultant',
      description: "For Marist University's faculty and students, I created more than eight resources on responsible, efficient AI use. I also coordinated interviews and completed end-to-end production for eight faculty videos about generative AI.",
      pills: ['AI in Education', 'Resource Development', 'Video Production', 'Faculty Support'],
    },
  },
  {
    id: 'smile-learn',
    icon: '🦭',
    title: 'S&L Intern',
    category: ['ai-research', 'teaching-mentorship'],
    content: {
      heading: 'Smile and Learn, AINARA Internship',
      description: "During my internship in Madrid, Spain, I built an education-focused personality for AINARA's AI chatbot and developed a customizable game-creation tool for educators. I presented the working prototype directly to the CEO and revised it to company standards.",
      pills: ['AI in Education', 'Chatbot Design', 'Tool Development', 'International Experience'],
    },
  },
  {
    id: 'ai-research-combo',
    icon: '🔬',
    title: 'AI Research',
    category: ['ai-research'],
    content: {
      heading: 'AI Research (INTED & CURSCA)',
      description: (
        <>
          I co-authored research on AI and student note-taking, presented it to an international audience of more than 30 academics at INTED 2025, and adapted the findings into a CURSCA poster. View the <a href="https://library.iated.org/view/WHELAN2025OPT?re=downloadnotallowed" className="text-[#8ab4f8] hover:text-[#a7c5f9] underline" target="_blank" rel="noopener noreferrer">published paper record and abstract</a>.
        </>
      ),
      pills: ['Academic Research', 'AI', 'Public Speaking', 'International Conferences'],
    },
  },
  {
    id: 'aloud-game',
    icon: '🎮',
    title: 'ALOUD Game',
    category: ['teaching-mentorship', 'ai-research'],
    content: {
      heading: 'ALOUD Language Learning Game',
      description: "I developed and presented a language-learning video game for K-12 teachers at the ALOUD conference. With two modes and four languages, the game gives students a structured way to practice vocabulary and grammar.",
      pills: ['Game Development', 'EdTech', 'Spanish', 'Creative Projects'],
    },
  },
  {
    id: 'ai-summit',
    icon: '⛰️',
    title: 'AI Summit',
    category: ['ai-research'],
    content: {
      heading: 'Hudson Valley AI Summit',
      description: 'At the Hudson Valley AI Summit, I presented a research poster and facilitated a breakout discussion with Marist University faculty about AI in the region.',
      pills: ['Public Speaking', 'AI Research', 'Facilitation', 'Community Engagement'],
    },
  },
  {
    id: 'marist-ai-group',
    icon: '👥',
    title: 'Marist+AI',
    category: ['ai-research', 'leadership-communication'],
    content: {
      heading: 'Marist+AI Academic Group',
      description: "As a student representative, I collaborate with faculty on Marist's AI framework, edit supporting documentation, and contribute a student perspective to responsible AI integration.",
      pills: ['AI Ethics', 'Collaboration', 'Policy Development', 'Documentation'],
    },
  },
  {
    id: 'boces-ta',
    icon: '🏫',
    title: 'BOCES TA',
    category: ['teaching-mentorship'],
    content: {
      heading: 'Teaching Assistant (Rockland BOCES)',
      description: 'As a substitute teaching assistant, I coordinated and facilitated full instructional days with teachers supporting neurodivergent students.',
      pills: ['Teaching', 'Special Education', 'Adaptability', 'Classroom Support'],
    },
  },
  {
    id: 'freelance-tutoring',
    icon: '🧑‍🏫',
    title: 'Tutoring',
    category: ['teaching-mentorship'],
    content: {
      heading: 'Freelance Tutoring',
      description: "I offered virtual private tutoring to high school students in Spanish and various sciences. By developing personalized learning plans and using tailored teaching strategies, I helped students achieve significant grade improvements, with some increasing by as much as 30 percentile points.",
      pills: ['Tutoring', 'Mentorship', 'Spanish', 'Personalized Learning'],
    },
  },
  {
    id: 'marist-circle',
    icon: '📰',
    title: 'Marist Circle',
    category: ['leadership-communication'],
    content: {
      heading: <><em>The Marist Circle</em> - Editor-in-Chief & Writer</>,
      description: (
        <>
          I progressed from Staff Writer to Co-Features Editor to Editor-in-Chief, with 30 solo and co-bylined articles. My work includes pitching stories, editing up to three articles per issue, and mentoring junior writers. View my <a href="https://www.maristcircle.com/search?q=Owen%20Whelan" className="text-[#8ab4f8] hover:text-[#a7c5f9] underline" target="_blank" rel="noopener noreferrer"><em>Marist Circle</em> bylines</a>.
        </>
      ),
      pills: ['Writing', 'Editing', 'Leadership', 'Journalism', 'Communication'],
    },
  },
  {
    id: 'games-society',
    icon: '🎲',
    title: 'Games Society',
    category: ['leadership-communication'],
    content: {
      heading: 'Games Society Leadership',
      description: "As a Subcommittee Leader, I help new students join gaming groups, organize events, and support an online community of more than 100 members.",
      pills: ['Leadership', 'Community Management', 'Event Planning', 'Team Building'],
    },
  },
];

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    name: 'Generative AI',
    title: 'Generative AI',
    subtitle: 'ChatGPT, Codex, Hugging Face, Google AI Studio',
    description: "Applied AI minor with published education research and experience using ChatGPT, Codex, Hugging Face, and Google AI Studio. I have created responsible-use resources for faculty and students, facilitated AI literacy workshops, and built AI-supported learning tools with human review.",
  },
  {
    name: 'EdTech & Software Dev',
    title: 'EdTech & Software Dev',
    subtitle: 'Codex, Antigravity, Prototyping, Deployment, Git',
    description: "Built and deployed browser-based learning tools for personal projects and an EdTech internship, using prototyping workflows, Git, Codex, and Antigravity. I use Codex to create, manage, revise, and deploy code while keeping the learning goals, content decisions, and final review grounded in my own instructional design judgment. Work includes a customizable game creator, CEFR-alignment tools, and the ongoing Flashcardsish study app.",
  },
  {
    name: 'Productivity',
    title: 'Productivity',
    subtitle: 'Microsoft & Google Suites, Notion',
    description: "Used Microsoft 365, Google Workspace, and Notion to coordinate faculty interviews, structure resources, collaborate on documentation, and produce accessible materials with clear navigation and formatting.",
  },
  {
    name: 'Video Editing',
    title: 'Video Editing',
    subtitle: 'Vegas, Canva',
    description: "Produced eight faculty videos about generative AI from coordination and interviewing through editing and delivery. I use Vegas and Canva to combine recorded and sourced material into clear informational video.",
  },
  {
    name: 'Graphic Design & UX',
    title: 'Graphic Design & UX',
    subtitle: 'Canva, Affinity, GitHub, HTML',
    description: "Used Canva and Affinity for infographics, instructional documents, and professional posts, and HTML, GitHub, and visual systems for interactive resources. UX work includes faculty AI materials, Smile & Learn tools, and the full-stack Flashcardsish app.",
  },
  {
    name: 'LMS',
    title: 'LMS',
    subtitle: 'D2L Brightspace',
    description: "Used D2L Brightspace from both student and educator perspectives while working with Digital Education. I built clear course units and HTML pages designed to improve structure, readability, and navigation.",
  },
];

export const MY_WORK_ITEMS: WorkItem[] = [
  { type: 'project', year: '2026', season: 'Summer', timelineOrder: 20263, category: 'Professional Experience', icon: 'fas fa-chalkboard-teacher', title: 'Pre-College Teaching Assistant: AI Literacy', desc: 'Led AI literacy lessons, supported classroom management, and facilitated hands-on workshops for Marist University’s pre-college students.', clipboardId: 'clipboard-work-precollege' },
  { type: 'project', year: '2026', season: 'Summer', timelineOrder: 20263, category: 'Professional Experience', icon: 'fas fa-lightbulb', title: 'Digital Education: AI Information Creator & Consultant', desc: 'Created responsible-AI resources for faculty and students, produced faculty interview videos, and supported university software cataloging.', clipboardId: 'clipboard-work-digital-education' },
  { type: 'project', year: '2026', season: 'Summer', timelineOrder: 20263, category: 'Editorial Leadership', icon: 'fas fa-newspaper', title: 'The Marist Circle: Editor-in-Chief', desc: 'Advanced to Editor-in-Chief after writing 30 solo and co-bylined articles, editing up to three articles per issue, and mentoring junior writers.', timelineId: 'circle-editor-in-chief', progression: ['Staff Writer', 'Co-Features Editor', 'Editor-in-Chief'], clipboardId: 'clipboard-extra-marist-circle' },
  { type: 'extra', year: '2026', season: 'Spring', timelineOrder: 20262, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Spring 2026 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'project', year: '2026', season: 'Spring', timelineOrder: 20262, category: 'Professional Experience', icon: 'fas fa-lightbulb', title: 'Digital Education: AI Information Creator & Consultant', desc: 'Continued part-time work producing responsible-AI guidance for Marist faculty and students.', clipboardId: 'clipboard-work-digital-education' },
  { type: 'project', year: '2025', season: 'Fall', timelineOrder: 20254, category: 'Professional Experience', icon: 'fas fa-laptop-code', title: 'Smile & Learn Intern', desc: 'Built CEFR-aligned AI tools and a game creator, shaped an education-focused chatbot personality, and designed Pre-A1 to B2 Spanish curriculum in Madrid.', clipboardId: 'clipboard-work-smile-learn' },
  { type: 'extra', year: '2025', season: 'Fall', timelineOrder: 20254, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Fall 2025 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'project', year: '2025', season: 'Throughout', timelineOrder: 20251, category: 'Professional Experience', icon: 'fas fa-school', title: 'Rockland BOCES Substitute Teaching Assistant', desc: 'Coordinated and facilitated full-day lessons with teachers supporting neurodivergent students.', clipboardId: 'clipboard-work-boces' },
  { type: 'project', year: '2025', season: 'Summer', timelineOrder: 20253, category: 'Professional Experience', icon: 'fas fa-lightbulb', title: 'Digital Education: AI Information Creator & Consultant', desc: 'Began full-time work creating responsible-AI resources and producing faculty video features.', clipboardId: 'clipboard-work-digital-education' },
  { type: 'project', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Research & Presentation', icon: 'fas fa-file-alt', title: 'AI, Note-Taking', desc: 'Published and presented research analyzing the AI landscape and its impact on student note-taking, proposing the GAIN framework.', clipboardId: 'clipboard-project-inted' },
  { type: 'extra', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Spring 2025 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'project', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Editorial Leadership', icon: 'fas fa-pen-nib', title: 'The Marist Circle: Co-Features Editor', desc: 'Moved into an editorial role, editing articles, coordinating assignments, and continuing to report and write.', timelineId: 'circle-co-features-editor', progression: ['Staff Writer', 'Co-Features Editor', 'Editor-in-Chief'], clipboardId: 'clipboard-extra-marist-circle' },
  { type: 'project', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Learning Design Project', icon: 'fas fa-gamepad', title: 'ALOUD Game', desc: 'Built and presented an interactive language-learning video game for K-12 teachers at the ALOUD conference.', clipboardId: 'clipboard-project-aloud' },
  { type: 'project', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Research & Presentation', icon: 'fas fa-microphone-lines', title: 'CURSCA & Hudson Valley AI Summit', desc: 'Presented poster research to students and faculty and facilitated an AI-focused discussion.', clipboardId: 'clipboard-project-inted' },
  { type: 'extra', year: '2025', season: 'Spring', timelineOrder: 20252, category: 'Creative Publication', icon: 'fas fa-feather-alt', title: 'Marist Mosaic', desc: 'Published poetry in Marist University’s literary arts journal.', clipboardId: 'clipboard-extra-mosaic' },
  { type: 'extra', year: '2024', season: 'Fall', timelineOrder: 20244, category: 'Education', icon: 'fas fa-award', title: 'Sigma Delta Pi', desc: 'Inducted into the National Collegiate Hispanic Honor Society for Spanish language and culture.', clipboardId: 'clipboard-extra-sigma-delta-pi' },
  { type: 'extra', year: '2024', season: 'Fall', timelineOrder: 20244, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Fall 2024 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'project', year: '2024', season: 'Fall', timelineOrder: 20244, category: 'Research & Presentation', icon: 'fas fa-cogs', title: 'Marist+AI Group', desc: 'Student representative in the Marist+AI working group, guiding AI integration and policy at the university.', clipboardId: 'clipboard-project-marist-ai' },
  { type: 'extra', year: '2024', season: 'Spring', timelineOrder: 20242, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Spring 2024 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'extra', year: '2023', season: 'Spring', timelineOrder: 20232, category: 'Academic Recognition', icon: 'fas fa-certificate', title: 'NYS Seal of Biliteracy', desc: 'Awarded for demonstrated Spanish proficiency in speaking, listening, reading, and writing.', clipboardId: 'clipboard-extra-seal-biliteracy' },
  { type: 'project', year: '2023', season: 'Spring', timelineOrder: 20232, category: 'Education', icon: 'fas fa-school', title: 'Nanuet Senior High School Graduation', desc: 'Graduated from Nanuet Senior High School.', clipboardId: 'clipboard-education-nanuet' },
  { type: 'project', year: '2023', season: 'Fall', timelineOrder: 20234, category: 'Education', icon: 'fas fa-graduation-cap', title: 'Marist University Honors Student', desc: 'Began a B.A. in Adolescent Education & Spanish with an Applied AI minor; expected graduation Spring 2027.', clipboardId: 'clipboard-education-marist' },
  { type: 'project', year: '2023', season: 'Fall', timelineOrder: 20234, category: 'Editorial Leadership', icon: 'fas fa-pencil', title: 'The Marist Circle: Staff Writer', desc: 'Joined the student newspaper, pitching stories, coordinating assignments, writing articles, and supporting campus distribution.', timelineId: 'circle-staff-writer', progression: ['Staff Writer', 'Co-Features Editor', 'Editor-in-Chief'], clipboardId: 'clipboard-extra-marist-circle' },
  { type: 'extra', year: '2023', season: 'Fall', timelineOrder: 20234, category: 'Academic Recognition', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Named to the Dean’s List for the Fall 2023 term.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'extra', year: '2022', season: 'Spring', timelineOrder: 20222, category: 'Academic Honor', icon: 'fas fa-shield-alt', title: 'National Honor Society', desc: 'Inducted for academics and service in high school.', clipboardId: 'clipboard-extra-nhs' }
];

export const CLIPBOARD_CONTENTS: ClipboardContent[] = [
  { id: "clipboard-work-precollege", content: (<><h4>Marist University Summer Pre-College Teaching Assistant</h4><p>During the Summer 2026 CMPT110L AI Literacy session, I directed lessons and assisted with classroom management on artificial intelligence literacy. I also facilitated multiple interactive, hands-on workshops for pre-college students.</p></>) },
  { id: "clipboard-work-digital-education", content: (<><h4>Marist University Digital Education</h4><p>As an AI Information Creator & Consultant, I created 8+ resources for faculty and students on responsible, efficient AI use. I also coordinated interviews and completed end-to-end production for eight faculty videos about generative AI, while supporting university software cataloging.</p></>) },
  { id: "clipboard-work-smile-learn", content: (<><h4>Smile and Learn AI & BeBilingual Internship</h4><p>During my Fall 2025 internship in Madrid, I deployed AI tools to streamline content, including a game engine and four or more tools aligning lessons to CEFR standards and American/Spanish guidelines. I engineered AINARA’s education-focused, coding-capable personality and designed Pre-A1 to B2 Spanish curriculum with targeted learning strategies.</p></>) },
  { id: "clipboard-work-boces", content: (<><h4>Rockland BOCES Substitute Teaching Assistant</h4><p>In this 2025 contract role, I directly coordinated and facilitated lessons with teachers for neurodivergent students during full-day sessions.</p></>) },
  { id: "clipboard-education-marist", content: (<><h4>Marist University Honors Student</h4><p>I am pursuing a B.A. in Adolescent Education & Spanish, with a minor in Applied AI, and a 3.9 GPA. During Fall 2025, I studied abroad at Universidad Carlos III de Madrid, completing coursework and my internship in Spanish with a 9.56/10 average.</p></>) },
  { id: "clipboard-education-nanuet", content: (<><h4>Nanuet Senior High School Graduation</h4><p>I graduated from Nanuet Senior High School in 2023, beginning the next chapter of my education at Marist University that fall.</p></>) },
  { id: "clipboard-project-inted", content: (<><h4>Research Paper (INTED 2025)</h4><p>Working with two professors and a fellow student, I co-authored research on the AI landscape and student note-taking. We addressed both available tools and how educators and students can evaluate them. View the <a href="https://library.iated.org/view/WHELAN2025OPT?re=downloadnotallowed" className="text-[#8ab4f8] underline hover:text-[#a7c5f9]" target="_blank" rel="noopener noreferrer">published paper record and abstract</a>.</p></>) },
  { id: "clipboard-project-aloud", content: (<><h4>ALOUD Language Learning Game</h4><p>I built Partybusters! (¡Guardafiesta! in Spanish), a language-learning game in which players manage a birthday party by reading increasingly complex admission rules. The activity reviews vocabulary and grammar, can be expanded with AI, and was demonstrated to teachers at Marist University's 2025 ALOUD conference.</p></>) },
  { id: "clipboard-project-smile-learn", content: (<><h4>Smile and Learn Game Creator</h4><p>During my Madrid internship, I built an HTML game-development studio in which educators use natural language to create games and receive suggested edits and fixes. I presented the functioning prototype and revised it to the company's standards.</p></>) },
  { id: "clipboard-project-marist-ai", content: (<><h4>Marist+AI Academic Working Group</h4><p>As a student representative, I collaborated with faculty on Marist's AI framework and created, edited, and reviewed supporting documentation. I contributed a student perspective to the university's work on responsible, useful AI integration.</p></>) },
  { id: "clipboard-extra-marist-circle", content: (<><h4><em>Marist Circle</em> Writing & Editorial Leadership</h4><p>I became Editor-in-Chief in May 2026 after serving as Co-Features Editor and Staff Writer. Across 30 solo and co-bylined articles, I have pitched and reported stories while editing up to three articles per issue and mentoring junior writers. View my <a href="https://www.maristcircle.com/search?q=Owen%20Whelan" className="text-[#8ab4f8] underline hover:text-[#a7c5f9]" target="_blank" rel="noopener noreferrer"><em>Marist Circle</em> bylines</a>.</p></>) },
  { id: "clipboard-extra-sigma-delta-pi", content: (<><h4>Sigma Delta Pi</h4><p>Inducted in October 2024 into the National Collegiate Hispanic Honor Society, recognizing commitment to Spanish language and Spanish-speaking cultures.</p></>) },
  { id: "clipboard-extra-deans-list", content: (<><h4>Marist University Dean's List</h4><p>Named to the Dean's List across six terms from Fall 2023 through Spring 2026.</p></>) },
  { id: "clipboard-extra-seal-biliteracy", content: (<><h4>New York State Seal of Biliteracy (Spanish) Details</h4><p>Completed May 2022, awarded June 2023. Through Nanuet Senior High School, I completed the requirements for the New York State Seal of Biliteracy in 2022 and was awarded it upon my graduation in 2023. It demonstrates my proficiency in Spanish through speaking, listening, reading, and writing. My focus for the project was on technology and how it affects language and translation as a whole. When doing my project, my theme was on computer-assisted use of different languages with technologies like Google Lens and Google Translate.</p></>) },
  { id: "clipboard-extra-nhs", content: (<><h4>National Honor Society</h4><p>Inducted in 2022 in recognition of academics and service during high school.</p></>) },
  { id: "clipboard-extra-mosaic", content: (<><h4>Marist Mosaic Publication</h4><p>Published poetry in Marist University's Mosaic literary arts journal in 2025.</p></>) }
];
