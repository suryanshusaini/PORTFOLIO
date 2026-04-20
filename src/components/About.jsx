import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container" ref={ref}>
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-slate-400 space-y-6 text-lg leading-relaxed">
          <p>
            <span className="text-accent">Hello!</span> I'm a dedicated Computer Science Engineering student from Roorkee, currently in my 3rd year at Vellore Institute of Technology, AP. With a strong academic record, I bridge the gap between complex algorithms and practical software solutions.
          </p>
          <p>
            My problem-solving journey includes deep dives into Data Structures and Algorithms, complemented by full-stack web development. I thrive in building systems that are not just functional, but performant and scalable.
          </p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
            <h4 className="text-3xl font-bold text-accent mb-2">
              {inView && <CountUp end={9.15} decimals={2} duration={2} />}
            </h4>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-wider">Current CGPA</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
            <h4 className="text-3xl font-bold text-accent mb-2">
              B.Tech CSE
            </h4>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-wider">3rd Year Student</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
            <h4 className="text-3xl font-bold text-accent mb-2">
              Full Stack
            </h4>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-wider">Primary Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
