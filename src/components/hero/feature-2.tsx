import { Heart, Zap, Clock, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: Heart,
    title: 'Quality Assurance',
    description:
      'Every product in our catalog undergoes rigorous quality checks to meet the highest standards of excellence and performance.',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description:
      'Experience lightning-fast order processing and delivery with our advanced logistics network and efficient service protocols.',
  },
  {
    icon: Clock,
    title: 'Timely Updates',
    description:
      'Get real-time notifications and detailed tracking for all your orders, keeping you informed throughout the delivery process.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our team of dedicated professionals is available 24/7 to assist you with personalized support and expert advice.',
  },
]

interface Feature2Props extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

export default function Feature2({ className, ...props }: Feature2Props) {
  return (
    <section className={cn('container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8', className)} {...props}>
      <div className='container mx-auto'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='space-y-10'>
            <header className='space-y-4'>
              <h2 className='text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl'>Why Choose Us</h2>
              <p className='text-muted-foreground text-base text-pretty md:text-lg'>
                We deliver exceptional quality and service that sets us apart. Experience the difference with our
                dedicated approach.
              </p>
            </header>

            <div className='grid gap-6 sm:grid-cols-2 sm:gap-8'>
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className='group flex flex-col items-start gap-3 rounded-lg'>
                  <Badge variant='secondary' className='inline-flex items-center justify-center rounded-full p-3'>
                    <Icon className='!size-5' aria-hidden='true' />
                  </Badge>
                  <div className='space-y-1.5'>
                    <h3 className='text-foreground text-base font-semibold md:text-lg'>{title}</h3>
                    <p className='text-muted-foreground text-sm text-balance'>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='bg-muted relative z-10 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='aspect-[4/3] w-full'>
                <img
                  src='https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop'
                  alt='Modern living room with pendant light and minimalist furniture'
                  className='size-full object-cover grayscale'
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
