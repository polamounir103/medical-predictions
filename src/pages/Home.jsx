import LandPage from "../components/home/LandPage";
import MainInfo from "../components/home/MainInfo";
import BetweenSections from "../components/shared/BetweenSections";

export default function Home() {
  return (
    <>
      <div className="">
        <LandPage />
        <BetweenSections tColor="#d7e7f5" bColor="#83acff" />
        <MainInfo />
      </div>
    </>
  );
}
