export default function CityEvolutionBackground() {
  return (
    <div className="rain-bg" aria-hidden="true">
      <div className="rain-bg__wash rain-bg__wash--top" />
      <div className="rain-bg__wash rain-bg__wash--bottom" />

      <div className="rain-bg__ripples">
        <span className="rain-bg__ripple rain-bg__ripple--one" />
        <span className="rain-bg__ripple rain-bg__ripple--two" />
        <span className="rain-bg__ripple rain-bg__ripple--three" />
        <span className="rain-bg__ripple rain-bg__ripple--four" />
        <span className="rain-bg__ripple rain-bg__ripple--five" />
        <span className="rain-bg__ripple rain-bg__ripple--six" />
        <span className="rain-bg__ripple rain-bg__ripple--seven" />
        <span className="rain-bg__ripple rain-bg__ripple--eight" />
        <span className="rain-bg__ripple rain-bg__ripple--nine" />
        <span className="rain-bg__ripple rain-bg__ripple--ten" />
      </div>

      <div className="rain-bg__flora">
        <span className="rain-bg__leaf rain-bg__leaf--maple-one" />
        <span className="rain-bg__leaf rain-bg__leaf--maple-two" />
        <span className="rain-bg__leaf rain-bg__leaf--maple-three" />
        <span className="rain-bg__leaf rain-bg__leaf--ginkgo-one" />
        <span className="rain-bg__leaf rain-bg__leaf--ginkgo-two" />
        <span className="rain-bg__leaf rain-bg__leaf--ginkgo-three" />
        <span className="rain-bg__petal rain-bg__petal--one" />
        <span className="rain-bg__petal rain-bg__petal--two" />
        <span className="rain-bg__petal rain-bg__petal--three" />
      </div>

      <div className="rain-bg__grain" />
    </div>
  );
}
