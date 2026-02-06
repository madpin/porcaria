import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden',
      className
    )}>
      {children}
    </div>
  );
}
