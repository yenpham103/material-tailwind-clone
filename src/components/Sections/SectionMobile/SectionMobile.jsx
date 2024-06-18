import MobileInfo from "./MobileInfo";
import MobileText from "./MobileText";

function SectionMobile() {
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <MobileText />
        <MobileInfo />
      </div>
    </section>
  );
}

export default SectionMobile;
