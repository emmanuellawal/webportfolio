import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Download, CheckCircle } from "lucide-react"
import { useState } from "react"

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [showFreeResource, setShowFreeResource] = useState(false);
  
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
        
        <form className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                id="name"
                placeholder="Full Name *"
                className="bg-background/50 border-border/50 focus:border-primary-500"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email Address *"
                className="bg-background/50 border-border/50 focus:border-primary-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              id="subject"
              placeholder="Subject"
              className="bg-background/50 border-border/50 focus:border-primary-500"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              placeholder="Message *"
              className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary-500"
            />
          </div>
          
          <div className="flex items-start gap-2">
            <div className="flex h-6 items-center">
              <input
                id="receive-updates"
                type="checkbox"
                className="h-4 w-4 rounded border-border/50 text-primary-500 focus:ring-primary-500/20"
                defaultChecked
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
          >
            <Send className="mr-2 h-4 w-4" /> Send Message & Get Free Guide
          </Button>
          
          <p className="text-xs text-center text-medium-contrast mt-2">
            I personally respond to all messages within 24-48 hours
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
} 