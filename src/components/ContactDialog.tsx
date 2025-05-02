import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
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
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 