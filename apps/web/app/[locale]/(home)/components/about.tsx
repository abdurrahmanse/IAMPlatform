export const About = () => {
  return (
    <section className="w-full bg-muted/30 py-20 lg:py-40" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-bold text-4xl tracking-tighter md:text-6xl">
              About Me.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              With a passion for clean code and minimalist design, I bridge the
              gap between aesthetics and functionality. I believe that the best
              software is not only robust and scalable but also intuitively
              understandable.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              When I'm not coding, you can find me exploring new technologies,
              writing technical articles, or designing open-source tools.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-foreground p-8 text-background md:p-12">
            <h3 className="mb-4 font-bold text-2xl">Core Philosophy</h3>
            <ul className="space-y-6">
              <li className="border-background/20 border-b pb-4">
                <span className="mb-1 block font-medium text-background/60 text-sm uppercase tracking-widest">
                  01
                </span>
                <span className="font-semibold text-xl">
                  Simplicity over complexity.
                </span>
              </li>
              <li className="border-background/20 border-b pb-4">
                <span className="mb-1 block font-medium text-background/60 text-sm uppercase tracking-widest">
                  02
                </span>
                <span className="font-semibold text-xl">
                  Function dictates form.
                </span>
              </li>
              <li>
                <span className="mb-1 block font-medium text-background/60 text-sm uppercase tracking-widest">
                  03
                </span>
                <span className="font-semibold text-xl">
                  Continuous iteration.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
