import { NextPage } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../common/section-title";

const birthDate = new Date(2002, 11);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const questions: { question: string; answer: string }[] = [
  {
    question: "What is your name?",
    answer:
      "Names Ling, those are my favorite hero words, my name is Joko Supriyanto",
  },
  {
    question: "How old are you?",
    answer: `I'm ${age} years old this year`,
  },
  {
    question: "Where did you take your college degree?",
    answer: "Muhammadiyah Surakarta University",
  },
  {
    question: "Did you get your bachelor's degree?",
    answer: "I am still studying at Muhammadiyah Surakarta University",
  },
  {
    question: "Would you accept a job as a software developer?",
    answer: "Yes, of course",
  },
  {
    question: "What is your favorite programming language?",
    answer: "I'm a big fan of TypeScript",
  },
  {
    question: "What is your tech stack?",
    answer:
      "I learned Websites development with Next js and TypeScript, I am an expert in using TypeScript and JavaScript languages, I can also do multiplatform application development with flutter and dart frameworks, Kotlin and Java for native Android developtment. I am familiar with using platforms like Firebase, Supabase, and Upwrite to create backends faster. but I can also create a Restfull API with Express and Node JS and Bun.",
  },
  {
    question: "How do I deploy my Next.js application?",
    answer:
      "To deploy your Next.js application, you can use Vercel or Netlify. First, create a new Next.js project and then follow the deployment instructions for your chosen platform.",
  },
];

const FrequentlyAskQuestion: NextPage = ({}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <SectionTitle
        data={{
          title: "Frequently asked questions",
          subtile: "A list of questions that are often asked to me",
        }}
      />
      <div className="container w-full px-3">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => {
            return (
              <AccordionItem value={question.question} key={index}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{question.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAskQuestion;
