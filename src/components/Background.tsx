import { pokeball1 } from "../utils/imageImport";
import { pokeball2 } from "../utils/imageImport";

export default function Background() {
  return (
    <div className="background">
      <img src={pokeball1} alt="" className="pokeball pokeball-1" />
      <img src={pokeball2} alt="" className="pokeball pokeball-2" />
      <img src={pokeball1} alt="" className="pokeball pokeball-3" />
      <img src={pokeball2} alt="" className="pokeball pokeball-4" />
      <img src={pokeball1} alt="" className="pokeball pokeball-5" />
      <img src={pokeball2} alt="" className="pokeball pokeball-6" />
    </div>
  );
}
