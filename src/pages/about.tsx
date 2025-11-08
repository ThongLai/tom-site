import Head from 'next/head';
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me - Tom</title>
        <meta name="description" content="Learn more about my background, skills, and experience" />
      </Head>
      <div className="container py-12 md:py-20">
        <SectionTitle 
          title="About Me" 
          subtitle="My background, skills, and what drives me"
        />
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              Hi there! I'm Vietnamese and an AI enthusiast with a passion for pursuing research in computer intelligence concepts that can solve human problems.
            </p>
            
            <p>
              With some years in the tech industry, I've worked on projects, from building recommendation systems to developing NLP tools for content analysis.
            </p>
            
            <p>
              My approach combines technical expertise with a keen eye for new creative mindsets. I believe that the best AI/data solutions are not just technically sound but also intuitive and explainable to the people who use them.
            </p>
            
            <h3 className="text-2xl font-bold mt-8">What I have been doing</h3>
            
            <p>
              My journey in tech began with a degree in IT & Computer Science, where I developed a strong foundation in algorithms, data structures, and software engineering principles. During my studies, I became fascinated with AI/ML and its potential to transform industries.
            </p>

            <p>
              I graduated in 2025 and I'm now working as a Data Science Intern at <Link href="https://www.awaze.com" target="_blank" className="text-primary hover:underline">Awaze Vacation Rentals LTD</Link> (We operate vacation rental platforms like <Link href="https://cottages.com" target="_blank" className="text-primary hover:underline italic">Cottages</Link>, <Link href="https://www.hoseasons.co.uk" target="_blank" className="text-primary hover:underline italic">Hoseasons</Link>, <Link href="https://www.novasol.co.uk" target="_blank" className="text-primary hover:underline italic">Novasol</Link>, and many more!), where I'm building ML models for property recommendations, abandoned basket optimization for the Marketing and CRM teams.  I'm really enjoying working here (they even have a free delicious coffee bar with a barista 😃). There are lots more exciting projects coming my way as well :)
            </p>
            
            <p>
              During my years at Uni, it seems like they really liked my <Link href="https://github.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI" target="_blank" className="text-primary hover:underline">graduate thesis</Link> on Explainable AI (XAI) and its applications in Deep Learning models, I got the <Link href="https://1drv.ms/b/c/13c38a0c57444de7/ESHYCr2W6atHvqHiwHmmZOQBDWMYlpn5GVI4B0yb6Tx4og?e=g95Efu" target="_blank" className="text-primary hover:underline italic">"Best Overall Performance on the Final Year Project in Computing and Computer Science"</Link> award (Nice 😃👍). I want to continue this research, which focuses on Explainable AI and its applications in Deep Learning models. I believe that understanding the "why" behind AI decisions is crucial for building trust and ensuring ethical use of technology. I am SO investing in this, I am on my way looking for funding/scholarship from companies/institutions that can help me to continue with a research degree in XAI.
            </p>
            
            <h3 className="text-2xl font-bold mt-8">My Philosophy</h3>
            
            <p>
              I believe in the power of technology to improve lives, but also in the responsibility that comes with building it. My work is guided by principles of ethical AI development, transparency, and data analysis.
            </p>
            
            <p>
              When I'm not coding, you can find me playing badminton in a court, watching Marvel movies, or eating tiramisu (a cake).
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">BSc (Hons) Computer Science with Artificial Intelligence SW</p>
                  <p className="text-muted-foreground">University of Huddersfield, 2022-2025</p>
                </li>
                <li>
                  <p className="font-medium">BSc Information Technology</p>
                  <p className="text-muted-foreground">Ho Chi Minh University of Science - Vietnam National University, 2020-2022</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Data Science Intern</p>
                  <p className="text-muted-foreground">Awaze, June 2025-Present</p>
                </li>
                <li>
                  <p className="font-medium">AI Software Engineer - Summer Intern</p>
                  <p className="text-muted-foreground">Learnspot, June 2024-September 2024</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
              <li>
                <p className="font-medium">AWS Certified Machine Learning -  Specialty <span className="text-muted-foreground italic">(In Progress)</span></p>
              </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CV Download */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">My Resume</h2>
          <p className="mb-4">Hey! Are you looking for someone to do some kinds of work? Feel free to take a look at my CV below.</p>
          <Button
            asChild
            variant="default"
          >
            <Link
              href="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/tom-site/main/public/CV/Tom.pdf"
              className="inline-flex items-center gap-2"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
