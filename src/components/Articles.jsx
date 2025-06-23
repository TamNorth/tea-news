export default function Articles() {
  return (
    <main>
      <section id="sort-and-filter">
        <button className="element">Sort by</button>
        <button className="element">Order</button>
        <button className="element-highlight-2">Topic: </button>
      </section>
      <button id="article-card" className="element">
        <h2>Article title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
          provident, modi facilis impedit ipsam veniam perferendis? Voluptatum
          voluptates impedit saepe sint quod, dignissimos dolorum corporis modi,
          perspiciatis, obcaecati dolore tempora.
        </p>
      </button>
    </main>
  );
}
