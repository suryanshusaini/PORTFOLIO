import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CommandPalette({ isOpen, setIsOpen }) {
  const [search, setSearch] = useState('');

  // Global Keyboard Shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K (Mac) or Ctrl+K (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset search on open
      setSearch('');
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleAction = (action) => {
    action();
    setIsOpen(false);
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const actions = [
    {
      id: 'about',
      label: 'About Me',
      icon: 'fas fa-user',
      action: () => scrollTo('about'),
    },
    {
      id: 'skills',
      label: 'Technical Skills',
      icon: 'fas fa-code',
      action: () => scrollTo('skills'),
    },
    {
      id: 'projects',
      label: 'Top Projects',
      icon: 'fas fa-folder-open',
      action: () => scrollTo('projects'),
    },
    {
      id: 'metrics',
      label: 'Consistency & Metrics',
      icon: 'fas fa-chart-line',
      action: () => scrollTo('consistency'),
    },
    {
      id: 'contact',
      label: 'Contact Info',
      icon: 'fas fa-envelope',
      action: () => scrollTo('contact'),
    },
    {
      id: 'email',
      label: 'Copy Email Address',
      icon: 'fas fa-copy',
      action: () => navigator.clipboard.writeText('suryanshusaini2009@gmail.com'),
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      icon: 'fab fa-github',
      action: () => window.open('https://github.com/suryanshusaini', '_blank'),
    },
    {
      id: 'leetcode',
      label: 'LeetCode Profile',
      icon: 'fas fa-terminal',
      action: () => window.open('https://leetcode.com/u/Suryanshu_Saini0808/', '_blank'),
    },
    {
      id: 'resume',
      label: 'View Resume',
      icon: 'fas fa-file-alt',
      action: () => window.open('https://drive.google.com/file/d/1v6IkFw4dHvPhL_uH_IEpLXTZOSYampZy/view?usp=drive_link', '_blank'),
    },
  ];

  const filteredActions = actions.filter(a => a.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Solid Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-[15%] left-1/2 z-[101] w-11/12 max-w-lg bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-neutral-800">
              <i className="fas fa-search text-neutral-500 mr-3"></i>
              <input
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-white placeholder-neutral-500 focus:outline-none font-mono text-sm"
                autoFocus
              />
              <span className="text-xs font-mono text-neutral-500 border border-neutral-800 bg-neutral-900 px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {filteredActions.length > 0 ? (
                <div className="p-2 space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Actions
                  </div>
                  {filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action.action)}
                      className="w-full flex items-center px-3 py-3 text-sm font-mono text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors text-left"
                    >
                      <i className={`${action.icon} w-6 text-center mr-3 text-neutral-500 group-hover:text-white`}></i>
                      {action.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-sm font-mono text-neutral-500">
                  No results found for "{search}"
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
