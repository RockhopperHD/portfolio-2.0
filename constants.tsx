
import React from 'react';
import { PortfolioItem, SoftwareSkill, WorkItem, ClipboardContent } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'smile-learn',
    icon: '🦭',
    title: 'S&L Intern',
    category: ['ai-research', 'teaching-mentorship'],
    content: {
      heading: 'Smile & Learn, AINARA Internship',
      description: "During my internship in Madrid, Spain, I dove into educational technology. I personally created a new personality for AINARA's AI chatbot, focusing on an educational tone. I also developed a tool allowing educators to create games using AI, modify them with auto-generated parameters in a customizable template system, and presented my progress directly to the CEO.",
      pills: ['AI in Education', 'Chatbot Design', 'Tool Development', 'International Experience'],
    },
  },
  {
    id: 'instructional-tech-intern',
    icon: '💡',
    title: 'IT Intern',
    category: ['ai-research', 'teaching-mentorship'],
    content: {
      heading: 'Instructional Technology Intern',
      description: "As a full-time Instructional Technology Intern at Marist University, I created over 8 resources to help faculty and students understand and responsibly use artificial intelligence. A key project involved contacting, coordinating, interviewing, and editing video of 8 faculty members about their use of generative AI, creating a valuable campus resource.",
      pills: ['AI in Education', 'Resource Development', 'Video Production', 'Faculty Support'],
    },
  },
  {
    id: 'ai-research-combo',
    icon: '🔬',
    title: 'AI Research',
    category: ['ai-research'],
    content: {
      heading: 'AI Research (INTED & CURSCA)',
      description: "I presented original research on AI's role in education at two major conferences. For INTED 2025 in Valencia, Spain, I co-authored a paper on AI and student note-taking and presented to an international audience of over 30 academics. For CURSCA 2025, I presented a poster detailing our findings, adapting the content for a different format and audience.",
      pills: ['Academic Research', 'AI', 'Public Speaking', 'International Conferences'],
    },
  },
  {
    id: 'ai-summit',
    icon: '⛰️',
    title: 'AI Summit',
    category: ['ai-research'],
    content: {
      heading: 'Hudson Valley AI Summit',
      description: 'At the Hudson Valley AI Summit, I presented a poster on my AI research and took an active role in facilitating a breakout discussion with Marist University faculty. This experience allowed me to share my work and engage in high-level conversations about the future of AI in our region.',
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
      description: "As a student representative, I collaborate with faculty to develop a comprehensive AI framework at Marist. My role involves contributing to an internal and external presence, creating and editing documentation, and helping guide the university's strategy for responsible and innovative AI integration.",
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
      description: 'As a substitute teaching assistant, I assisted full-time teachers in instructing neurodivergent students during full, 6-hour instructional days. This role required adaptability, patience, and a commitment to supporting diverse learning needs in a classroom setting.',
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
    id: 'aloud-game',
    icon: '🎮',
    title: 'ALOUD Game',
    category: ['teaching-mentorship', 'ai-research'],
    content: {
      heading: 'ALOUD Language Learning Game',
      description: "I single-handedly developed and presented a language-learning video game for K-12 teachers at the ALOUD conference. The game, which features 2 modes and 4 languages, is designed to be an engaging tool for students to practice vocabulary and grammar. It demonstrates an innovative application of technology in language education.",
      pills: ['Game Development', 'EdTech', 'Spanish', 'Creative Projects'],
    },
  },
  {
    id: 'marist-circle',
    icon: '📰',
    title: 'Marist Circle',
    category: ['leadership-communication'],
    content: {
      heading: 'The Marist Circle - Editor & Writer',
      description: (
        <>
          As Co-Features Editor and Staff Writer for the university newspaper, I have a total authorship of over 15 articles. My roles involved editing up to 3 articles per issue, mentoring other writers, and pitching stories. This experience honed my writing, editing, and leadership skills within a fast-paced journalistic environment. You can view my work <a href="https://www.maristcircle.com/search?q=Owen%20Whelan" className="text-[#8ab4f8] hover:text-[#a7c5f9] underline" target="_blank" rel="noopener noreferrer">here</a>.
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
      description: "As a Subcommittee Leader, I am responsible for coordinating and helping new students integrate into gaming groups. This leadership role involves managing an online community of over 100 members, organizing events, and fostering an inclusive environment for all members.",
      pills: ['Leadership', 'Community Management', 'Event Planning', 'Team Building'],
    },
  },
];

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    name: 'Gen AI (ChatGPT · Gemini · Hugging Face)',
    title: 'Gen AI',
    description: "Here’s the big one! I’m minoring in AI and have done published research on its effects in education. I use it to its best ability — for example, almost all of the code on this website — and have a lot of ideas for creative implementations. I’ve educated a lot of people on how AI works, how to make it work for them, and where the technology is going. I believe firmly in how I’m using the technology consciously and efficiently, both for making my own work smoother and for helping others.",
  },
  {
    name: 'Microsoft Office (Word · Excel · PowerPoint)',
    title: 'Microsoft Office',
    description: "It’s a classic skill to have, but I’ve worked with it a lot in my IT intern job and just general time at Marist. Not only can I do the basics, I can format things in ways that are visually attractive and use these tools to their maximum ability. That means colors in Word, formulas in Excel, and attractive theming in PowerPoint.",
  },
  {
    name: 'Google Workspace (Docs · Sheets · Slides · Drive)',
    title: 'Google Workspace',
    description: "Google Workspace has really awesome collaboration tools and I know how to make the most of them. I can format things to work consistently — like editing themes, not just individual slides — and make documents/slideshows interactive. I really enjoy making my documents look good while also being accessible and clear to all users.",
  },
  {
    name: 'Video Editing (Vegas Movie Studio)',
    title: 'Video Editing',
    description: "Through passion projects and formal work, I’ve learned a lot about using Vegas to make clear, attractive videos for informative and entertainment purposes. I can gather my own materials and assets and put them together logically and in ways that stand out. I can also use other basic video editing software, like the one built into Canva and iMovie.",
  },
  {
    name: 'Graphic Design (Canva · Adobe)',
    title: 'Graphic Design',
    description: "I’ve used Canva in class and in jobs to make infographics, informational documents, and posts. I’ve posted my Canva material to LinkedIn before and have a unique style. I take extreme care to ensure elements are clear, aligned, and logical for that professional yet fun look. These graphic design skills extend into choices I’ve made in Adobe products, Google products, and this website!",
  },
  {
    name: 'LMS (D2L Brightspace)',
    title: 'LMS',
    description: "I have significant knowledge of both ends of Brightspace, a learning management system. I can not only use it efficiently as a student, but during my time as an IT intern I learned how to operate the educator side of things. I’ve made Brightspace units that are visually attractive while also clear and concise — specifically, I used AI to make HTML pages that stand out from the default.",
  },
];

