import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Let's Connect</h1>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              I'm always eager to discuss new opportunities and collaborate on exciting projects. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:emmanuellawal2024@gmail.com" className="text-medium-contrast hover:text-primary">
                      emmanuellawal2024@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-medium-contrast">New Jersey, USA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect with Me</h3>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="icon">
                    <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link href="https://www.linkedin.com/in/emmanuel-lawal-98519718b/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link href="mailto:emmanuellawal2024@gmail.com">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or opportunity..."
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Note: This is a demo form. Please use email or LinkedIn to contact me directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 