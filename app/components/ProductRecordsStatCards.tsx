import { ReactNode } from "react";
import { cn } from "../utils/classes";

type EeachPart = ReactNode | string;
interface Props {
  start: {
    top?: EeachPart;
    mid?: EeachPart;
    bottom?: EeachPart;
  };
  end: {
    top?: EeachPart;
    mid?: EeachPart;
    bottom?: EeachPart;
  };
  afterStart?: {
    top?: EeachPart;
    bottom?: EeachPart;
  };
  beforeEnd?: {
    top?: EeachPart;
    bottom?: EeachPart;
  };
}

const ProductRecordsStatCards = ({ start, afterStart, beforeEnd, end }: Props) => {
  const styles = {
    cardDate: "px-2 py-[6px] bg-[#0062BD] text-white text-sm leading-3 font-light",
    cardBalance: "p-1 text-[#002D70] text-base font-bold",
    middle_common: "p-1 border-dotted border-[#8FA9C4] font-light text-[#006FC3]",
  };

  return (
    <div
      className={cn(`flex justify-evenly text-center px-2`, {
        "pt-4": start.top || end.top,
      })}
    >
      {/* Start */}
      {start && (
        <div className={`min-w-fit`}>
          <div className={`relative border-2 border-blue-800 rounded-md`}>
            {start.top && (
              <p className={`absolute bottom-full left-1/2 w-full min-w-fit`} style={{ translate: "-50% -0.2rem" }}>
                {start.top}
              </p>
            )}
            {start.mid && <p className={cn(styles.cardDate)}>{start.mid}</p>}
            {start.bottom && <p className={cn(styles.cardBalance)}>{start.bottom}</p>}

            {start.top && (
              <p className={`min-w-fit`} style={{ visibility: "hidden", height: 0 }}>
                {start.top}
              </p>
            )}
          </div>
        </div>
      )}
      <div className={`w-full flex justify-stretch items-center text-blue-800 font-semibold`}>
        {/* After start */}
        {afterStart && (
          <div className={`w-full min-w-fit`}>
            {afterStart.top && <p className={cn(`border-e border-b`, styles.middle_common)}>{afterStart.top}</p>}
            {afterStart.bottom && <p className={cn(`border-e`, styles.middle_common)}>{afterStart.bottom}</p>}
          </div>
        )}
        {/* Before end */}
        {beforeEnd && (
          <div className={`w-full min-w-fit`}>
            {beforeEnd.top && <p className={cn(`border-b`, styles.middle_common)}>{beforeEnd.top}</p>}
            {beforeEnd.bottom && <p className={cn(``, styles.middle_common)}>{beforeEnd.bottom}</p>}
          </div>
        )}
      </div>
      {/* End */}
      {end && (
        <div className={`min-w-fit`}>
          <div className={`relative border-2 border-blue-800 rounded-md`}>
            {end.top && (
              <p className={`absolute bottom-full left-1/2 w-full min-w-fit`} style={{ translate: "-50% -0.2rem" }}>
                {end.top}
              </p>
            )}
            {end.mid && <p className={cn(styles.cardDate)}>{end.mid}</p>}
            {end.bottom && <p className={cn(styles.cardBalance)}>{end.bottom}</p>}

            {end.top && (
              <p className={`min-w-fit`} style={{ visibility: "hidden", height: 0 }}>
                {end.top}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductRecordsStatCards;
