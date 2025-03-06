import { CardLoader } from './card_loader';

export const GridCardLoader = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <CardLoader key={index} />
      ))}
    </div>
  );
};