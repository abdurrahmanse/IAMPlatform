export const About = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">About Me.</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With a passion for clean code and minimalist design, I bridge the gap between aesthetics and functionality. I believe that the best software is not only robust and scalable but also intuitively understandable.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
              When I'm not coding, you can find me exploring new technologies, writing technical articles, or designing open-source tools.
            </p>
          </div>
          <div className="bg-foreground text-background p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
            <ul className="space-y-6">
              <li className="border-b border-background/20 pb-4">
                <span className="block text-sm font-medium text-background/60 uppercase tracking-widest mb-1">01</span>
                <span className="text-xl font-semibold">Simplicity over complexity.</span>
              </li>
              <li className="border-b border-background/20 pb-4">
                <span className="block text-sm font-medium text-background/60 uppercase tracking-widest mb-1">02</span>
                <span className="text-xl font-semibold">Function dictates form.</span>
              </li>
              <li>
                <span className="block text-sm font-medium text-background/60 uppercase tracking-widest mb-1">03</span>
                <span className="text-xl font-semibold">Continuous iteration.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
