const DynamicVibeToggle = ({ isEnabled, onToggle }) => (
  <button
    className={`dynamic-vibe-toggle ${isEnabled ? 'dynamic-vibe-toggle--on' : ''}`}
    type="button"
    aria-pressed={isEnabled}
    onClick={onToggle}
    title="Toggle Dynamic Vibe"
  >
    <span className="dynamic-vibe-toggle__cord" aria-hidden="true" />
    <span className="dynamic-vibe-toggle__bulb" aria-hidden="true" />
    <span className="dynamic-vibe-toggle__label">Dynamic Vibe</span>
  </button>
);

export default DynamicVibeToggle;
