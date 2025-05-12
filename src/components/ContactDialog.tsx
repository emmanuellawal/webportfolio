import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Download, CheckCircle } from "lucide-react"
import { useState, FormEvent } from "react"

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [showFreeResource, setShowFreeResource] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    receiveUpdates: true
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      receiveUpdates: e.target.checked
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here we would typically send the form data to a server endpoint
      // that would handle the email sending without exposing the recipient email
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulating success response
      setSuccess(true);
      
      // Reset form after 3 seconds on success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          receiveUpdates: true
        });
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-lg border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            Send a Message
          </DialogTitle>
          <DialogDescription className="text-medium-contrast">
            How can I help you? Fill out the form below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-primary-500/10 rounded-lg p-3 mb-4 border border-primary-500/20">
          <div className="flex items-start gap-3">
            <Download className="h-5 w-5 text-primary-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground">Get my free Web Dev Resource Guide</h4>
              <p className="text-sm text-medium-contrast">I'll send you my curated collection of resources that helped me become a better developer</p>
              <Button 
                variant="link" 
                className="text-primary-500 p-0 h-auto mt-1"
                onClick={() => setShowFreeResource(!showFreeResource)}
              >
                {showFreeResource ? "Hide details" : "Learn more"}
              </Button>
            </div>
          </div>
          
          {showFreeResource && (
            <div className="mt-3 pl-8 space-y-2 text-sm text-medium-contrast">
              <p>This free guide includes:</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary-500" />
                  <span>Top 10 resources for modern full-stack development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary-500" />
                  <span>AI integration tutorials and examples</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-primary-500" />
                  <span>Personal productivity tools I use daily</span>
                </li>
              </ul>
              <p className="text-xs italic mt-2">You'll receive this guide after submitting the form</p>
            </div>
          )}
        </div>
        
        {success ? (
          <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20 text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
            <p className="text-medium-contrast">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="name"
                  placeholder="Full Name *"
                  className="bg-background/50 border-border/50 focus:border-primary-500"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address *"
                  className="bg-background/50 border-border/50 focus:border-primary-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                id="subject"
                placeholder="Subject"
                className="bg-background/50 border-border/50 focus:border-primary-500"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Message *"
                className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary-500"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex items-start gap-2">
              <div className="flex h-6 items-center">
                <input
                  id="receive-updates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border/50 text-primary-500 focus:ring-primary-500/20"
                  checked={formData.receiveUpdates}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="text-sm">
                <label htmlFor="receive-updates" className="text-medium-contrast">
                  Yes, I'd like to receive occasional updates about new projects and insights
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message & Get Free Guide
                </>
              )}
            </Button>
            
            <p className="text-xs text-center text-medium-contrast mt-2">
              I personally respond to all messages within 24-48 hours
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
} 