export const MY_WORK_ITEMS: WorkItem[] = [
  { type: 'project', year: '2025', category: 'Research', icon: 'fas fa-file-alt', title: 'AI, Note-Taking', desc: 'Published and presented research analyzing the AI landscape and its impact on student note-taking, proposing the GAIN framework.', clipboardId: 'clipboard-project-inted' },
  { type: 'project', year: '2025', category: 'Development', icon: 'fas fa-gamepad', title: 'ALOUD Game', desc: 'Created and presented an interactive language-learning video game to grade-school teachers at the ALOUD conference.', clipboardId: 'clipboard-project-aloud' },
  { type: 'project', year: '2024', category: 'Leadership', icon: 'fas fa-cogs', title: 'Marist+AI Group', desc: 'Student representative in the Marist+AI working group, guiding AI integration and policy at the university.', clipboardId: 'clipboard-project-marist-ai' },
  { type: 'project', year: '2025', category: 'Writing', icon: 'fas fa-newspaper', title: 'The Marist Circle', desc: 'Editor and writer for my school\'s newspaper. View my work here.', clipboardId: 'clipboard-extra-marist-circle' },
  { type: 'extra', year: '2024', category: 'Honor Society', icon: 'fas fa-award', title: 'Sigma Delta Pi', desc: 'Inducted into the National Collegiate Hispanic Honor Society for dedication to Spanish language and culture.', clipboardId: 'clipboard-extra-sigma-delta-pi' },
  { type: 'extra', year: '1', displayYear: '4x', category: 'Award', icon: 'fas fa-star', title: 'Dean\'s List', desc: 'Recognized for academic excellence, receiving Dean\'s List honors multiple times.', clipboardId: 'clipboard-extra-deans-list' },
  { type: 'extra', year: '2023', category: 'Award', icon: 'fas fa-certificate', title: 'NYS Seal of Biliteracy', desc: 'Awarded for demonstrated proficiency in Spanish (speaking, listening, reading, writing).', clipboardId: 'clipboard-extra-seal-biliteracy' },
  { type: 'extra', year: '2022', category: 'Honor Society', icon: 'fas fa-shield-alt', title: 'National Honor Society', desc: 'Inducted for dedication to academics and service in high school.', clipboardId: 'clipboard-extra-nhs' },
  { type: 'extra', year: '2025', category: 'Publication', icon: 'fas fa-feather-alt', title: 'Marist Mosaic', desc: 'Poetry published in the Marist University literary arts journal.', clipboardId: 'clipboard-extra-mosaic' }
];

