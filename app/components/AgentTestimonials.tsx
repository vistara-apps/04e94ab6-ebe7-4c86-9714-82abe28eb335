'use client';

import { Star, CheckCircle2, User } from 'lucide-react';

interface Testimonial {
  id: string;
  agentName: string;
  userName: string;
  rating: number;
  review: string;
  verified: boolean;
  timestamp: string;
}

export function AgentTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      agentName: 'Zara Alpha',
      userName: 'cryptotrader.eth',
      rating: 5,
      review: 'Incredible insights! My portfolio is up 45% since following Zara Alpha recommendations.',
      verified: true,
      timestamp: '2 days ago',
    },
    {
      id: '2',
      agentName: 'Zara Beta',
      userName: 'defi_master',
      rating: 5,
      review: 'The AI-powered recommendations are spot on. Best trading assistant I have used.',
      verified: true,
      timestamp: '1 week ago',
    },
  ];

  return (
    <div className="space-y-4">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-surface rounded-lg p-6 border border-border shadow-card hover:border-accent transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center text-accent">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-fg">
                    {testimonial.userName}
                  </h4>
                  {testimonial.verified && (
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  )}
                </div>
                <p className="text-sm text-muted">for {testimonial.agentName}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
          </div>

          <p className="text-sm text-fg mb-3">{testimonial.review}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted">{testimonial.timestamp}</span>
            {testimonial.verified && (
              <span className="text-xs text-accent font-medium">
                Verified onchain
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
