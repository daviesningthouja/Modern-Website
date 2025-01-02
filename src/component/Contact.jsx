import 'react'
import AnimatedTitle from "./AnimatedTitle";
import Button from "./button";
import TypingText from './TypingText';

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      {/* lg:w-96 */}
        <div className="absolute -left-20 top-0 hidden h-full w-[17rem] overflow-hidden sm:block lg:left-20 ">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        {/* lg:w-80 */}
        <div className="xs-contact-img">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <TypingText 
            text={'Join Zentry'}
            className="mb-10 font-general text-[10px] uppercase"
          />

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer items-center flex py-[0.75rem] px-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

