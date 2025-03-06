import { ClipboardList } from 'lucide-react';

export const EmptyState = ({ title = "No Data Found", description = "There's nothing to display here yet." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <ClipboardList className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};