import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactSection1() {
  return (
    <section className='px-4 py-16 md:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-balance md:text-4xl'>Get in Touch</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
          {/* Contact Form */}
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='text-balance'>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className='space-y-8'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='first-name-aB3x9'>First name</Label>
                  <Input id='first-name-aB3x9' placeholder='John' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='last-name-cD4y8'>Last name</Label>
                  <Input id='last-name-cD4y8' placeholder='Doe' />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email-eF5z7'>Email</Label>
                <Input id='email-eF5z7' type='email' placeholder='john@example.com' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='subject-gH6w6'>Subject</Label>
                <Input id='subject-gH6w6' placeholder='How can we help?' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message-iJ7v5'>Message</Label>
                <Textarea
                  id='message-iJ7v5'
                  placeholder='Tell us more about your project...'
                  className='min-h-[120px]'
                />
              </div>
              <Button className='w-full cursor-pointer'>Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information & Additional Info */}
          <div className='flex h-full flex-col space-y-6'>
            {/* Contact Information */}
            <Card className='flex-1 gap-3'>
              <CardHeader>
                <CardTitle className='text-lg text-balance'>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Mail className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Email</h4>
                    <p className='text-muted-foreground text-xs'>hello@company.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Phone className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Phone</h4>
                    <p className='text-muted-foreground text-xs'>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-primary/10 mt-0.5 flex size-8 items-center justify-center rounded-full'>
                    <MapPin className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Office</h4>
                    <p className='text-muted-foreground text-xs'>
                      123 Business Ave, Suite 100
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className='gap-3'>
              <CardHeader>
                <CardTitle className='text-lg text-balance'>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span className='text-muted-foreground'>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span className='text-muted-foreground'>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span className='text-muted-foreground'>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <Card className='gap-3'>
              <CardHeader>
                <CardTitle className='text-lg text-balance'>Prefer to Call?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground mb-3 text-sm'>
                  Speak directly with our team for immediate assistance.
                </p>
                <Button variant='outline' className='w-full cursor-pointer'>
                  <Phone className='me-2 size-4' />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
