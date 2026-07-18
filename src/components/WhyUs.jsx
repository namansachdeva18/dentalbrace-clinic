import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Stethoscope, Microscope, HeartHandshake } from 'lucide-react';
import './WhyUs.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    title: 'Expert Specialists',
    desc: <>Care delivered by highly qualified <strong className="text-primary font-bold">MDS specialists</strong> from top institutions.</>,
    icon: <Stethoscope size={24} />
  },
  {
    id: 2,
    title: 'Advanced Technology',
    desc: <>State-of-the-art <strong className="text-primary font-bold">digital scanners</strong> and equipment for precise treatments.</>,
    icon: <Microscope size={24} />
  },
  {
    id: 3,
    title: 'Ethical Dentistry',
    desc: <>Transparent consultations with <strong className="text-primary font-bold">no hidden costs</strong> or unnecessary procedures.</>,
    icon: <ShieldCheck size={24} />
  },
  {
    id: 4,
    title: 'Comfortable Environment',
    desc: <>A relaxing, <strong className="text-primary font-bold">anxiety-free</strong> atmosphere prioritizing your comfort and safety.</>,
    icon: <HeartHandshake size={24} />
  }
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToItems = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section className="why-us section-padding" id="about" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="heading-primary">Setting the Standard in Dental Care</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item gpu-accelerated ${index % 2 === 0 ? 'left' : 'right'}`}
              ref={addToItems}
            >
              <div className="timeline-dot">
                <div className="timeline-icon text-accent">{item.icon}</div>
              </div>
              <div className="timeline-content glass shadow-soft hover-elevate">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
