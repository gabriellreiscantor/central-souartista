import React from 'react';

interface TestimonialCardProps {
  name: string;
  handle: string;
  content: string;
  avatar?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  handle,
  content,
  avatar,
}) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-smooth hover-lift">
      <div className="flex items-center gap-3 mb-4">
        {avatar ? (
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{initials}</span>
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{handle}</div>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed">"{content}"</p>
    </div>
  );
};
