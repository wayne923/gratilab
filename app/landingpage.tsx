"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WWyNu2N2IPp
 */
import Link from "next/link"
import { ResponsiveLine } from "@nivo/line"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { ResponsiveBar } from "@nivo/bar"
// import { useState } from 'react';
import { HubSpotForm } from '@/components/HubSpotForm'
import Image from 'next/image';


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <Image 
            src="/gratilab.png" // Path to your SVG in the public folder
            alt="Gratilab Icon" 
            width={55} 
            height={55} 
          />
          <p className='text-md font-medium'>GratiLab</p>
          <span className="sr-only">GratiLab Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#our-vision">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#community">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Humanizing the Workforce
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We aim to use AI to humanize the workforce, especially for our remote and underprivileged co-workers.
                  Our goal is to create a culture where every week, employees can write a gratitude note, fostering a
                  sense of connection and appreciation.
                </p>
                <div className="space-x-4">
                  {/* <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Join the Movement
                  </Link> */}
                  <> 
    <h1>Contact page</h1>
    <HubSpotForm /> 
    </> 

                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Employee Satisfaction Over Time</h2>
              <CurvedlineChart className="w-full aspect-[4/3] " />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="our-vision">Our Vision</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transforming Work, One Team at a Time</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Gratilab harnesses AI&apos;s transformative power to reshape the workplace. 
                Our platform not only enhances collaboration and automates workflows but also grows with your team&apos;s needs. 
                We&apos;re dedicated to building work environments that are inclusive, fulfilling, and efficient for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Collaboration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make collaboration seamless with built-in AI tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate your workflow with continuous integration.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Scale</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deploy to the cloud with a single click and scale with ease.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Inclusion</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Foster a more inclusive work environment with AI.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Fulfillment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Increase employee fulfillment and productivity.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Gratitude</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Encourage gratitude and appreciation in the workplace.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight" id="community">Join Our Community</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Be part of the movement to humanize the workforce. Sign up to get notified when we launch.
              </p>
              <h3 className="text-md inline-block">
                Gratilab founding team experience
              </h3>

              <div className="grid w-full grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
              <Image
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/Google.svg"
                width="140"
              />
              <Image
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/Microsoft.svg"
                width="140"
              />
              <Image
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/Amazon.svg"
                width="140"
              />
              <Image
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/Meta.svg"
                width="140"
              />
            </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://discord.gg/85tYudPT"
              >
                Connect with us on Discord
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Gratilab Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CurvedlineChart(props: any) {
  const chartStyle = {
    maxWidth: '100%',
    maxHeight: '45vh', // Adjust as needed
    margin: 'auto'
  };

  return (
    <div style={chartStyle} {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Team 1",
            data: [
              { x: "Jan 24", y: 23 },
              { x: "Feb 24", y: 67 },
              { x: "Mar 24", y: 32 },
              { x: "Apr 24", y: 70 },
              { x: "May 24", y: 40 },
              { x: "Jun 24", y: 87 },
            ],
          },
          {
            id: "Team 2",
            data: [
              { x: "Jan 24", y: 30 },
              { x: "Feb 24", y: 28 },
              { x: "Mar 24", y: 86 },
              { x: "Apr 24", y: 44 },
              { x: "May 24", y: 53 },
              { x: "Jun 24", y: 100 },
            ],
          },
        ]}
        margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#852d91", "#3f007d"]}
        pointSize={5}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}