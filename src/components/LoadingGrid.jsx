const LoadingGrid = () => (
  <section className="movie-grid" aria-label="Loading movie results">
    {Array.from({ length: 8 }, (_, index) => (
      <div className="movie-card movie-card--loading" key={index}>
        <span />
        <div />
        <span />
      </div>
    ))}
  </section>
);

export default LoadingGrid;
