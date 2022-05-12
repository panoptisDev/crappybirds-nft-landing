import Image from 'next/image'
import CrappyBirdsOnline from '../../public/images/crappy-birds-online-game.jpg'

const AboutGame = () => {
  return (
    <div
      className="py-16 overflow-hidden lg:pb-24 lg:pt-16 bg-gradient-to-b from-[#FFFBF3] to-[#FFFBF3]"
      id="about-game"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="max-w-[512px] max-h-[512px] mx-auto h-full w-full my-10 lg:my-0 md:place-self-start">
            <div className="relative aspect-w-1 aspect-h-1">
              <div
                className="transition-transform duration-300 border-8 border-white rounded-lg shadow-xl hover:-rotate-3"
                aria-hidden="true"
              >
                <Image
                  src={CrappyBirdsOnline}
                  layout="fill"
                  objectFit="cover"
                  alt="Crappy Birds Online - Game scene"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg font-medium">
              <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
                Crappy Birds Online
              </h2>
              <p>
                Crappy Birds is a fun and social 2D Side-Scrolling MMORPG
                leveraging NFTs for cosmetic items, lands and other properties.
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Explore a vast interconnected world</li>
                <li>Beat up monsters and dungeon bosses</li>
                <li>Customize your character</li>
                <li>Socialize and hang out with others</li>
                <li>
                  Scavenge for waste and recycle it into raw materials used in
                  crafts
                </li>
                <li>
                  Craft equipment, weapons and gadgets to enhance your character
                </li>
                <li>Trade and earn, as part of an open-world economy</li>
              </ul>
              <p>
                Learn more :{' '}
                <a
                  className="underline"
                  href="https://docs.crappybirds.io/genesis-collection/roadmap"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
                ,{' '}
                <a
                  className="underline"
                  href="https://crappybirds.io/docs/crappy-birds-litepaper.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Litepaper
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGame
