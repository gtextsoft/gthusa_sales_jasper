import { useState, useEffect } from 'react';
import { MapPin, DollarSign, Shield, Building, Phone, Calendar, ChevronDown, ChevronUp, ArrowRight, Check, Award, TrendingUp, Globe, Clock, Users, Home, Menu, X, Mail } from 'lucide-react';


function App() {
  const [activeTab, setActiveTab] = useState('diaspora');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Removed unused imageLoaded state

  const TestimonialImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
      <div className="relative w-16 h-16 overflow-hidden rounded-full bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-500 text-xs">Error</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setError(true);
            }}
          />
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I verify the legitimacy of this investment?",
      answer: "Jasper Brookshire is fully registered and compliant with U.S. regulations. We provide all necessary documentation, including property titles, permits, and legal verifications. Our team can arrange calls with current investors and facilitate property tours. We also encourage potential investors to conduct independent due diligence."
    },
    {
      question: "Can I invest remotely without visiting Texas?",
      answer: "Absolutely! We've designed our investment process with remote investors in mind. We offer virtual tours, detailed documentation, and secure digital transaction processes. Our team is available to guide you through every step, from initial consultation to property management."
    },
    {
      question: "What are the payment options available?",
      answer: "We offer flexible payment plans starting with a $50,000 initial deposit. The remaining balance can be spread over 24 months with no hidden fees. We also have financing options available through our partner financial institutions with competitive interest rates and terms tailored for international investors."
    },
    {
      question: "How is the property managed after purchase?",
      answer: "Our dedicated property management team handles all aspects of property maintenance, tenant relations, and financial reporting. You'll receive regular updates and performance reports, ensuring a hassle-free ownership experience. We also provide quarterly financial statements and annual property valuation updates."
    },
    {
      question: "What legal protections are in place for international investors?",
      answer: "Jasper Brookshire operates under strict U.S. real estate laws that protect all investors regardless of nationality. We structure all investments through legally sound frameworks that ensure your ownership rights are fully protected. Our legal team specializes in international real estate transactions and can provide guidance on tax implications."
    },
    {
      question: "What makes Brookshire, Texas a strategic investment location?",
      answer: "Brookshire is experiencing rapid growth due to Houston's westward expansion. The area has seen significant infrastructure development, including new highways, schools, and commercial centers. Major corporations are establishing operations nearby, driving demand for housing and commercial space. This growth trajectory is expected to continue for the next decade."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Adeola Johnson",
      role: "Medical Professional, UK",
      quote: "Investing in Jasper Brookshire was one of the best financial decisions I've made. The process was transparent, and the returns have exceeded my expectations.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Chief Oluwaseun Adebayo",
      role: "Business Executive, Lagos",
      quote: "As someone who values security and growth, Jasper Brookshire has provided both. The property management is exceptional, allowing me to focus on my business in Nigeria.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Mrs. Ngozi Okonkwo",
      role: "Tech Entrepreneur, Canada",
      quote: "The team at Jasper Brookshire understands the unique needs of diaspora investors. They've made my investment journey smooth and profitable.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/gtexthomes.jpg" alt="GT Homes" className="h-8 w-auto ml-2" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`font-medium hover:text-amber-500 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
              <a href="#features" className={`font-medium hover:text-amber-500 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Features</a>
              <a href="#investment" className={`font-medium hover:text-amber-500 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Investment</a>
              <a href="#faq" className={`font-medium hover:text-amber-500 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}>FAQ</a>
              <a href="#contact" className={`bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg transition duration-300`}>Contact Us</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ?
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> :
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-3 py-4 px-6 absolute w-full">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="font-medium text-gray-800 hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#features" className="font-medium text-gray-800 hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#investment" className="font-medium text-gray-800 hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>Investment</a>
              <a href="#faq" className="font-medium text-gray-800 hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg transition duration-300 inline-block text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative" id="home">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img
          src="/Brookshire.jpg"
          alt="Luxury mansion in Brookshire, Texas"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center gap-6 md:gap-10 justify-between">
              <div>
                <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 flex-right">
                  {activeTab === 'diaspora'
                    ? "Your exclusive invitation to enjoy the Jasper Brookshire Advantage: Your Bridge to Financial Freedom in Texas Real Estate By Gtext Homes USA."
                    : "Your Bridge to Financial Freedom in Texas Real Estate."}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {activeTab === 'diaspora'
                    ? "An invitation to Invest in a premium, mixed-use estate in Brookshire, Texas designed for growth, security, and exceptional ROI."
                    : "Texas' designed for growth, security, and exceptional ROI."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                    Scroll Down <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  {/* <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                    Schedule a Tour <Calendar className="ml-2 h-5 w-5" />
                  </button> */}
                </div>
              </div>
              <img
                src="/Jasper Poster.jpg"
                alt="Jasper Brookshire Poster"
                className="hidden md:block w-[50%] max-w-[500px] h-auto ml-auto float-right flex-right margin-right-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audience Tabs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg overflow-hidden shadow-md">
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'diaspora' ? 'bg-amber-500 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveTab('diaspora')}
              >
                For Africans in Diaspora
              </button>
              {/* <button
                className={`px-6 py-3 font-medium ${activeTab === 'nigerian' ? 'bg-amber-500 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveTab('nigerian')}
              >
                For Nigerians
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Jasper Brookshire</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {activeTab === 'diaspora'
                ? "Are you an African professional or entrepreneur in the diaspora looking for secure and lucrative investment opportunities? Imagine owning a piece of a $200M real estate development strategically located in Brookshire, Texas, a rapidly growing area benefiting from its proximity to Houston's economic hub. Jasper Brookshire is the next big thing and you can be a part of the privileged few to invest now that you still can. You're not just investing in land or property; you're investing in a community that prioritizes growth, innovation, and sustainability. If securing generational wealth, diversifying your portfolio, or preparing for retirement, is your ultimate goal, this opportunity is best news you'll see today"
                : "Jasper Brookshire is the next big thing and you can be a part of the privileged few to invest now that you still can. You're not just investing in land or property; you're investing in a community that prioritizes growth, innovation, and sustainability. If securing generational wealth, diversifying your portfolio, or preparing for retirement, is your ultimate goal, this opportunity is best news you'll see today"}
            </p>
            {/* <p className="text-lg text-gray-600 leading-relaxed">
              {activeTab === 'diaspora'
                ? "With Jasper Brookshire, you're not just investing in land or property; you're investing in a community that prioritizes growth, innovation, and sustainability. Whether it's securing generational wealth, diversifying your portfolio, or preparing for retirement, this opportunity is crafted with you in mind."
                : "Our development combines the stability of U.S. real estate with the growth potential of an emerging market. Each property is designed with luxury, functionality, and appreciation in mind, ensuring your investment works as hard as you do."}
            </p> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-500 mb-2">25%</div>
              <div className="text-gray-600 font-medium">Projected Annual ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-500 mb-2">$200M</div>
              <div className="text-gray-600 font-medium">Development Value</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-500 mb-2">20%</div>
              <div className="text-gray-600 font-medium">3-Year Value Growth</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-500 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Satisfied Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-white" id="investment">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Why Invest in Jasper Brookshire?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our development offers a unique combination of location advantage, financial returns, and hassle-free management that makes it ideal for international investors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                <MapPin className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Location</h3>
              <p className="text-gray-600">
                Brookshire sits in Waller County, part of the Greater Houston Area, which is experiencing explosive economic growth. With close proximity to Houston's job market, commercial hubs, and major highways, Jasper Brookshire is a magnet for renters and homebuyers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                <DollarSign className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Exceptional ROI</h3>
              <p className="text-gray-600">
                <b>Projected ROI:</b> Up to 25% annually within the first 5 years.
                <br />
                <b>Resale Value Growth:</b> Property values in the area have increased by 20% over the past three years alone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                <Building className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Key Estate Features</h3>
              <p className="text-gray-600">
                Luxury 1- and 2-bedroom units starting at $350,000. High-end community amenities including fitness centers, coworking spaces, and recreational areas. Mixed-use spaces that attract businesses, boosting property values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hassle-Free Ownership</h3>
              <p className="text-gray-600">
                We understand the challenges Africans in the diaspora face with investments. With Jasper Brookshire, you'll enjoy:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Transparent property management</li>
                  <li>Regular updates and performance reports</li>
                  <li>Legal and tax compliance handled on your behalf</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Luxury Properties
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our collection of premium properties designed for both comfort and investment growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" 
                  alt="Luxury single-family home in Jasper Brookshire" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Single Family
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">The Monarch Residence</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Brookshire, Texas</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="text-gray-600">
                    <span className="font-semibold">4</span> Beds
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">3.5</span> Baths
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">3,200</span> Sq Ft
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-2xl font-bold text-amber-500">$750,000</div>
                  <div className="text-gray-600 text-sm">Estimated ROI: 22% annually</div>
                </div>
              </div>
            </div> 
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxury townhouse in Jasper Brookshire" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Townhouse
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">The Sapphire Townhome</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Brookshire, Texas</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="text-gray-600">
                    <span className="font-semibold">3</span> Beds
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">2.5</span> Baths
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">2,100</span> Sq Ft
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-2xl font-bold text-amber-500">$520,000</div>
                  <div className="text-gray-600 text-sm">Estimated ROI: 24% annually</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Luxury condominium in Jasper Brookshire" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Condominium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">The Jasper Luxury Condo</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Brookshire, Texas</span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="text-gray-600">
                    <span className="font-semibold">2</span> Beds
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">2</span> Baths
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">1,500</span> Sq Ft
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-2xl font-bold text-amber-500">$350,000</div>
                  <div className="text-gray-600 text-sm">Estimated ROI: 25% annually</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View All Properties <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section> */}

      {/* Estate Features */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Estate Features:</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Building className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Luxury Units</h3>
                      <p className="text-gray-600">1- and 2-bedroom units starting at $350,000.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Users className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">High-end community</h3>
                      <p className="text-gray-600">High-end community amenities including fitness centers, coworking spaces, and recreational areas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Building className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Mixed-Use Spaces</h3>
                      <p className="text-gray-600">Curated retail and commercial spaces that attract premium businesses, boosting property values and creating a vibrant, self-contained community.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Building className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Luxury Units</h3>
                      <p className="text-gray-600">1- and 2-bedroom units starting at $350,000.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Users className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">High-end community</h3>
                      <p className="text-gray-600">High-end community amenities including fitness centers, coworking spaces, and recreational areas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Building className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Mixed-Use Spaces</h3>
                      <p className="text-gray-600">Curated retail and commercial spaces that attract premium businesses, boosting property values and creating a vibrant, self-contained community.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Addressing Diaspora */}
              <div className="flex flex-col items-start gap-2 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Addressing Diaspora Investor Concerns:</h2>
                <ul className='flex flex-col gap-2 space-y-6'>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Shield className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">24/7 Security</h3>
                      <p className="text-gray-600">Gated community with round-the-clock security personnel, advanced surveillance systems, and secure access control for complete peace of mind.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Shield className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Fear of Fraud</h3>
                      <p className="text-gray-600">Jasper Brookshire is fully registered and compliant with U.S. regulations.</p>
                    </div>
                  </li>
                  {/* Management Weos */}
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <Building className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Management Woes</h3>
                      <p className="text-gray-600"> Our dedicated property managers ensure your investment works for you without the hassle.</p>
                    </div>
                  </li>
                  {/* Access to Financing */}
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                      <DollarSign className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Access to Financing</h3>
                      <p className="text-gray-600">JFlexible payment plans starting at $50,000 with financing options available.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[500px] w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/v5PIWsck45I"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            What Our Investors Say
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Join our community of satisfied investors who have already secured their financial future with Jasper Brookshire
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-amber-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex text-amber-500 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Investment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Simple Investment Process
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We've streamlined the investment process to make it easy for international investors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Consultation</h3>
              <p className="text-gray-600">Schedule a call with our investment advisors to discuss your goals and options.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Property Selection</h3>
              <p className="text-gray-600">Choose from our portfolio of premium properties that match your investment criteria.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Secure Financing</h3>
              <p className="text-gray-600">Make your initial deposit and finalize your payment plan or financing options.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Start Earning</h3>
              <p className="text-gray-600">Enjoy hassle-free property management and start receiving returns on your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Addressing Concerns */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            {activeTab === 'diaspora' ? 'Addressing Diaspora Investor Concerns' : 'Benefits of Investing'}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We understand the unique challenges faced by international investors and have solutions for every concern
          </p>
          <div className="max-w-4xl mx-auto">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Flexible Payment Options</h2>
            <p className="text-gray-600 mb-10">
              We understand the unique needs of international investors. Our flexible payment options are designed to make your investment journey smooth and hassle-free.
            </p>
            <div className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-8 shadow-md">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-amber-500 font-bold text-lg mb-1">Initial Deposit</div>
                  <div className="text-4xl font-bold text-gray-800">$50,000</div>
                </div>
                <div className="hidden md:block h-16 border-r border-amber-200"></div>
                <div className="text-center">
                  <div className="text-amber-500 font-bold text-lg mb-1">Balance Payment</div>
                  <div className="text-2xl font-bold text-gray-800">Spread over 24 months</div>
                </div>
                <div className="hidden md:block h-16 border-r border-amber-200"></div>
                <div className="text-center">
                  <div className="text-amber-500 font-bold text-lg mb-1">Financing Available</div>
                  <div className="text-2xl font-bold text-gray-800">Through partner banks</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl text-gray-800 mb-4">Additional Benefits</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">No hidden fees or unexpected charges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Transparent payment schedules with clear documentation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Multiple payment methods including international wire transfers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Dedicated financial advisor to guide you through the process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-amber-500" id="contact">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              {activeTab === 'diaspora'
                ? '🌟 Limited Plots Available! Reserve Yours Today.'
                : '💎 Don\'t Miss Out on Texas\' Most Exclusive Real Estate Opportunity!'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Secure your future with a premium investment in Jasper Brookshire. Our team is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="https://wa.link/6yfj33" className="bg-white hover:bg-gray-100 text-amber-500 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                Schedule an Investment Negotiation <Calendar className="ml-2 h-5 w-5" />
              </a>
              {/* <a href="tel:+18321234567" className="bg-transparent hover:bg-amber-600 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                Call Us <Phone className="ml-2 h-5 w-5" />
              </a> */}
            </div>
            <div className="text-white text-lg font-medium">
              {activeTab === 'diaspora' ? 'Call us: +1 (443) 790-3925' : 'Speak with a consultant: +234 (818) 0000 618'}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/gtexthomes.jpg" alt="Gtext Homes Logo" className="h-10 w-10 rounded-full" />
                <span className="ml-2 text-xl font-bold">Gtext Homes</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                A premium, mixed-use estate in Brookshire, Texas—designed for growth, security, and exceptional ROI.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/stephenakintayofoundation" className="bg-gray-800 hover:bg-amber-500 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="https://x.com/drsakintayo" className="bg-gray-800 hover:bg-amber-500 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165- 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.015-.628.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                </a>
                <a href="https://www.instagram.com/stephenakintayo" className="bg-gray-800 hover:bg-amber-500 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition">About Us</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-amber-500 transition">Features</a></li>
                <li><a href="#investment" className="text-gray-400 hover:text-amber-500 transition">Investment</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-amber-500 transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">518 Westgreen Blvd., Katy, TX, United States, Texas</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <div>US: +1 (443) 790-3925</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">info@gtexthomesusa.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Mon-Fri: 9AM-5PM (CST)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p className="mb-2">&copy; {new Date().getFullYear()} Jasper Brookshire. All rights reserved.</p>
            <p className="text-sm">Jasper Brookshire is a registered real estate development company in Texas, USA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;