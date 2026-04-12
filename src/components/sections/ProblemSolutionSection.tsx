import { useInView } from "@/hooks";
import { problemSolutionContent } from "@/data/services-restructured";
import { Users, AlertTriangle, TrendingDown, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={24} />,
  "alert-triangle": <AlertTriangle size={24} />,
  "trending-down": <TrendingDown size={24} />,
};

export const ProblemSolutionSection = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`problem-solution-section ${inView ? "visible" : ""}`}
    >
      <div className="problem-solution-container">
        {/* Problem Side */}
        <div className="problem-side">
          <h2 className="problem-title">{problemSolutionContent.title}</h2>
          <div className="problem-list">
            {problemSolutionContent.problems.map((problem, index) => (
              <div
                key={index}
                className="problem-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="problem-icon">{iconMap[problem.icon]}</div>
                <p className="problem-text">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="problem-solution-divider">
          <div className="divider-line" />
          <div className="divider-arrow">→</div>
          <div className="divider-line" />
        </div>

        {/* Solution Side */}
        <div className="solution-side">
          <h2 className="solution-title">{problemSolutionContent.solutionTitle}</h2>
          <p className="solution-text">{problemSolutionContent.solutionText}</p>
          <div className="solution-features">
            <div className="solution-feature">
              <CheckCircle2 size={20} className="solution-check" />
              <span>Deep technical capability</span>
            </div>
            <div className="solution-feature">
              <CheckCircle2 size={20} className="solution-check" />
              <span>Fast execution</span>
            </div>
            <div className="solution-feature">
              <CheckCircle2 size={20} className="solution-check" />
              <span>Production-ready systems</span>
            </div>
            <div className="solution-feature">
              <CheckCircle2 size={20} className="solution-check" />
              <span>End-to-end ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
