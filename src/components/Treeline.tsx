type Color = "forest" | "forest-light";

type TreelineProps = {
  above: Color;
  below: Color;
  flip?: boolean;
  layered?: boolean;
};

const bg: Record<Color, string> = {
  forest: "bg-forest",
  "forest-light": "bg-forest-light",
};

// En rad granar mellan två sektioner. Bakgrunden har samma färg som sektionen
// ovanför och granarna samma färg som sektionen under, så skogen går över i
// nästa sektion. Negativ margin drar upp granarna en bit i sektionen ovanför.
const Treeline = ({
  above,
  below,
  flip = false,
  layered = false,
}: TreelineProps) => {
  return (
    <div
      aria-hidden="true"
      className={`relative -mt-8 md:-mt-12 ${layered ? "h-28 sm:h-44" : "h-20 sm:h-28"} ${bg[above]}`}
    >
      {/* layered lägger en ljusare och högre rad granar bakom, så det blir djup */}
      {layered && (
        <div
          className={`tradgrans absolute inset-0 -scale-x-100 opacity-50 ${bg[below]}`}
        />
      )}
      <div
        className={`tradgrans absolute inset-x-0 bottom-0 ${layered ? "h-2/3" : "h-full"} ${flip ? "-scale-x-100" : ""} ${bg[below]}`}
      />
      {/* En liten älg som står bland granarna i den sista skogen */}
      {layered && (
        <div className="alg absolute right-[16%] bottom-[10%] aspect-[106/88] h-[34%] bg-birch/10" />
      )}
    </div>
  );
};

export default Treeline;
