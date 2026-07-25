const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'treatments', '[id]', 'PageClient.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Chunk 1: notIdealFor
const idealForRegex = /(<h3 className="section-title"><ShieldCheck className="text-accent" \/> Ideal Candidate<\/h3>\s*<p className="text-secondary">{highlightKeywords\(data\.idealFor\)}<\/p>\s*<\/div>)/;
const idealForReplacement = `$1
              {data.notIdealFor && !data.notIdealFor.startsWith('N/A') && (
                <div className="page-wrapper" style={{ marginTop: '1.5rem' }}>
                  <h3 className="section-title"><Activity className="text-red-500" style={{ color: '#ef4444' }} /> Not Recommended For</h3>
                  <p className="text-secondary">{highlightKeywords(data.notIdealFor)}</p>
                </div>
              )}`;
content = content.replace(idealForRegex, idealForReplacement);


// Chunk 2: limitations
const benefitsRegex = /(<\/ul>\s*<\/div>)/;
const benefitsReplacement = `$1

            {/* Limitations */}
            {data.limitations && data.limitations.length > 0 && !data.limitations[0].startsWith('None') && (
              <div className="treatment-section">
                <h2 className="heading-secondary">Possible Limitations</h2>
                <ul className="benefits-grid">
                  {data.limitations.map((limitation, i) => (
                    <li key={i} className="benefit-item glass p-4 rounded-md" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                      <Activity size={24} className="text-red-500 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span className="font-medium text-primary">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}`;
content = content.replace(benefitsRegex, benefitsReplacement);


// Chunk 3: Recovery Timeline & Expert Advice
const faqsRegex = /({[ \t]*\/\* FAQs \*\/}\s*<div className="page-wrapper">\s*<h2 className="heading-secondary">Frequently Asked Questions<\/h2>)/;
const faqsReplacement = `{/* Recovery & Longevity */}
            {data.recoveryTimeline && (
              <div className="treatment-section glass p-6 rounded-lg mt-8 mb-8 border border-border-color">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2"><Activity className="text-accent" size={20} /> Recovery & Expectations</h3>
                <p className="text-secondary mb-4"><strong>Timeline:</strong> {highlightKeywords(data.recoveryTimeline)}</p>
                {data.successFactors && <p className="text-secondary mb-4"><strong>Success Factors:</strong> {data.successFactors.join(', ')}</p>}
                {data.whenToVisit && <p className="text-secondary mb-4"><strong>When to Consult:</strong> {highlightKeywords(data.whenToVisit)}</p>}
                {data.appointmentCount && <p className="text-secondary"><strong>Appointments:</strong> {highlightKeywords(data.appointmentCount)}</p>}
              </div>
            )}

            {/* Expert Advice */}
            {data.doctorRecommendation && (
              <blockquote className="expert-advice-quote glass p-8 rounded-lg mt-8 mb-8 border-l-4 border-accent italic text-lg text-primary relative">
                <span className="absolute top-4 left-4 text-accent opacity-20 text-6xl font-serif">"</span>
                <p className="relative z-10">{highlightKeywords(data.doctorRecommendation)}</p>
                <footer className="mt-4 font-bold text-accent text-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center overflow-hidden border border-accent/30">
                    <img src={data.doctor === 'Dr. Ritu Saneja' ? '/dr-ritu.jpg' : '/dr-sandeep.jpg'} alt={data.doctor} className="w-full h-full object-cover" />
                  </div>
                  — {data.doctor}
                </footer>
              </blockquote>
            )}

            $1`;
content = content.replace(faqsRegex, faqsReplacement);

// Chunk 4: At a Glance Sidebar
const sidebarRegex = /(<h3 className="sidebar-title">At a Glance<\/h3>\s*<div className="sidebar-content">)[\s\S]*?(<\/div>\s*<\/div>\s*{\/\* CTA \*\/})/;
const sidebarReplacement = `$1
                {data.treatmentSnapshot && Object.entries(data.treatmentSnapshot).map(([key, value]) => (
                  <div className="fact-item" key={key}>
                    <strong className="fact-label" style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</strong>
                    <div className="fact-value"><CheckCircle2 size={15} className="text-accent" style={{ marginRight: '6px' }} /> {value}</div>
                  </div>
                ))}
                {!data.treatmentSnapshot && (
                  <>
                    <div className="fact-item">
                      <strong className="fact-label">Duration</strong>
                      <div className="fact-value"><Clock size={18} className="text-accent" /> {data.duration}</div>
                    </div>
                    <div className="fact-item">
                      <strong className="fact-label">Recovery</strong>
                      <div className="fact-value"><Activity size={18} className="text-accent" /> {data.recovery}</div>
                    </div>
                    <div className="fact-item">
                      <strong className="fact-label">Specialist</strong>
                      <div className="fact-value"><ShieldCheck size={18} className="text-accent" /> {data.doctor}</div>
                    </div>
                  </>
                )}
                {data.technologyUsed && (
                  <div className="fact-item">
                    <strong className="fact-label">Technology</strong>
                    <div className="fact-value" style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9em' }}>
                      {Array.isArray(data.technologyUsed) ? data.technologyUsed.map(t => <span key={t}>• {t}</span>) : data.technologyUsed}
                    </div>
                  </div>
                )}
              $2`;
content = content.replace(sidebarRegex, sidebarReplacement);

fs.writeFileSync(filePath, content);
console.log('Update script completed successfully!');
