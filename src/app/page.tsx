'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFont,
  faPlus,
  faMinus,
  faMoon,
  faAdjust,
  faMapMarkedAlt,
  faChartLine,
  faListUl,
  faClock,
  faBalanceScale,
  faExclamationTriangle,
  faDownload,
  faShareAlt,
  faBell,
  faPaperPlane,
  faTimes
} from '@fortawesome/free-solid-svg-icons';


export default function AccessibilityControls() {
  const [isDyslexiaFont, setDyslexiaFont] = useState(false);
  const [fontSize, setFontSize] = useState(100); // base is 100%
  const [isDarkMode, setDarkMode] = useState(false);
  const [isHighContrast, setHighContrast] = useState(false);

  const toggleDyslexiaFont = () => {
    setDyslexiaFont(!isDyslexiaFont);
    document.body.classList.toggle('dyslexia-font');
  };

  const increaseFontSize = () => {
    const newSize = fontSize + 10;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = fontSize - 10;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}%`;
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleHighContrast = () => {
    setHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <div>
      {/* Accessibility Controls */}
      <div className="accessibility-controls">
        <button
          onClick={toggleDyslexiaFont}
          className="accessibility-btn"
          title="Toggle Dyslexia Font"
        >
          <FontAwesomeIcon icon={faFont} />
        </button>
        <button
          onClick={increaseFontSize}
          className="accessibility-btn"
          title="Increase Font Size"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          onClick={decreaseFontSize}
          className="accessibility-btn"
          title="Decrease Font Size"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          onClick={toggleDarkMode}
          className="accessibility-btn"
          title="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <button
          onClick={toggleHighContrast}
          className="accessibility-btn"
          title="Toggle High Contrast"
        >
          <FontAwesomeIcon icon={faAdjust} />
        </button>
      </div>

      {/* Navigation Header */}
      <header>
        <nav>
          <div className="logo">
            <div className="text-logo">
              <span className="logo-icon">
                <i className="fas fa-gavel"></i>
              </span>
              <h1>InstaFIR</h1>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#ai-assistant">AI Assistant</a></li>
            <li><a href="https://lex-hack-project.vercel.app/fir/form">FIR Generater</a></li>
            <li><a href="https://lex-hack-project.vercel.app/connect-with-lawyer">Connect With Lawyer</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <span className="logo-icon"><i className="fas fa-gavel"></i></span>
            <h1>InstaFIR</h1>
          </div>
          <h1>Instant FIR Generation with AI Assistance</h1>
          <p>File accurate First Information Reports quickly and easily with intelligent guidance</p>
          <button className="cta-button">Get Started Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Smart Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-robot"></i>
              <h3>AI-Powered Assistance</h3>
              <p>Our intelligent system guides you through the FIR creation process with real-time suggestions and legal insights.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-language"></i>
              <h3>Multi-Language Support</h3>
              <p>File FIRs in multiple regional languages to ensure accurate communication with local authorities.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-microphone-alt"></i>
              <h3>Voice Input</h3>
              <p>Dictate your FIR details with our voice recognition system for hands-free report creation.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Location Integration</h3>
              <p>Automatically capture and include precise location data for accurate incident reporting.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gavel"></i>
              <h3>Legal Section Suggestions</h3>
              <p>Get recommended IPC sections based on incident details for proper legal categorization.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-file-pdf"></i>
              <h3>Exportable Format</h3>
              <p>Generate official format FIRs that can be downloaded, printed or shared electronically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How InstaFIR Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Provide Details</h3>
              <p>Enter information about the incident with help from our AI assistant.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our system structures your information and suggests appropriate legal sections.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Review & Edit</h3>
              <p>Verify the generated FIR and make any necessary adjustments.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Download & Submit</h3>
              <p>Get your FIR in official format, ready for submission to authorities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="legal-terms" className="legal-terms">
        <div className="container">
            <h2>Legal Information</h2>
            <div className="legal-grid">
                <div className="legal-card">
                    <h3>What is an FIR?</h3>
                    <p>First Information Report (FIR) is a written document prepared by the police when they receive information about the commission of a cognizable offense. It is a crucial document as it sets the legal process in motion.</p>
                </div>
                <div className="legal-card">
                    <h3>Filing Rights</h3>
                    <p>Every citizen has the right to report a crime and get an FIR registered. Police cannot refuse to register an FIR if the reported incident involves a cognizable offense.</p>
                </div>
                <div className="legal-card">
                    <h3>Zero FIR Provision</h3>
                    <p>A Zero FIR can be filed at any police station regardless of jurisdiction. It is later transferred to the appropriate police station having territorial jurisdiction.</p>
                </div>
                <div className="legal-card">
                    <h3>False Complaints</h3>
                    <p>Making a false complaint or providing false information to the police is punishable under sections 182, 211 and 203 of the Indian Penal Code.</p>
                </div>
                <div className="legal-card">
                    <h3>Legal Assistance</h3>
                    <p>You have the right to legal assistance while filing an FIR. You can consult with a lawyer before and during the FIR filing process.</p>
                </div>
                <div className="legal-card">
                    <h3>Copy of FIR</h3>
                    <p>The police are obligated to provide a free copy of the FIR to the complainant. This should be demanded and kept safely for future reference.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="ai-assistant" className="ai-assistant">
        <div className="container">
            <h2>InstaFIR AI Assistant</h2>
            <div className="ai-container">
                <div className="ai-chat">
                    <i className="fas fa-robot"></i>
                    <h3>Need Help with Your FIR?</h3>
                    <p>Our AI Assistant can guide you through the process, answer legal questions, and help you create a comprehensive FIR.</p>
                    <button className="ai-button" id="openChatBtn">
                        <i className="fas fa-comments"></i> Chat with Assistant
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form id="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Crime Statistics Dashboard */}
      <section id="crime-stats-dashboard" className="crime-stats-dashboard flex items-center justify-center min-h-screen">
  <div className="container w-full max-w-6xl p-4">
    <h2 className="section-title text-3xl font-semibold mb-4">Crime Statistics Dashboard</h2>
    <p className="section-description text-lg mb-6">
      Real-time insights into crime data across regions to help understand patterns and trends.
    </p>

    <div className="dashboard-container flex flex-wrap gap-6">
      <div className="dashboard-card card-full flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faMapMarkedAlt} /> Crime Map</h3>
        <div className="crime-map">
          <div className="map-placeholder">
            <div className="map-overlay">
              <div className="hotspot" style={{ top: '30%', left: '45%' }} data-crime-rate="high"></div>
              <div className="hotspot" style={{ top: '60%', left: '25%' }} data-crime-rate="medium"></div>
              <div className="hotspot" style={{ top: '40%', left: '75%' }} data-crime-rate="low"></div>
              <div className="hotspot" style={{ top: '70%', left: '60%' }} data-crime-rate="medium"></div>
            </div>
          </div>
          <div className="map-legend">
            <div className="legend-item"><span className="legend-dot high"></span> High Crime Rate</div>
            <div className="legend-item"><span className="legend-dot medium"></span> Medium Crime Rate</div>
            <div className="legend-item"><span className="legend-dot low"></span> Low Crime Rate</div>
          </div>
        </div>
      </div>

      <div className="dashboard-card card-half flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faChartLine} /> Crime Trends</h3>
        <div className="trends-chart">
          <div className="chart-placeholder">
            <div className="chart-bar" style={{ height: '60%' }} data-year="2019"></div>
            <div className="chart-bar" style={{ height: '75%' }} data-year="2020"></div>
            <div className="chart-bar" style={{ height: '65%' }} data-year="2021"></div>
            <div className="chart-bar" style={{ height: '45%' }} data-year="2022"></div>
            <div className="chart-bar highlight" style={{ height: '40%' }} data-year="2023"></div>
          </div>
          <div className="chart-labels">
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card card-half flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faListUl} /> Crime Categories</h3>
        <div className="crime-categories">
          <div className="category-item">
            <div className="category-name">Cyber Crime</div>
            <div className="category-bar-container">
              <div className="category-bar" style={{ width: '75%' }}></div>
              <span className="category-percentage">75%</span>
            </div>
          </div>
          <div className="category-item">
            <div className="category-name">Theft</div>
            <div className="category-bar-container">
              <div className="category-bar" style={{ width: '65%' }}></div>
              <span className="category-percentage">65%</span>
            </div>
          </div>
          <div className="category-item">
            <div className="category-name">Assault</div>
            <div className="category-bar-container">
              <div className="category-bar" style={{ width: '40%' }}></div>
              <span className="category-percentage">40%</span>
            </div>
          </div>
          <div className="category-item">
            <div className="category-name">Fraud</div>
            <div className="category-bar-container">
              <div className="category-bar" style={{ width: '55%' }}></div>
              <span className="category-percentage">55%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card card-third flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faClock} /> Time Distribution</h3>
        <div className="time-distribution">
          <div className="time-pie-chart">
            <div className="pie-segment morning" style={{ '--segment-size': '25%' } as React.CSSProperties}></div>
            <div className="pie-segment afternoon" style={{ '--segment-size': '15%' } as React.CSSProperties}></div>
            <div className="pie-segment evening" style={{ '--segment-size': '35%' } as React.CSSProperties}></div>
            <div className="pie-segment night" style={{ '--segment-size': '25%' } as React.CSSProperties}></div>
          </div>
          <div className="pie-legend">
            <div className="legend-item"><span className="legend-dot morning"></span> Morning</div>
            <div className="legend-item"><span className="legend-dot afternoon"></span> Afternoon</div>
            <div className="legend-item"><span className="legend-dot evening"></span> Evening</div>
            <div className="legend-item"><span className="legend-dot night"></span> Night</div>
          </div>
        </div>
      </div>

      <div className="dashboard-card card-third flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faBalanceScale} /> Rate Comparison</h3>
        <div className="rate-comparison">
          <div className="comparison-item">
            <span className="comparison-label">National Avg:</span>
            <div className="comparison-value">6.2%</div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">State Avg:</span>
            <div className="comparison-value highlight">5.8%</div>
          </div>
          <div className="comparison-item">
            <span className="comparison-label">Local Avg:</span>
            <div className="comparison-value highlight-secondary">4.3%</div>
          </div>
        </div>
      </div>

      <div className="dashboard-card card-third flex flex-col bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold"><FontAwesomeIcon icon={faExclamationTriangle} /> Recent Alerts</h3>
        <div className="alerts-list">
          <div className="alert-item high">
            <span className="alert-time">2 hours ago</span>
            <p>Increased cyber crime activities reported in North Region</p>
          </div>
          <div className="alert-item medium">
            <span className="alert-time">1 day ago</span>
            <p>New fraud scheme targeting elderly citizens</p>
          </div>
          <div className="alert-item low">
            <span className="alert-time">3 days ago</span>
            <p>Vehicle theft rates declining in Central District</p>
          </div>
        </div>
      </div>
    </div>

    <div className="dashboard-actions flex space-x-4 mt-6">
      <button className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"><FontAwesomeIcon icon={faDownload} /> Download Full Report</button>
      <button className="btn btn-secondary bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"><FontAwesomeIcon icon={faShareAlt} /> Share Dashboard</button>
      <button className="btn btn-tertiary bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"><FontAwesomeIcon icon={faBell} /> Set Alerts</button>
    </div>
  </div>
</section>


      {/* Chat Interface */}
      <div className="chat-interface" id="chat-interface">
        <div className="chat-header">
          <h3>InstaFIR Assistant</h3>
          <button className="close-chat" id="closeChatBtn"><FontAwesomeIcon icon={faTimes} /></button>
        </div>
        <div className="chat-messages" id="chat-messages">
          {/* Messages will appear here */}
          <div className="message bot">
            <div className="message-content">
              <p>Hello! I&apos;m your InstaFIR Assistant. How can I help you today?</p>
            </div>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" id="chat-input-field" placeholder="Type your message..." />
          <button id="sendChatBtn"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>InstaFIR</h3>
            <p>Instant F.I.R Generation with AI assistance</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#legal-terms">Legal Terms</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 InstaFIR. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}
