import './App.css'

function App() {
  return (
    <div className="site">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge">Finance · Policy</div>
          <h1>Joshua Landgarten</h1>
          <p className="hero-subtitle">
            Portfolio Management Analyst at Ares Management · University of Michigan Alum
          </p>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/joshua-landgarten/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              LinkedIn
            </a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About</h2>
          <p>
            Josh Landgarten is a finance professional with a strong foundation in public policy,
            private credit, and investment management. A University of Michigan graduate from the prestigious
            Gerald R. Ford School of Public Policy, Josh combines analytical rigor with a passion for
            understanding the intersection of markets, regulation, and strategy.
          </p>
          <p>
            Currently working as a Portfolio Management Analyst in the credit group at Ares Management,
            one of the world's largest alternative investment managers, Josh is building a career at the
            forefront of private credit and alternative investments.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 – Present</span>
                <h3>Portfolio Management Analyst — Credit</h3>
                <h4>Ares Management Corporation</h4>
                <p>
                  Analyst in Ares' credit group, one of the largest alternative credit managers globally.
                  Working across private credit strategies with a focus on portfolio management and investment analysis.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Summer 2023</span>
                <h3>Private Equity Intern</h3>
                <h4>Ares Management Corporation</h4>
                <p>
                  Completed and presented a case study to the Investment Committee on a ~$400 million leveraged buyout.
                  Participated in Wall Street Prep training covering credit analysis, LBO modeling, and financial modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education">
        <div className="container">
          <h2>Education</h2>
          <div className="edu-grid single">
            <div className="edu-card">
              <div className="edu-icon">〽</div>
              <h3>University of Michigan</h3>
              <h4>Gerald R. Ford School of Public Policy</h4>
              <p className="edu-degree">Bachelor of Arts in Public Policy</p>
              <p className="edu-year">Class of 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills">
        <div className="container">
          <h2>Expertise</h2>
          <div className="skills-grid">
            {[
              'Private Credit',
              'Portfolio Management',
              'LBO Modeling',
              'Financial Analysis',
              'Credit Underwriting',
              'Public Policy',
              'Investment Research',
              'Alternative Investments'
            ].map((skill) => (
              <div key={skill} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <div className="container">
          <h2>Connect</h2>
          <p>Interested in connecting? Reach out on LinkedIn.</p>
          <a href="https://www.linkedin.com/in/joshua-landgarten/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Joshua Landgarten</p>
      </footer>
    </div>
  )
}

export default App
