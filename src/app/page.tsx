/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RRRfQWSA9Up
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Layer1 } from "../../customModel/layer1/TalkToLLM"

// const res =  Layer1("make bar graph of temperature vs time at 10 am temperature is 40 celcius, and at 11 am temperature is 50 celcius and at 12 pm temperatur is 47 celcius");
//  const res =  Layer1("make pie chart of people's dietry preferences 27 percent Veg, 48 percent Non Veg, remaining Vegan");
  const res =  Layer1("make form with fields as Name Roll number and email id");
  // const res =  Layer1("What is India's capital ?");
console.log(res);

export default function Component() {
  return (
    <div className="flex h-screen flex-col">
      <header className="bg-gray-900 px-4 py-3 text-white shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Chat</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Features
            </Link>
            <Link className="hover:underline" href="#">
              Pricing
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto py-8">
          <div className="flex h-[80vh] max-h-[80vh] flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-950">
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-lg bg-gray-900 p-3 text-white shadow">
                    <p>Hello, how can I assist you today?</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[70%] rounded-lg bg-gray-200 p-3 text-gray-900 shadow dark:bg-gray-800 dark:text-gray-50">
                    <p>Hi there! I'm looking for some help with a project I'm working on.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-lg bg-gray-900 p-3 text-white shadow">
                    <p>Sure, I'd be happy to help. What kind of project are you working on?</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[70%] rounded-lg bg-gray-200 p-3 text-gray-900 shadow dark:bg-gray-800 dark:text-gray-50">
                    <p>
                      I'm building a web application and I'm having trouble with the chat feature. I was hoping you
                      could give me some advice.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-lg bg-gray-900 p-3 text-white shadow">
                    <p>Absolutely, I'd be happy to help. What specific issues are you facing with the chat feature?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-950">
              <form className="flex items-center">
                <Input
                  className="flex-1 rounded-l-lg border-0 bg-gray-100 py-2 px-4 text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-gray-50"
                  placeholder="Type your message..."
                  type="text"
                />
                <Button
                  className="rounded-r-lg bg-gray-900 py-2 px-4 text-white hover:bg-gray-800 focus:ring-0 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400"
                  type="submit" onClick={() => 
                    getCompletion()}
                >
                  Send
                </Button>
                <Button className="ml-2 rounded-lg" size="icon" variant="ghost">
                  <PaperclipIcon className="h-5 w-5" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}