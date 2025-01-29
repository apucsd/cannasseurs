import herbsVideo from "../../assets/herbsVideo.mp4";
import leafImg from "../../assets/leaves1.png";

const FullyLegalVideoSection = () => {
  return (
    <div className="md:p-36 p-8 text-center max-w-7xl mx-auto">
      <h1 className="md:text-4xl text-2xl clash font-bold">
        TCHA Is <span className="text-[#00863D]">Fully Legal</span>
      </h1>
      <p className="my-5 text-lg">
        Thanks to the 2018 Farm Bill, THCA is completely legal to purchase and
        use, as long as it contains less than 0.3% Delta-9 THC by dry weight.
        This makes THCA a compliant and accessible product for both consumers
        and businesses. You can confidently purchase and sell THCA flower
        knowing that it meets federal guidelines.
      </p>
      <div className="relative">
        <video
          className="w-full mt-14 mx-auto my-5 rounded-2xl shadow-xl"
          controls
        >
          <source src={herbsVideo} type="video/mp4" />
        </video>
        <div className="absolute md:-top-12 -top-12 md:-left-16 -left-10 ">
          <img className="w-24 h-24 md:w-40 md:h-40" src={leafImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FullyLegalVideoSection;
