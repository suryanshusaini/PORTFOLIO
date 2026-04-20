import React from "react";

function Contact() {
  return (
    <section id="contact" className="section-container text-center max-w-2xl mx-auto">
      <h2 className="text-accent font-mono mb-4 text-lg">What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h3>
      <p className="text-slate-400 text-lg mb-12">
        I'm actively looking for new opportunities and engaging projects. Whether you have an open role, a project idea, or just want to say hi, my inbox is always open.
      </p>
      
      <a href="mailto:suryanshu.saini@example.com" className="btn-primary inline-block mb-16">
        Say Hello
      </a>

      <div className="flex justify-center gap-8 border-t border-navy-700 pt-12">
        <a href="https://www.linkedin.com/in/suryanshu-saini-a4145b216/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a href="https://github.com/suryanshusaini" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a href="https://leetcode.com/u/Suryanshu_Saini0808/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
          <i className="fas fa-code text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
