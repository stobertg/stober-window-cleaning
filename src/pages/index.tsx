import React, { useRef } from 'react'
import { SiteHeader, HeadTags, Hero, Intro, About, Bio, History, PageBlock, PageBlockItem, Heading, Services } from '@components'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollToAbout = () => scrollToAnchor( "about" )
  const scrollToServices = () => scrollToAnchor( "services" )
  const scrollToHistory = () => scrollToAnchor( "history" )
  const scrollToContact = () => scrollToAnchor( "contact" )

  const scrollToAnchor = (anchorName: string) => {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <HeadTags />
      <SiteHeader
        ref={ scrollRef } 
        buttons={[
          { onClick: scrollToAbout, title: 'About' },
          { onClick: scrollToServices, title: 'Services' },
          { onClick: scrollToHistory, title: 'History' },
          { onClick: scrollToContact, title: 'Contact' }
        ]}
      />

      <Hero 
        image="/heros/gramps.jpeg"
        imageAlt="Lloyd Stober, the original founder of Stober Window Cleaning"
        quote={
          <>
            <div>&quot;We work up to a reputation, not down to a price&quot;</div>
            <div>- Lloyd Stober</div>
          </>
        }
      />

      <PageBlock width="medium">
        <Intro />
      </PageBlock>

      <PageBlock width="medium" bgColor="blue">
        <About 
          items={[
            { href: 'https://www.bbb.org/us/oh/amelia/profile/window-cleaning/stober-window-cleaning-inc-0292-19001450', image: '/icons/bbb.svg', title: "Member of BBB with an A+ rating" },
            { anniversary: true, title: `It's Our ${ (new Date().getFullYear()) - 1954 }th year anniversary` },
            { image: '/icons/injury.svg', title: "Fully insured with worker's comp" },
            { variant: 'cancel', image: '/icons/cloud-rain.svg', title: "We don't like rain, either" }
          ]}
        />
      </PageBlock>
      
      <PageBlock width="medium" blockItemSpacing="l2">
        <PageBlockItem align="center">
          <h3><Heading size="l8" title="Who we are" /></h3>
        </PageBlockItem>

        <PageBlockItem>
          <Bio 
            title="Who we are"
            people={[
              { 
                image: '/people/ryan.jpeg', 
                name: 'Ryan Stober',
                bio: <>
                  <p>
                    Ryan is the Third Generation and has been with the company for over 18 years. He took over the company upon 
                    Dan&apos;s retirement He resides in Amelia with his Wife Ashley Stober and their two children. He enjoys spending 
                    his free time camping with his family as well as playing some golf in his free time when weather allows.
                  </p>
                </> 
              },
              { 
                image: '/people/grant.jpeg', 
                name: 'Grant Stober',
                bio: <>
                  <p>
                    Grant has been with the company since 2016. He resides In Milford. In his free time he enjoys working on his car 
                    and spending time at the gym. He also enjoys trying new recipes in the kitchen.
                  </p>
                </> 
              },
              { 
                image: '/people/josh.jpeg', 
                name: 'Josh Ausman',
                bio: <>
                  <p>
                    Josh has been with stober window cleaning for over 10 yrs.He and his wife Devan live in Bethel close to family 
                    and friends, They are expecting their first child this spring. They are both very excited to start their family. 
                    In his free time he enjoys playing tennis, camping , hunting as well as some aviation.
                  </p>
                </> 
              },
              { 
                image: '/people/ashley.jpeg', 
                name: 'Ashley Stober',
                bio: <>
                  <p>
                    Ashley has just recently started with the company as of January 2022 upon Maria Stober&apos;s retirement, she resides 
                    in amelia. She enjoys spending time on projects with her craft and t-shirt business as well as family time with her 
                    two children and Ryan Stober.They all enjoy the outdoors which is where they spend the majority of their time in the 
                    spring, summer and fall.
                  </p>
                </> 
              },
              { 
                image: '/people/dan.jpeg', 
                name: 'Dan Stober - Retired',
                bio: <>
                  <p>
                    Dan is a second generation with over 30 years of experience. While in highschool Dan worked for his father during the 
                    summers and local areas after school. He joined full time at the age of 18, eventually taking over the company with his 
                    brother Chris. In 2018 Following Chris Stober&apos;s retirement he became co owners with his son Ryan Stober. When he&apos;s 
                    not working, Dan enjoys boating, camping, golf and spending time with his grandchildren. He currently resides in 
                    Bethel with his wife Maria.
                  </p>
                </> 
              }
            ]}
          />
        </PageBlockItem>
      </PageBlock>

      <PageBlock width="medium" bgColor="gray">
        <Services
          services={[
            { image: '/illustrations/window.svg', title: 'Windows' },
            { image: '/illustrations/chand.svg', title: 'Chandeliers' },
            { image: '/illustrations/gutter.svg', title: 'Gutters' },
            { image: '/illustrations/fix.svg', title: 'Fixtures' },
            { image: '/illustrations/screen.svg', title: 'Screens' }
          ]}
        />
      </PageBlock>

      <PageBlock width="small">
        <History />
      </PageBlock>
    </>
  )
}
