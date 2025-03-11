
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Globe } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    investmentLevel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwpzjkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Consultation Request Received",
          description: "Our investment team will contact you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          investmentLevel: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-jasper-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Invest In a Secure And Profitable Location Today!</h2>
          <div className="w-20 h-1 bg-jasper-gold mx-auto my-6"></div>
          <p className="text-lg text-jasper-lightgold/90 max-w-3xl mx-auto">
            Our investment specialists are ready to guide you through every step of the process.
            Schedule a consultation to learn more about this exceptional opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white text-jasper-navy rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
            
            <form 
              action="https://formspree.io/f/xpwpzjkd" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-1">Country of Residence</label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="Your Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="investmentLevel" className="block text-sm font-medium mb-1">Investment Level</label>
                  <Select 
                    onValueChange={(value) => handleSelectChange('investmentLevel', value)}
                    value={formData.investmentLevel}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Investment Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                      <SelectItem value="1m+">$1 million+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message (Optional)</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any specific questions or requirements?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-jasper-gold hover:bg-jasper-lightgold text-jasper-navy font-medium py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </Button>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-jasper-blue/20 backdrop-blur-sm p-8 rounded-xl border border-jasper-gold/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-jasper-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-jasper-lightgold">Call Us Directly</p>
                    <p className="text-xl font-bold">+1 (443) 790-3925</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-jasper-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-jasper-lightgold">Email Us</p>
                    <p className="text-xl font-bold">info@gtexthomesusa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-jasper-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-jasper-lightgold">International Investors</p>
                    <p className="text-white">
                      We specialize in assisting international clients with the entire investment process,
                      including legal guidance, tax planning, and property management.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-jasper-gold/10 rounded-lg border border-jasper-gold/30">
                <h4 className="font-bold text-jasper-gold mb-2">Investment Office</h4>
                <p className="text-white">
                518 Westgreen Blvd.<br />
                Katy<br />
                Texas<br />
                United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