export const CLIPBOARD_CONTENTS: ClipboardContent[] = [
  { id: "clipboard-project-inted", content: (<><h4>Research Paper... (INTED 2025)</h4><p>I worked closely with two professors and a fellow student to create a research paper that analyzed the AI landscape and how it shapes student note-taking. My presentation went over the tools that existed, but also mentioned how educators and students can evaluate and be aware of these tools. The details on its publishing are available <a href="https://library.iated.org/view/WHELAN2025OPT?re=downloadnotallowed" className="text-[#8ab4f8] underline hover:text-[#a7c5f9]" target="_blank" rel="noopener noreferrer">here</a>, including the abstract.</p></>) },
  { id: "clipboard-project-aloud", content: (<><h4>ALOUD Language Learning Game...</h4><p>I made a game titled Partybusters! (in Spanish, ¡Guardafiesta!) in which players manage a birthday party. They admit "partygoers" by reading a list of ever-more complicated rules. The game's focus is on language acquisition as a game for reviewing vocabulary and grammar concepts. It's infinitely expandable using AI. I demoed the game to teachers at Marist University's ALOUD conference in 2025.</p></>) },
  { id: "clipboard-project-marist-ai", content: (<><h4>Marist+AI Academic Working Group Details</h4><p>As a student representative in the Marist + AI working group, I've helped faculty and students learn more about AI technology as well as guide them to use it effectively, with an ultimate goal of achieving a community at Marist that integrates AI in a responsible, useful way. I've also collaborated with faculty to develop an AI framework at Marist and created, edited, and commented on multiple pieces of documentation and framework material. I'm still contributing my knowledge to Marist's AI progress while I'm in university.</p></>) },
  { id: "clipboard-extra-marist-circle", content: (<><h4>Journalistic Skills & Marist Circle Contributions</h4> <p>This is the newspaper club at Marist University. You can view my work <a href="https://www.maristcircle.com/search?q=Owen%20Whelan" className="text-[#8ab4f8] underline hover:text-[#a7c5f9]" target="_blank" rel="noopener noreferrer">here</a>. All of my articles are on topics that I found interesting, or just general happenings on campus. I pride myself in variety and quality writing. I published as much as two articles an issue while still keeping interesting topics at the center. As an editor, I took great care in not only polishing work of my fellow writers but mentoring others and ensuring long-term change and improvement.</p></>) },
  { id: "clipboard-extra-sigma-delta-pi", content: (<><h4>Sigma Delta Pi</h4><p>Inducted October 2024. This is the National Honors Society for Spanish on the college level. I also received it in high school. Being a member of ΣΔΠ shows a dedication to values that make up a good student as well as someone who is knowledgeable of Spanish and Spanish-speaking cultures.</p></>) },
  { id: "clipboard-extra-deans-list", content: (<><h4>Marist University Dean's List Details</h4><p>Currently on a perfect streak! I received the Dean’s List from Marist University in both the 2023-24 and 2024-25 years, representing my dedication to academics.</p></>) },
  { id: "clipboard-extra-seal-biliteracy", content: (<><h4>New York State Seal of Biliteracy (Spanish) Details</h4><p>Completed May 2022, awarded June 2023. Through Nanuet Senior High School, I completed the requirements for the New York State Seal of Biliteracy in 2022 and was awarded it upon my graduation in 2023. It demonstrates my proficiency in Spanish through speaking, listening, reading, and writing. My focus for the project was on technology and how it affects language and translation as a whole. When doing my project, my theme was on computer-assisted use of different languages with technologies like Google Lens and Google Translate.</p></>) },
  { id: "clipboard-extra-nhs", content: (<><h4>National Honor Society Details</h4><p>Inducted 2022. Encompassing my dedication to academics and service in high school, I became a member of the National Honors Society in 2022. You can learn about the National Honors Society from <a href="#" className="text-[#8ab4f8] underline hover:text-[#a7c5f9]">their website</a>.</p></>) },
  { id: "clipboard-extra-mosaic", content: (<><h4>Marist Mosaic Poem Details</h4><p>I got published in Marist Univeristy's Mosaic magazine in 2025.</p></>) }
];
