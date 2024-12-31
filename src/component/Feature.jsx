import React from 'react'

const BentoCard = ({src, title, description, isComingSoon }) => {
  return(
    <div className='relative size-full'>
      <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover'
      />
      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
          {description && (
            <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}


const Feature = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>Into the Metagame Layer</p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50 '>
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        {/* bento 1 */}
        {/* h-96 */}
        <div className='border-hsla relative mb-7  h-[25rem] w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radie<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon ={true}
            />
        </div>
        {/* gap-7 */}
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-5'>
          {/* bento 2 */}
          <div className='bento-tilt_1 row-span-2 md:col-span-1 md:row-span-2'>
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description={'An anime and gaming-inspired NFT collection - the IP primed for expansion.'}
            />

          </div>
          {/* bento 3 */}
          <div className='bento-tilt_1 row-span-1 me-14'>
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description={"A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."}
            />
          </div>
          {/* bento 4 */}
          <div className='bento-tilt_2 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>as<b>u</b>l</>}
              description={"A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."}
            />
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default Feature
