import "@/app/ui/TimeLine.css";
import { useEffect, useRef } from "react";
import { IoCheckmarkDone, IoPauseOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";

const TimeLine = ({ step, stepDescripion }: any) => {
  function getCategoryNumber(category: string): number {
    switch (category.toLowerCase()) {
      case "structure":
        return 1;
      case "copywriting":
        return 2;
      case "inspiration":
        return 3;
      case "design":
        return 4;
      case "development":
        return 5;
      default:
        return 1;
    }
  }
  const stepNumber: number = getCategoryNumber(step);
  const generateColors = (num: number) => {
    let colorsArr = [];
    for (let i = 1; i <= 5; i++) {
      console.log(i);
      num >= i - 1 ? colorsArr.push("#F26615") : colorsArr.push("white");
    }
    return colorsArr.join(",");
  };

  // const clientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the corresponding step when 'step' changes
    const stepElement = document.getElementById(step.toLowerCase());
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [step]);

  const colors = generateColors(stepNumber);
  console.log("🚀 ~ TimeLine ~ colors:", colors);

  const TimeLineStyle = {
    background: `linear-gradient(45deg, ${colors})`,
  };

  const StepTitleStyle = {
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    leadingTrim: "both",
    textEdge: "cap",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "104.715%",
    marginTop: "1.6rem",
  };

  const TimeLineContent = ({ num }: { num: number }) => {
    if (stepNumber > num)
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg opacity-100">
            <IoCheckmarkDone />
          </span>{" "}
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      );
    else if (stepNumber === num)
      return (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg opacity-100">
              <IoPlayCircleOutline />
            </span>{" "}
            <p>Going on...</p>
          </div>

          <div className="content-text p-2 ">
            <p className="text-sm text-left text-secondary">{stepDescripion}</p>
          </div>
        </div>
      );
    else
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg opacity-100">
            <IoPauseOutline />
          </span>{" "}
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      );
  };

  return (
    <div className="timeline-container">
      <div style={TimeLineStyle} className="timeline">
        <div className="start" />
      </div>
      <div className="entries">
        <div id="structure" className="entry project">
          <div
            className={`dot ${stepNumber >= 1 ? "bg-primary" : "bg-white"}`}
          />
          <h2
            style={{
              background: `linear-gradient(90deg, ${
                stepNumber >= 1 ? "#F26615" : "#fff"
              } 0%, #333 100%)`,
              ...StepTitleStyle,
            }}
          >
            Structure
          </h2>
          <div className={`label ${stepNumber >= 1 ? "finished-label" : ""}`}>
            <TimeLineContent num={1} />
          </div>
        </div>

        <div id="copywriting" className="entry Copywriting">
          <div
            className={`dot ${stepNumber >= 2 ? "bg-primary" : "bg-white"}`}
          />
          <h2
            style={{
              background: `linear-gradient(90deg, ${
                stepNumber >= 2 ? "#F26615" : "#fff"
              } 0%, #333 100%)`,
              ...StepTitleStyle,
            }}
          >
            Copywriting
          </h2>

          <div className={`label ${stepNumber >= 2 ? "finished-label" : ""}`}>
            <TimeLineContent num={2} />
          </div>
        </div>

        <div id="insperation" className="entry Insperation">
          <div
            className={`dot ${stepNumber >= 3 ? "bg-primary" : "bg-white"}`}
          />
          <h2
            style={{
              background: `linear-gradient(90deg, ${
                stepNumber >= 3 ? "#F26615" : "#fff"
              } 0%, #333 100%)`,
              ...StepTitleStyle,
            }}
          >
            Inspiration
          </h2>

          <div className={`label ${stepNumber >= 3 ? "finished-label" : ""}`}>
            <TimeLineContent num={3} />
          </div>
        </div>

        <div id="design" className="entry Design">
          <div
            className={`dot ${stepNumber >= 4 ? "bg-primary" : "bg-white"}`}
          />
          <h2
            style={{
              background: `linear-gradient(90deg, ${
                stepNumber >= 4 ? "#F26615" : "#fff"
              } 0%, #333 100%)`,
              ...StepTitleStyle,
            }}
          >
            Design
          </h2>

          <div className={`label ${stepNumber >= 4 ? "finished-label" : ""}`}>
            <TimeLineContent num={4} />
          </div>
        </div>
        <div id="development" className="entry Development">
          <div
            className={`dot ${stepNumber >= 5 ? "bg-primary" : "bg-white"}`}
          />
          <h2
            style={{
              background: `linear-gradient(90deg, ${
                stepNumber >= 5 ? "#F26615" : "#fff"
              } 0%, #333 100%)`,
              ...StepTitleStyle,
            }}
          >
            Development
          </h2>

          <div className={`label ${stepNumber >= 5 ? "finished-label" : ""}`}>
            <TimeLineContent num={5} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
